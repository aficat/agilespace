import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table
} from "reactstrap";

export class Dashboard extends Component {
    displayName = Dashboard.name

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
           
                <div className="content">
                    <Row>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                    <CardTitle tag="h4">User Profile</CardTitle>
                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            className="btn-round btn-simple btn-icon"
                                            color="default">
                                            <i className="now-ui-icons loader_gear" />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Edit Profile</DropdownItem>
                                            <DropdownItem>Change Password</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem>Remove data </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                <CardBody>
                                </CardBody>
                                <CardFooter>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardTitle tag="h4">All products</CardTitle>
                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            className="btn-round btn-simple btn-icon"
                                            color="default">
                                            <i className="now-ui-icons loader_gear" />
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem>Something else here</DropdownItem>
                                            <DropdownItem className="text-danger">
                                                Remove data </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                    </div>
                                </CardBody>
                                <CardFooter>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                   <CardTitle tag="h4">24 Hours Performance</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card className="card-tasks">
                                <CardHeader>
                                    <CardTitle tag="h4">Tasks</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    
                                </CardBody>
                                <CardFooter>
                                    <hr />
                                    
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4">Employees Stats</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className=" text-primary">
                                            <tr>
                                                <th>Name</th>
                                                <th>Country</th>
                                                <th>City</th>
                                                <th className="text-right">Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dakota Rice</td>
                                                <td>Niger</td>
                                                <td>Oud-Turnhout</td>
                                                <td className="text-right">$36,738</td>
                                            </tr>
                                            <tr>
                                                <td>Minerva Hooper</td>
                                                <td>Curaçao</td>
                                                <td>Sinaai-Waas</td>
                                                <td className="text-right">$23,789</td>
                                            </tr>
                                            <tr>
                                                <td>Sage Rodriguez</td>
                                                <td>Netherlands</td>
                                                <td>Baileux</td>
                                                <td className="text-right">$56,142</td>
                                            </tr>
                                            <tr>
                                                <td>Doris Greene</td>
                                                <td>Malawi</td>
                                                <td>Feldkirchen in Kärnten</td>
                                                <td className="text-right">$63,542</td>
                                            </tr>
                                            <tr>
                                                <td>Mason Porter</td>
                                                <td>Chile</td>
                                                <td>Gloucester</td>
                                                <td className="text-right">$78,615</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
           
      </div>
    );
  }
}
