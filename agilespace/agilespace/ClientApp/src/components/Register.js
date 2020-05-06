import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input
} from 'reactstrap';
import { Row, Button } from 'mdbreact';
import { Glyphicon } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export class Register extends Component {
    displayName = Register.name

   
    render() {
        return (
            <div>
                <Container className="App">
                   
                    <Col md="6">
                        <h1>Sign up</h1>
                        <div className="card">
                            <div className="card-body px-lg-5 pt-0">

                                <form>
                                    <label htmlFor="email"
                                        className="grey-text">Your Email</label>
                                    <input type="text"
                                        refs="email"
                                    id="email"
                                        placeholder="Type your email here"
                                        className="form-control" />
                                    <br />
                                    <label htmlFor="password"
                                        className="grey-text">Your Password</label>
                                    <input type="text"
                                        refs="password"
                                        id="password"
                                        placeholder="Type your password here"
                                        className="form-control" />
                                    <br />
                                    <label htmlFor="firstName"
                                        className="grey-text">Your First Name</label>
                                    <input type="text"
                                        refs="firstName"
                                        id="firstName"
                                        placeholder="Type your first name here"
                                        className="form-control" />
                                    <br />
                                    <label htmlFor="lastName"
                                        className="grey-text">Your Last Name</label>
                                    <input type="text"
                                        refs="lastName"
                                        id="lastName"
                                        placeholder="Type your last name here"
                                        className="form-control" />
                                    <br />
                                    <label htmlFor="phonenum"
                                        className="grey-text">Your Phone Number</label>
                                    <input type="text"
                                        refs="phonenum"
                                        id="phonenum"
                                        placeholder="Type your phone number here"
                                        className="form-control" />
                                  
                                        <button className="btn btn-unique aqua-gradient" type="submit">Register</button>
                                    <div className="text-center">
                                        <p>Already a member? <a href="/member">Login</a>
                                        </p>

                                    </div>
                                </form>
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
