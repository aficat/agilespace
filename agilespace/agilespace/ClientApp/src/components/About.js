import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import {
    //Card,
    CardHeader,
    //CardBody,
    CardFooter,
    CardTitle,
    //Row,
    //Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { Container, CarouselCaption, Mask, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';
import { Glyphicon, Image } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Center from 'react-center';
import { SocialIcon } from 'react-social-icons';

export class About extends Component {
    displayName = About.name

    render() {
        return (
            <div>
                {/* Header */}
                <header className="mastheads">
                </header>
                <Container>
                    {/* About */}
                    <section id="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading text-uppercase">AgileSpace</h2>
                                    <h3 className="section-subheading text-muted">AgileSpace is the largest, real time network for office space. The AgileSpace Network transforms the entire commercial real estate process by connecting growing teams and professionals looking for space, directly with venue partners, space providers, real estate professionals and service providers. Our online tools simplify the discovery and transaction of office space, and our reimagined legal framework eliminates the cost and complexities of traditional leasing. Office space is now yours with a click. Pay by the month. No lease, no hassle.</h3>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid " src={require('./img/desk.png')} alt />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>2015 - 2016</h4>
                                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">We started off as a startup with a vision to transform the entire commercial real estate process by connecting real estate providers</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src={require('./img/real-estate.png')} alt />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>March 2017</h4>
                                                    <h4 className="subheading">An Agency is Born</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Slowly grew into a full-fledged company matching service provides with customers who is in need of space.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src={require('./img/city.png')} alt />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>December 2017</h4>
                                                    <h4 className="subheading">Transition to Full Service</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">With a diverse network and advance online tools, we simplified the discovery and transaction of office space.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <img className="rounded-circle img-fluid" src={require('./img/houses.png')}alt />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>July 2017</h4>
                                                    <h4 className="subheading">Current</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">Improving the sharing community of underutilized spaces.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <h4>Join Our
                        <br />Community!</h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>

                    {/* Team */}
                    <section className="bg-light" id="team">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                <h3 className="section-subheading text-muted">Behind our clever website is a team of industry experts here to help you find or lease your workspace.</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="team-member">
                                    <img className="mx-auto" src="https://scontent-sin6-2.cdninstagram.com/vp/602397d80ee9d2b4f8028c6c0578feec/5C786316/t51.2885-19/s320x320/44199534_1798202546973069_3369678783203246080_n.jpg" alt />
                                    <h4>Afiqah</h4>
                                    <p className="text-muted">UI/UX Designer/ Front-End Developer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <SocialIcon url="http://instagram.com/aficatrashid" />
                                            </li>
                                            <li className="list-inline-item">
                                                <SocialIcon url="http://linkedin.com/aficatrashid" />
                                                                                        </li>
                                            <li className="list-inline-item">
                                                <SocialIcon url="http://facebook.com/aficatrashid" />
                                                                                        </li>
                                        </ul>
                                </div>
                                <div className="team-member">
                                    <img className="mx-auto" src="https://media.licdn.com/dms/image/C5103AQFRsAuNDQZxew/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=2TC9KeNIc3EDllfe4VbVsm2iKPgez7uC59fH-M-yDyA" alt />
                                    <h4>Vincent</h4>
                                    <p className="text-muted">Back-End Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <SocialIcon url="http://instagram.com/" />
                                        </li>
                                        <li className="list-inline-item">
                                            <SocialIcon url="http://linkedin.com/" />
                                        </li>
                                        <li className="list-inline-item">
                                            <SocialIcon url="http://facebook.com/" />
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-member">
                                    <img className="mx-auto " src="https://media.licdn.com/dms/image/C5103AQHzRLs9LjiKtQ/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=pudyqGtivKpnL41sZeBQl9cshC5-4f54ibp--UqEPeg" alt />
                                    <h4>Nicholas</h4>
                                    <p className="text-muted">Front-End Developer</p>
                                        <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <SocialIcon url="http://instagram.com/" />
                                        </li>
                                        <li className="list-inline-item">
                                            <SocialIcon url="http://linkedin.com/" />
                                        </li>
                                        <li className="list-inline-item">
                                            <SocialIcon url="http://facebook.com/" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-member">
                                    <img className="mx-auto rounded-circle" src="https://media.licdn.com/dms/image/C5103AQHww_wRATeN7g/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=Gu1Enx4YhMSaj1RQqVFxXKS2mr9qtmGUnqNwZN4udbQ" alt />
                                        <h4>Hai Qi</h4>
                                    <p className="text-muted">Front-End Developer</p>
                                        <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <SocialIcon url="http://instagram.com/" />
                                    </li>
                                    <li className="list-inline-item">
                                        <SocialIcon url="http://linkedin.com/" />
                                    </li>
                                    <li className="list-inline-item">
                                        <SocialIcon url="http://facebook.com/" />
                                            </li>
                                        </ul>
                                </div>

                                <div className="team-member">
                                    <img className="mx-auto " src="https://c1.staticflickr.com/5/4917/44916971285_66f52d9803_b.jpg" alt />
                                    <h4>Chin Siong</h4>
                                    <p className="text-muted">Back-End Developer</p>
                                    <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <SocialIcon url="http://instagram.com/" />
                                </li>
                                <li className="list-inline-item">
                                    <SocialIcon url="http://linkedin.com/" />
                                </li>
                                <li className="list-inline-item">
                                    <SocialIcon url="http://facebook.com/" />
                                        </li>
                                    </ul>
                                </div>
                            </div>                                </div>
                        </div>
                    </section>

                <Container>
                    <section className="my-5">
                        <Center>
                            <h2 className="h1-responsive font-weight-bold text-center my-5">Contact Us</h2>
                        </Center>
                        <Center>    <p className="text-center w-responsive mx-auto pb-5">Have questions or need assistance? We're always happy to help.</p>
                        </Center>
                        <Row>
                            <Col lg="5" className="lg-0 mb-4">
                                <Card>
                                    <CardBody>
                                        <div className="form-header blue accent-1">
                                            <h3 className="mt-2 aqua-gradient">  <Glyphicon glyph='envelope' />  Write to us</h3>
                                        </div>
                                        <p className="dark-grey-text">We'll write rarely, but only the best content.</p>
                                        <div className="md-form">
                                            <Input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
                                        </div>
                                        <div className="md-form">
                                            <Input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
                                        </div>
                                        <div className="md-form">
                                            <Input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
                                        </div>
                                        <div className="md-form">
                                            <Input icon="pencil" label="Message" iconClass="grey-text" type="textarea" id="form-text" />
                                        </div>
                                        <div className="text-center">
                                            <Button color="btn aqua-gradient btn-rounded my-0 js-scroll-trigger">Submit</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="7">
                                <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: '400px' }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style={{ border: 0 }}></iframe>
                                </div>
                                <br />
                                <Row className="text-center">
                                    <Col md="4">
                                        <Button tag="a" floating color="blue" className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger">
                                            <Glyphicon glyph='globe' /> 
                                        </Button>
                                        <p>BLOCK71 Singapore 71 Ayer Rajah Crescent Singapore 139951</p>
                                    </Col>
                                    <Col md="4">
                                        <Button tag="a" floating color="blue" className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger">
                                            <Glyphicon glyph='earphone' /> 
                                        </Button>
                                        <p>+65 6816 0632</p>Monday - Friday, 10:00am - 10:00pm
                                    </Col>
                                    <Col md="4">
                                        <Button tag="a" floating color="blue" className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger">
                                            <Glyphicon glyph='envelope' />
                                        </Button>
                                        <p>info@agilespace.com</p>sale@agilespace.com
                                    </Col>

                                </Row>
                            </Col>
                        </Row>
                    </section>
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
