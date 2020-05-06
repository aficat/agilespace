import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from './PostData';

export class test extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            redirect: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login() {
        if (this.state.email && this.state.password) {
            PostData('login', this.state).then((result) => {
                let responseJson = result;
                if (responseJson) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirect: true });
                } else {
                }
            });
        } else {
            console.log("Error");
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/Dashboard'} />)
        }

        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/Dashboard'} />)
        }
        return (

            <div className="row" id="Body">
                <div className="medium-5 columns left">
                    <h4>Login</h4>
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" onChange={this.onChange} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
                    <input type="submit" className="button success" value="Login" onClick={this.login} />
                    <a href="/signup">Registration</a>
                </div>
            </div>
        );

    }

}
