import React, {Component} from 'react';
import { Row, Col, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';
import {ButtonToolbar, Button} from 'react-bootstrap';


class MyVenues extends Component {

    render(){
    var currentUser = sessionStorage.getItem('userData'); //returns string 
        var userData = JSON.parse(currentUser); //parse to JSON object
        //console.log(userData);
        var userListings = userData.listings; //retrieve user's lisitings
        //console.log(userListings);
        var numListings = userListings.length; 
       // console.log(numListings);


       //const price = userListings[numListings-1].price;
        //console.log(price);
        return (
            <div>
                <div>
                     <ButtonToolbar>
    <Button bsStyle="primary" onClick={'./ListSpace'}>Create New Venue</Button>
  </ButtonToolbar>
                    </div>
           <Row>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">
                                <a href="#" className="text-muted">
                                </a>
                                <CardTitle>
                {/*                    <strong><a href="">{userListings[numListings-1].price}</a></strong>*/}
                                </CardTitle>
                       {/*         <CardText><h5>{userListings[numListings-1].header}</h5></CardText> */}
                          {/*      <CardText><h5>{userListings[numListings-1].buildingTypeEnum}</h5></CardText>*/}

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">
                                <a href="#" className="text-muted">
                                </a>
                                <CardTitle>
                                    <strong><a href="#">(Office Title)</a></strong>
                                </CardTitle>
                                  <CardText><h5>(Price)</h5></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">
                                <a href="#" className="text-muted">
                                </a>
                                <CardTitle>
                                    <strong><a href="#">(Office Title)</a></strong>
                                </CardTitle>
                                  <CardText><h5>(Price)</h5></CardText>

                            </CardBody>
                        </Card>
                    </Col>
                    </Row>




                </div>
            );
}
}

export default MyVenues;
