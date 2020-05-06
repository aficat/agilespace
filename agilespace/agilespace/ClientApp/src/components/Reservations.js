import React, { Component } from 'react';
import { Row, Col, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';

class Reservations extends Component {

    render(){
        var currentUser = sessionStorage.getItem('userData'); //returns string 
        var userData = JSON.parse(currentUser); //parse to JSON object
       // console.log(userData);
        var userBookings = userData.bookings; //retrieve user's bookings
      //  console.log(userBookings);
        var numBookings = userBookings.length; 
     //  console.log(numBookings);


       //const price = userListings[numListings-1].price;
        //console.log(price);
    return(
        <div>
            <h2 className="h2-responsive font-weight-bold text-center my-5">List of Reservations</h2>
            <Row>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                    <Card wide ecommerce>
                        <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" top alt="sample photo" />
                        <CardBody cascade className="text-center">
                            <a href="#" className="text-muted">
                                </a>
                            <CardTitle>
                                <strong><a href="">(Office Title)</a></strong>
                                </CardTitle>
                            <CardText><h5>(Price)</h5>
                                </CardText>
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
                            <a href="#" className="text-muted"></a>
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

export default Reservations;




