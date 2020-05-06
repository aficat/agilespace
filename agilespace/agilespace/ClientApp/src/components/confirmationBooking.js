import { Container, Table, TableBody, TableHead } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { Glyphicon } from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router';

export class confirmationBooking extends Component {
    displayName = confirmationBooking.name
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/bookings/')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    bookings: json,
                })
            });
    }

    render() {
        var { isLoaded, bookings } = this.state;
        var confirmationId = Math.floor(Math.random() * 100000 + 1);
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="confirmationPage">
                    <Container>
                        <div className="row">
                            <h1>Booking Successful</h1>
                            {/*let us loop the array in lisiting*/}
                            <Table hover>
                                <TableHead>
                                    <tr>
                                        <th>Booking Confirmation Number</th>
                                        <th>Booking Status</th>
                                        <th>Owner Email</th>
                                        <th>Owner Phone Number</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                    </tr>
                                </TableHead>
                                <TableBody>

                                    {bookings.map(listing => (
                                        <tr key={listing.bId}>
                                            <th>{confirmationId}</th>
                                            <th> {listing.entityStatusEnum}</th>
                                            <th> {listing.guest.email}</th>
                                            <th> {listing.guest.phoneNum}</th>
                                            <th> {listing.slots[0].startDate}</th>
                                            <th> {listing.slots[0].endDate}</th>
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
            );
        }
    }
}
export default confirmationBooking;