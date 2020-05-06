import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Center from 'react-center';
import { Glyphicon } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import {
    Form,
    FormGroup, Label, Input
} from 'reactstrap';

export class AddListing extends Component {
    displayName = AddListing.name

    /*
    getInitialState() {
        return {
            buildingTypeEnum: "OFFICE",
            header: this.props.header,
            description: this.props.description,
            unitLevel: this.props.unitLevel,
            unitNumber: this.props.unitNumber,
            price: this.props.price,
            entityStatusEnum: "ACTIVATED"
        }
    },

    handleHeader(e) {
        this.setState({
            header: e.target.value
        });
    },

    handleDescription(e) {
        this.setState({
            description: e.target.value
        });

    },

    handleUnitLevel(e) {
        this.setState({
            unitLevel: e.target.value
        });
    },

    handleUnitNumber(e) {
        this.setState({
            unitNumber: e.target.value
        });
    },

    handlePrice(e) {
        this.setState({
            price: e.target.value
        });
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },*/

    render() {
        return (
            <div>
                <Container className="App">
                    <Col md="8">
                        <h1>Add A Listing</h1>
                        <div>
                            <div className="card">
                                <div className="card-body px-lg-5 pt-0">
                                    <Col>
                                        <FormGroup>
                                            <Label>Address</Label>
                                            <Input
                                                type="text"
                                                name="header"
                                                id="header"
                                                required="required"
                                                //value={this.state.header}
                                                //onChange={this.handleHeader}
                                                placeholder="Type the address here"
                                                className="form-control"
                                            />
                                        </FormGroup>
                                        <div>
                                            <label htmlFor="description">Description</label>
                                            <textarea className="form-control md-textarea"
                                                id="description"
                                                name="description"
                                               // value={this.state.description}
                                                //onChange={this.handleDescription}
                                                placeholder defaultValue={"Enter description here"} />
                                        </div>
                                    </Col>
                                    <Col>

                                        <label htmlFor="unitLevel">Unit Level</label>
                                        <input type="text"
                                            id="unitLevel"
                                            name="unitLevel"
                                           // value={this.state.unitLevel}
                                            //onChange={this.handleUnitLevel}
                                            className="form-control" placeholder />

                                        <label htmlFor="unitNumber">Unit Number</label>
                                        <input type="text"
                                            id="unitNumber"
                                            name="unitNumber"
                                           // value={this.state.unitNumber}
                                           // onChange={this.handleUnitNumber}
                                            className="form-control"
                                            placeholder />

                                    </Col>

                                    <FormGroup>
                                        <Label for="price">Price</Label>
                                        <Input
                                            type="price"
                                            name="price"
                                            id="price"
                                           // value={this.state.price}
                                           // onChange={this.handlePrice}
                                            className="form-control"
                                            placeholder="Type your price here (e.g. $4.50)"
                                        />
                                    </FormGroup>
                                    <a href="/dashboard">
                                        <Button type="submit"
                                            className="aqua-gradient ">Submit</Button>
                                        {/* set buildingTypeEnum & entityStatusEnum*/}
                                    </a>
                                    
                                </div>
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
    export default AddListing;
