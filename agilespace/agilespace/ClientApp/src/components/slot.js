import { Container, Table, TableBody, TableHead } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { Glyphicon } from 'react-bootstrap';
import { moment } from 'moment';
import { withRouter, Redirect } from 'react-router';

export class slot extends Component {
    displayName = slot.name
    constructor(props) {
        super(props);
        this.state = {
            slots: [],
            isLoaded: false,
        }

    }

    componentDidMount() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/slots/')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    slots: json,
                })
            });
    }

    getData(index, event) {
        console.log('item index = ', index);
        // const bookingLink = this.state.listings[index];
        if (index != null) {
            let path = '/confirmationBooking';
            this.props.history.push(path);
        }
    }
    transformDateFormat(json) {
        console.log('into transform method', json);
    }

    render() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/listings/')
            .then((response) => response.json())
            .then(this.transformDateFormat.bind(this))

        var { isLoaded, slots } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="slot">
                    <Container>
                        <div className="row">
                            <h1>Please choose a slot</h1>

                            {/*let us loop the array in lisiting*/}
                            <Table hover>
                                <TableHead>
                                    <tr>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Building Type</th>
                                        <th>Location</th>
                                        <th>Availability</th>
                                        <th>Price</th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    {slots.map(index => (
                                        <tr key={index.lId}>
                                            <th> {index.startDate}</th>
                                            <th> {index.endDate}</th>
                                            <th>{index.listing.buildingTypeEnum}</th>
                                            <th> {index.listing.header}</th>
                                            <th> {index.avaliabilityEnum} </th>
                                            <th>{index.listing.price}</th>
                                            <th><button onClick={this.getData.bind(this, index)}>Book Now!</button></th>
                                        </tr>
                                    ))
                                    }
                                </TableBody>
                            </Table>`
                    </div>
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
            )
        }
    }
} 