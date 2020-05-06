import { Container, Table, TableBody, TableHead } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import { Glyphicon } from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router';

export class booking extends Component {
    displayName = booking.name
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            isLoaded: false,
        }
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/listings/')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    listings: json,
                })
            });
    }

    getData(index, event) {
        console.log('item index = ', index);
        this.setState({ bookingLink: index });
        //const data = this.state.listings[index];
        if (index != null) {
            let path = '/slot';
            this.props.history.push(path);
        }
    }

    render() {
        var { isLoaded, listings } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="booking">
                    <Container>
                        <div className="row">
                            <h1>Welcome to Booking Page</h1>
                            {/*let us loop the array in lisiting*/}
                            <Table hover>
                                <TableHead>
                                    <tr>
                                        <th>Owner Email</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Postal Code</th>
                                        <th>Email</th>
                                        <th>Buidling Type</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                    </tr>
                                </TableHead>
                                <TableBody>
                                    {listings.map(listing => (
                                        <tr key={listing.lId}>
                                            <th> {listing.listingOwner.email}</th>
                                            <th> {listing.listingOwner.firstName} {' '}{listing.listingOwner.lastName}</th>
                                            <th> {listing.listingOwner.phoneNum}</th>
                                            <th> {listing.location.address}</th>
                                            <th> {listing.location.postalCode}</th>
                                            <th> {listing.listingOwner.email}</th>
                                            <th>{listing.buildingTypeEnum}</th>
                                            <th> {listing.header}</th>
                                            <th>{listing.price}</th>
                                            <th><button onClick={this.getData.bind(this, listing)}>View Slot</button></th>
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
export default booking;