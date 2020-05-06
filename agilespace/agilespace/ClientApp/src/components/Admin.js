import React, { Component } from 'react';
import './dashboard.css';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table
} from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Center from 'react-center';
import { Glyphicon } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export class Admin extends Component {
    displayName = Admin.name

    constructor() {
        super();
        this.state = {
            customers: [],
            listings: [],
            bookings: [],
            locations: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch('http://localhost:8080/AgileSpace-war/webresources/customers'),
            fetch('http://localhost:8080/AgileSpace-war/webresources/listings'),
            fetch('http://localhost:8080/AgileSpace-war/webresources/bookings'),
            fetch('http://localhost:8080/AgileSpace-war/webresources/locations')
        ]).then(([dataC, dataL, dataB, dataLoc]) => Promise.all([dataC.json(), dataL.json(), dataB.json(), dataLoc.json()]))
            .then(([data1, data2, data3, data4]) =>
                //console.log(data);
                /*Update the state*/
                this.setState({
                    customers: data1,
                    listings: data2,
                    bookings: data3,
                    locations: data4
                }));
    }

    render() {

        const { customers } = this.state;
        const { listings } = this.state;
        const { bookings } = this.state;
        const { locations } = this.state;

        return (
            <div>
                <div>
                    <div id="wrapper">
                        {/* /.row */}
                        <div className="container">
                            <h1>Administrator</h1>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">
                                            <div className="row">
                                                <div className="col-xs-3">
                                                    <i className="fa fa-comments fa-5x" />
                                                </div>
                                                <div className="col-xs-9 text-right">
                                                    <div className="huge">
                                                        {
                                                            customers.length
                                                        }
                                                    </div>
                                                    <div>Total Number of Users</div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="panel panel-green">
                                        <div className="panel-heading">
                                            <div className="row">
                                                <div className="col-xs-3">
                                                    <i className="fa fa-tasks fa-5x" />
                                                </div>
                                                <div className="col-xs-9 text-right">
                                                    <div className="huge">
                                                        {
                                                            listings.length
                                                        }
                                                    </div>
                                                    <div>Total Number of Listings</div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="panel panel-yellow">
                                        <div className="panel-heading">
                                            <div className="row">
                                                <div className="col-xs-3">
                                                    <i className="fa fa-shopping-cart fa-5x" />
                                                </div>
                                                <div className="col-xs-9 text-right">
                                                    <div className="huge">
                                                        {
                                                            bookings.length
                                                        }
                                                    </div>
                                                    <div>Total Number of Bookings</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="panel panel-red">
                                        <div className="panel-heading">
                                            <div className="row">
                                                <div className="col-xs-3">
                                                    <i className="fa fa-support fa-5x" />
                                                </div>
                                                <div className="col-xs-9 text-right">
                                                    <div className="huge">
                                                        {
                                                            locations.length
                                                        }
                                                    </div>
                                                    <div>Number of Locations</div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                </div>
                                </div>
                            {/* /.row */}
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <i className="fa fa-bar-chart-o fa-fw" /> List of Users
                    <div className="pull-right">
                                                <div className="btn-group">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn btn-default btn-xs dropdown-toggle aqua-gradient"
                                                            color="default">
                                                            <i className="now-ui-icons loader_gear" />
                                                        </DropdownToggle>
                                                        <DropdownMenu right>
                                                            <DropdownItem>Deactivate User</DropdownItem>
                                                            <DropdownItem>Reactivate User</DropdownItem>
                                                            <DropdownItem>Delete User</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body">
                                            <div id="morris-area-chart" />
                                            <Table responsive>
                                                <thead className=" text-primary">
                                                    <tr>
                                                        <th>User ID</th>
                                                        <th>Email</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Phone Number</th>
                                                        <th>Rating</th>
                                                        <th>Entity Status Enum</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        customers.map(item => (<tr>

                                                            <td>{item.id}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.firstName}</td>
                                                                <td>{item.lastName}</td>
                                                                <td>{item.phoneNum}</td>
                                                            <td>{item.rating}</td>
                                                            <td>{item.entityStatusEnum}</td>

                                                        </tr>
                                                            ))
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                        {/* /.panel-body */}
                                    </div>
                                    {/* /.panel */}
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <i className="fa fa-bar-chart-o fa-fw" /> List of Listings
                    <div className="pull-right">
                                                <div className="btn-group">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn btn-default btn-xs dropdown-toggle aqua-gradient"
                                                            color="default">
                                                            <i className="now-ui-icons loader_gear" />
                                                        </DropdownToggle>
                                                        <DropdownMenu right>
                                                            <DropdownItem>Delete Listing</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body">
                                            <div className="row">
                                                    <Table responsive>
                                                        <thead className=" text-primary">
                                                            <tr>
                                                                <th>Listing ID</th>
                                                                <th>Building Type</th>
                                                                <th>Header</th>
                                                                <th>Price</th>
                                                                <th>Entity Status Enum</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            listings.map(item => (<tr>

                                                                <td>{item.lId}</td>
                                                                <td>{item.buildingTypeEnum}</td>
                                                                <td>{item.header}</td>
                                                                <td>{item.price}</td>
                                                                <td>{item.entityStatusEnum}</td>

                                                            </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </Table>
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* /.panel-body */}
                                    </div>     
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <i className="fa fa-bar-chart-o fa-fw" /> List of Bookings
                                            </div>
                                            {/* /.panel-heading */}
                                            <div className="panel-body">
                                                <div className="row">
                                                    <Table responsive>
                                                        <thead className=" text-primary">
                                                            <tr>
                                                                <th>Booking ID</th>
                                                                <th>Booking Status Enum</th>
                                                                <th>Entity Status Enum</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            bookings.map(item => (<tr>

                                                                <td>{item.bId}</td>
                                                                <td>{item.bookingStatusEnum}</td>
                                                                <td>{item.entityStatusEnum}</td>

                                                            </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </Table>
                                                </div>
                                                {/* /.row */}
                                            </div>
                                            {/* /.panel-body */}
                                    </div>           
                                    {/* /.panel */}
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <i className="fa fa-bar-chart-o fa-fw" /> List of Locations
                                        </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body">
                                            <div className="row">
                                                <Table responsive>
                                                    <thead className=" text-primary">
                                                        <tr>
                                                            <th>Address</th>
                                                            <th>Postal Code</th>
                                                            <th>Longitude</th>
                                                            <th>Latitude</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            locations.map(item => (<tr>
                                                                
                                                                <td>{item.address}</td>
                                                                <td>{item.postalCode}</td>
                                                                <td>{item.longitude}</td>
                                                                <td>{item.latitude}</td>

                                                            </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </Table>
                                            </div>
                                            {/* /.row */}
                                        </div>
                                        {/* /.panel-body */}
                                    </div>     
                                </div>
                                <div className="col-lg-4">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <i className="fa fa-bell fa-fw" /> Notifications Panel
                  </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body">
                                            <div className="list-group">
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-comment fa-fw" /> New Comment
                        <span className="pull-right text-muted small"><em>4 minutes ago</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-twitter fa-fw" /> 3 New Followers
                        <span className="pull-right text-muted small"><em>12 minutes ago</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-envelope fa-fw" /> Message Sent
                        <span className="pull-right text-muted small"><em>27 minutes ago</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-tasks fa-fw" /> New Task
                        <span className="pull-right text-muted small"><em>43 minutes ago</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-upload fa-fw" /> Server Rebooted
                        <span className="pull-right text-muted small"><em>11:32 AM</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-bolt fa-fw" /> Server Crashed!
                        <span className="pull-right text-muted small"><em>11:13 AM</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-warning fa-fw" /> Server Not Responding
                        <span className="pull-right text-muted small"><em>10:57 AM</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-shopping-cart fa-fw" /> New Order Placed
                        <span className="pull-right text-muted small"><em>9:49 AM</em>
                                                    </span>
                                                </a>
                                                <a href="#" className="list-group-item">
                                                    <i className="fa fa-money fa-fw" /> Payment Received
                        <span className="pull-right text-muted small"><em>Yesterday</em>
                                                    </span>
                                                </a>
                                            </div>
                                            {/* /.list-group */}
                                            <a href="#" className="btn btn-default btn-block">View All Alerts</a>
                                        </div>
                                        {/* /.panel-body */}
                                    </div>
                                    
                                    <div className="chat-panel panel panel-default">
                                        <div className="panel-heading">
                                            <i className="fa fa-comments fa-fw" /> Chat
                    <div className="btn-group">
                                            </div>
                                        </div>
                                        {/* /.panel-heading */}
                                        <div className="panel-body">
                                            <ul className="chat">
                                                <li className="left clearfix">
                                                    <span className="chat-img pull-left">
                                                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                                                    </span>
                                                    <div className="chat-body clearfix">
                                                        <div className="header">
                                                            <strong className="primary-font">Jack Sparrow</strong>
                                                            <small className="pull-right text-muted">
                                                                <i className="fa fa-clock-o fa-fw" /> 12 mins ago
                            </small>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                          </p>
                                                    </div>
                                                </li>
                                                <li className="right clearfix">
                                                    <span className="chat-img pull-right">
                                                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                                                    </span>
                                                    <div className="chat-body clearfix">
                                                        <div className="header">
                                                            <small className=" text-muted">
                                                                <i className="fa fa-clock-o fa-fw" /> 13 mins ago</small>
                                                            <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                          </p>
                                                    </div>
                                                </li>
                                                <li className="left clearfix">
                                                    <span className="chat-img pull-left">
                                                        <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                                                    </span>
                                                    <div className="chat-body clearfix">
                                                        <div className="header">
                                                            <strong className="primary-font">Jack Sparrow</strong>
                                                            <small className="pull-right text-muted">
                                                                <i className="fa fa-clock-o fa-fw" /> 14 mins ago</small>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                          </p>
                                                    </div>
                                                </li>
                                                <li className="right clearfix">
                                                    <span className="chat-img pull-right">
                                                        <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                                                    </span>
                                                    <div className="chat-body clearfix">
                                                        <div className="header">
                                                            <small className=" text-muted">
                                                                <i className="fa fa-clock-o fa-fw" /> 15 mins ago</small>
                                                            <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                          </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /.panel-body */}
                                        <div className="panel-footer">
                                            <div className="input-group">
                                                <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-warning btn-sm" id="btn-chat">
                                                        Send
                        </button>
                                                </span>
                                            </div>
                                        </div>
                                        {/* /.panel-footer */}
                                    </div>
                                    {/* /.panel .chat-panel */}
                                </div>
                                {/* /.col-lg-4 */}
                            </div>
                            {/* /.row */}
                        </div>
                        </div>
                        </div>

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
