import React, { Component } from 'react';
import './App.css';
import './mdb.css';
import { Glyphicon } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { Mask } from 'mdbreact';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title>AgileSpace</title>

                {/* Header */}
                <header className="masthead">
                    <div className="container">
                        <Mask overlay="black-light"></Mask>
                        <div className="intro-text">
                            <div className="intro-heading text-uppercase">Agile.Office.Space.</div>
                            <a className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger" href="/findspace">Find A Space Now</a>
                        </div>
                    </div>
                </header>
                {/* Services */}
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Why List With Us?</h2>
                                <h3 className="section-subheading text-muted">AgileSpace is a Singaporean business with one simple goal: revolutionise the way people rent office space around the world.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div class="view overlay zoom">
                                    <img src="https://www.office-hub.com.au/wp-content/uploads/2017/03/office-hub-spare-space-icon.jpg" class="img-fluid " alt="zoom" />
                                    <div class="mask flex-center waves-effect waves-light">
                                    </div>
                                </div>
                                <h4 className="service-heading">Secure, Safe & Easy.</h4>
                                <p className="text-muted">With secure payments and simple contracts, it is safe and easy to list your office space and start making money.</p>
                            </div>
                            <div className="col-md-4">
                                <div class="view overlay zoom">
                                    <img src="https://www.office-hub.com.au/wp-content/uploads/2018/04/office-hub-control.jpg" class="img-fluid " alt="zoom" />
                                    <div class="mask flex-center waves-effect waves-light">
                                    </div>
                                </div>
                                <h4 className="service-heading">Full Control & Accessibility</h4>
                                <p className="text-muted">With our unique online portal, you're in full control of your office pricing, availability, tours and office rules.</p>
                            </div>
                            <div className="col-md-4">
                                <div class="view overlay zoom">
                                    <img src="https://www.office-hub.com.au/wp-content/uploads/2018/04/office-hub-expert-service.jpg" class="img-fluid " alt="zoom" />
                                    <div class="mask flex-center waves-effect waves-light">
                                    </div>
                                </div>
                                <h4 className="service-heading">Excellent Customer Service</h4>
                                <p className="text-muted">The AgileSpace team of workspace experts has the knowledge and tools to help you make the right decisions for your space.</p>
                            </div>
                            <a className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger" href="/listspace">List Your Space</a>
                        </div>
                    </div>
                </section>
                {/* What is Agile Space? */}
                <section id="contact">
                    <div className="container">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Welcome to AgileSpace</h2>
                            <h3 className="section-subheading text-muted">AgileSpace is the largest, real time network for office space. The AgileSpace Network transforms the entire commercial real estate process by connecting growing teams and professionals looking for space, directly with venue partners, space providers, real estate professionals and service providers. Our online tools simplify the discovery and transaction of office space, and our reimagined legal framework eliminates the cost and complexities of traditional leasing. Office space is now yours with a click. Pay by the month. No lease, no hassle.</h3>
                            <a className="btn aqua-gradient btn-rounded my-0 js-scroll-trigger" href="/about">Find Out More About Us</a>
                        </div>
                    </div>
                </section>
                {/* Office Types */}
                <section className="bg-light" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Office Types</h2>
                                <h3 className="section-subheading text-muted">Office space for lease comes in all shapes, sizes, and building classes. Even as many industries increasingly favor open floor plans and office space that accommodates them, there are plenty of types of office space that can fit your company's needs.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://www.squarefoot.com/wp-content/uploads/2017/08/Flocabulary-Chudin-Design-35-700x468.jpg" alt />
                                </a> <div className="portfolio-caption">
                                    <h4>Traditional Office Space</h4>
                                    <p className="text-muted">Reception | Boardroom | Bullpen | Private Offices</p>
                                </div>
                                <p />
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://www.squarefoot.com/wp-content/uploads/2017/08/be_funky-2-1024x683.jpg" alt />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Creative Office Space</h4>
                                    <p className="text-muted">Wood floors | High ceilings | Large windows | Communal Spaces</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://static1.squarespace.com/static/570433d1f850824f376c4713/57b33159d2b857b404e95191/58b771cabe659432c586d244/1488417230112/HRM7156.jpg?format=2500w" alt />
                                </a><div className="portfolio-caption">
                                    <h4>Contiguous Offices</h4>
                                    <p className="text-muted">Multiple suites | Diverse amenities | Flexible </p>
                                </div>
                                <p />
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://www.office-hub.com.au/wp-content/uploads/2018/05/La-Porte-Lounge-Meeting-Room.jpeg" alt />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Sublet Office Space</h4>
                                    <p className="text-muted">Affordability | Privacy | Unique Identity | Simplistic Design</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 portfolio-item">
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://www.office-hub.com.au/wp-content/uploads/2018/05/Wotso-seating-and-breakout.jpg" alt />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Co-working Space</h4>
                                    <p className="text-muted">Shared Amenities | Open Office Concept</p>
                                </div>
                                <p />
                                <a className="portfolio-link" data-toggle="modal" href="#">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fa fa-plus fa-3x" />
                                        </div>
                                    </div>
                                    <img className="img-fluid" src="https://www.office-hub.com.au/wp-content/uploads/2018/05/SAVANT_HOUSE_Open-layout.jpg" alt />
                                </a>
                                <div className="portfolio-caption">
                                    <h4>Executive Suite</h4>
                                    <p className="text-muted">Elegant Outlook | Luxurious Design | Professional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
