import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import { Redirect } from 'react-router-dom';
import { PostData } from './PostData';
import {
    Container, Col, Form,
    FormGroup, Label, Input
} from 'reactstrap';
import { Row, Button } from 'mdbreact';
import { Glyphicon } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export class Member extends Component {
    displayName = Member.name

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
            <div>
              
                <Container className="App">
                    <Col md="6">
                        <h1>Sign In</h1>
                        <div className="card">
                            <div className="card-body px-lg-5 pt-0">

                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                        id="exampleEmail"
                                                placeholder="Type your email here" onChange={this.onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                                placeholder="Type your password here" onChange={this.onChange}
                                />
                            </FormGroup>
                                    </Col>
                                    <input type="submit" className="aqua-gradient button success" value="Login" onClick={this.login}/>
                                    <div className="text-center">
                                        <p>Not a member? <a href="/register">Register</a>
                                        </p>

                                    </div>

                                </Form>
                            </div>
                        </div>
                    </Col>
                </Container>
                {/* Footer */}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="copyright">Copyright <Glyphicon glyph='copyright-mark' /> AgileSpace 2018</span>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <SocialIcon url="http://instagram.com/agilespace" />
                                    </li>
                                    <li className="list-inline-item">
                                        <SocialIcon url="http://twitter.com/agilespace" />
                                    </li>
                                    <li className="list-inline-item">
                                        <SocialIcon url="http://facebook.com/agilespace" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-inline quicklinks">
                                    <li className="list-inline-item">
                                        <a href="/privacypolicy">Privacy Policy</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="/terms">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                </div>
        );
    }
}
