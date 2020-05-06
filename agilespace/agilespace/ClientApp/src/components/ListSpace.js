import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import { Container, CarouselCaption, Mask, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Tooltip} from 'mdbreact';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Center from 'react-center';
import { Glyphicon } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export class ListSpace extends Component {
    displayName = ListSpace.name

    constructor() {
        super();
        this.state = {
            listing1: [],
            listing2: [],
            listing3: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch('http://localhost:8080/AgileSpace-war/webresources/listings/1'),
            fetch('http://localhost:8080/AgileSpace-war/webresources/listings/2'),
            fetch('http://localhost:8080/AgileSpace-war/webresources/listings/3')
        ]).then(([data1,data2,data3]) => Promise.all([data1.json(), data2.json(), data3.json()]))
            .then(([data1, data2, data3]) =>
                //console.log(data);
                /*Update the state*/
                this.setState({
                    listing1: data1,
                    listing2: data2,
                    listing3: data3,
                }));
    }

    render() {
        const { listing1 } = this.state;
        const { listing2 } = this.state;
        const { listing3 } = this.state;
        return (
            <div>
                <Carousel>
                    <div>
                        <img src={require('./img/600.jpg')} />
                        <Mask overlay="black-light"></Mask>
                        <CarouselCaption>
                            <h2 class="h1-hero text-uppercase ">Monetize Your Space Today</h2>
                            <h5 class="section-subheading">With AgileSpace, you earn money every month simply by sharing your extra office space. </h5>
                        </CarouselCaption>
                    </div>
                    <div>
                        <img src={require('./img/office-large3.jpg')} />
                        <Mask overlay="black-light"></Mask>
                        <CarouselCaption>
                            <h2 class="h1-hero text-uppercase ">Why Rent Out Your Office Space?</h2>
                            <h5 class="section-subheading">Your extra space is full of potential.</h5>
                        </CarouselCaption>
                    </div>
                    <div>
                        <img src={require('./img/workspace.jpg')} />
                        <Mask overlay="black-light"></Mask>
                        <CarouselCaption>
                            <h2 class="h1-hero text-uppercase ">Add Your Listing</h2>
                            <h5 class="section-subheading">Start filling your space with great tenants and earn now.</h5>
                        </CarouselCaption>
                    </div>
                </Carousel>

                {/* How can we help you rent your space? */}
                <Container>
                    <div className="row text-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">How can we help you rent out office space?</h2>
                            <h3 className="section-subheading text-muted">From empty space to full office.</h3>
                            <div className="row text-center">
                                <Col md="4" className="md-0 mb-5">
                                    <Row>
                                        <Col lg="10" md="9" size="10">
                                            <img src={require('./img/icon1.JPG')} />
                                            <h4 className="font-weight-bold">STEP 1</h4>
                                            <p className="grey-text">Let's get your workspace set up, photographed, priced and ready for the world to see.</p>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="4" className="md-0 mb-5">
                                    <Row>
                                        <Col lg="10" md="9" size="10">
                                            <img src={require('./img/icon2.JPG')} />
                                            <h4 className="font-weight-bold">STEP 2</h4>
                                            <p className="grey-text">We advertise your space on our website and all the top commercial
property portals.</p>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col md="4" className="md-0 mb-5">
                                    <Row>
                                        <Col lg="10" md="9" size="10">
                                            <img src={require('./img/icon3.JPG')} />
                                            <h4 className="font-weight-bold">STEP 3</h4>
                                            <p className="grey-text">We qualify every lead, book tours and send you regular feedback about how it's all going.</p>

                                        </Col>
                                    </Row>
                                </Col>
                            </div>  <p /><p />
                        </div>
                    </div>
                    
                </Container>

                {/* Why rent out your spare office space? */}
                        <section className="bg-light" id="portfolio">
                    <div className="container">
                        <h2 className="h1-responsive font-weight-bold text-center my-5 text-uppercase">Why rent out your spare office space?</h2>
                        <Center><p className="lead grey-text w-responsive text-center mx-auto mb-5">Your extra space is full of potential.</p></Center>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div class="view overlay zoom">
                                    <img src="https://www.office-hub.com.au/wp-content/uploads/2018/08/renting-out-spare-office-space.jpg" class="img-fluid " alt="zoom" />
                                    <div class="mask flex-center waves-effect waves-light">
                                    </div>
                                </div>
                                <h4 className="service-heading">BE PART OF A MOVEMENT</h4>
                                <p className="text-muted">Whatever size and industry you are, renting out spare office space makes a statement that your business is agile, modern and employee-focused.</p>
                            </div>
                            <div className="col-md-4">
                                <div class="view overlay zoom">
                                    <img src="https://www.office-hub.com.au/wp-content/uploads/2018/08/renting-out-office-space-2.jpg" class="img-fluid " alt="zoom" />
                                    <div class="mask flex-center waves-effect waves-light">
                                    </div>
                                </div>
                                <h4 className="service-heading">CREATE A COMMUNITY</h4>
                                <p className="text-muted">Bring more people into your workplace to create an enjoyable and motivating environment for your own team.</p>
                            </div>
                            <div className="col-md-4">
                                <div class="view overlay zoom">
                                    <img src="https://www.office-hub.com.au/wp-content/uploads/2018/08/why-rent-office-space-out-1.png" class="img-fluid " alt="zoom" />
                                    <div class="mask flex-center waves-effect waves-light">
                                    </div>
                                </div>
                                <h4 className="service-heading">MAKE MONEY</h4>
                                <p className="text-muted">Many businesses that rent office space out with AgileSpace have covered their own lease and now work rent-free.</p>
                            </div>
                        </div>
                        
                        {/* if logged in, redirect to addlisting page*/}
                        <a className="btn flex-center aqua-gradient btn-rounded my-0 js-scroll-trigger" href="/addlisting">Add Your Space Now</a>

                            {/* if not logged in, redirect to login page
                        <a className="btn flex-center aqua-gradient btn-rounded my-0 js-scroll-trigger" href="/member">Add Your Space Now</a>     */}                   
                        
                            </div>
                        </section>
                <Container>
                    <div className="row text-center">
                            <h2 className="h1-responsive font-weight-bold text-center my-5">Our Bestsellers</h2>
                            <p className="grey-text text-center mx-auto mb-5">Top Listings of the Week</p>
                            <Row>
                                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                <Card wide ecommerce>
                                    <CardImage cascade src={require('./img/test1.jpg')} top alt="sample photo" />
                                        <CardBody cascade className="text-center">
                                            <div className="text-muted">
                                            <h5>{listing1.buildingTypeEnum}</h5></div>
                                            <CardTitle>
                                            <strong><div href="">{listing1.header}</div></strong>
                                            </CardTitle>
                                        <CardText><h5>{listing1.description}</h5></CardText>
                                            <CardFooter className="px-1">
                                                <span className="float-left font-weight-bold">
                                                <strong>${listing1.price}</strong>
                                                </span>
                                            </CardFooter>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                    <Card wide ecommerce>
                                    <CardImage cascade src={require('./img/test2.jpg')} top alt="sample photo" />
                                    <CardBody cascade className="text-center">
                                        <div className="text-muted">
                                            <h5>{listing2.buildingTypeEnum}</h5></div>
                                        <CardTitle>
                                            <strong><div href="">{listing2.header}</div></strong>
                                        </CardTitle>
                                        <CardText><h5>{listing2.description}</h5></CardText>
                                        <CardFooter className="px-1">
                                            <span className="float-left font-weight-bold">
                                                <strong>${listing2.price}</strong>
                                            </span>
                                        </CardFooter>
                                    </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4" md="12" className="mb-lg-0 mb-4">
                                    <Card wide ecommerce>
                                    <CardImage cascade src={require('./img/test3.jpg')} top alt="sample photo" />
                                    <CardBody cascade className="text-center">
                                        <div className="text-muted">
                                            <h5>{listing3.buildingTypeEnum}</h5></div>
                                        <CardTitle>
                                            <strong><div href="">{listing3.header}</div></strong>
                                        </CardTitle>
                                        <CardText><h5>{listing3.description}</h5></CardText>
                                        <CardFooter className="px-1">
                                            <span className="float-left font-weight-bold">
                                                <strong>${listing3.price}</strong>
                                            </span>
                                        </CardFooter>
                                    </CardBody>
                                    </Card>
                                </Col>
                        </Row>
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
