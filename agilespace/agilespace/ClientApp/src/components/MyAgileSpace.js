import React, {Component} from 'react';
import { Row, Col, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';


class MyAgileSpace extends Component {

    constructor() {
        super();
        this.state = { 
        listings1: [], 
        listings2: [], 
        listings3: [],
        //numListing: 0;
        //price: 0,
        // header: []
         }
    }

    componentDidMount() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/listings/1')
            .then((response) => response.json())
            .then(listings1 => this.setState({ listings1 }))

        fetch('http://localhost:8080/AgileSpace-war/webresources/listings/2')
            .then((response) => response.json())
            .then(listings2 => this.setState({ listings2 }))

        fetch('http://localhost:8080/AgileSpace-war/webresources/listings/3')
            .then((response) => response.json())
            .then(listings3 => this.setState({ listings3 }))

        

    }

   
    render() {
    var currentUser = sessionStorage.getItem('userData'); //returns string 
        var userData = JSON.parse(currentUser); //parse to JSON object
        console.log(userData);
        var userListings = userData.listings; //retrieve user's lisitings
        console.log(userListings);
        var numListings = userListings.length; 
       console.log(numListings);
       
       //const price = userListings[numListings-1].price;
        //console.log(price);

        // for loop. i = numListings
        //this.setState.price = userListings[numListings-i].price
        //this.setState.header = userListings[numListings-i].header
        // this.setState.buildingTypeEnum = userListings[numListings-i].buildingTypeEnum

                return (

            <div>
                <h2 className="h2-responsive font-weight-bold text-center my-5">List of Recommendations</h2>

                <Row>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">

                                <CardTitle>
                                    <strong><a href="http://localhost:8080/AgileSpace-war/webresources/listings/1">{this.state.listings1.price}SGD</a></strong>
                                </CardTitle>
                                <CardText><h5>{this.state.listings1.header}</h5></CardText>
                                <CardText><h5>{this.state.listings1.buildingTypeEnum}</h5></CardText>
                                
                            </CardBody>
                        </Card>
                        </Col>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (49).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">

                                <CardTitle>
                                    <strong><a href="http://localhost:8080/AgileSpace-war/webresources/listings/2">{this.state.listings2.price}SGD</a></strong>
                                </CardTitle>
                                <CardText><h5>{this.state.listings2.header}</h5></CardText>
                                <CardText><h5>{this.state.listings2.buildingTypeEnum}</h5></CardText>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">

                                <CardTitle>
                                    <strong><a href="http://localhost:8080/AgileSpace-war/webresources/listings/3">{this.state.listings3.price}SGD</a></strong>
                                </CardTitle>
                                <CardText><h5>{this.state.listings3.header}</h5></CardText>
                                <CardText><h5>{this.state.listings3.buildingTypeEnum}</h5></CardText>    

                            </CardBody>
                        </Card>
                    </Col>
                    </Row>
                    <hr/>

                               <h2 className="h2-responsive font-weight-bold text-center my-5">My Previous Bookings</h2>
<Row>
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <Card wide ecommerce>
                            <CardImage cascade src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (55).jpg" top alt="sample photo" />
                            <CardBody cascade className="text-center">
                                <a href="#" className="text-muted">
                                </a>
                                <CardTitle>
                           {/*         <strong><a href="">{userListings[numListings-1].price}</a></strong>*/}
                                </CardTitle>
                     {/*           <CardText><h5>{userListings[numListings-1].header}</h5></CardText> */}
                       {/*         <CardText><h5>{userListings[numListings-1].buildingTypeEnum}</h5></CardText> */}

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

export default MyAgileSpace;
