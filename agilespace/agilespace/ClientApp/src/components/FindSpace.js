import { Container } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import React, { Component } from 'react';
import './App.css';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import { SocialIcon } from 'react-social-icons';
import { Glyphicon } from 'react-bootstrap';
import { Redirect } from 'react-router';

//const google = window.google;
const _ = require("lodash");
const MapWithASearchBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAsRqF1DG0XAq3oIlS8F6O2qQHmE2-UZlU&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                bounds: null,
                center: {
                    /*Default location is NUS*/
                    lat: 1.2966, lng: 103.7764
                },
                markers: [],
                onMapMounted: ref => {
                    refs.map = ref;
                },
                onBoundsChanged: () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                        center: refs.map.getCenter(),
                    })
                },
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    const bounds = new window.google.maps.LatLngBounds();

                    places.forEach(place => {
                        if (place.geometry.viewport) {
                            bounds.union(place.geometry.viewport)
                        } else {
                            bounds.extend(place.geometry.location)
                        }
                    });
                    const nextMarkers = places.map(place => ({
                        position: place.geometry.location,
                    }));
                    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

                    this.setState({
                        center: nextCenter,
                        markers: nextMarkers,
                    });
                },
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
        >
            <input
                type="text"
                placeholder="Search Area"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    marginTop: `27px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />
        </SearchBox>
        {props.markers.map((marker, index) =>
            <Marker key={index} position={marker.position} />
        )}

    </GoogleMap>
);

<MapWithASearchBox />

export class FindSpace extends Component {
    displayName = FindSpace.name
    constructor(props) {
        super(props);
        this.state = { isMarkerShown: false }, { redirect: false }
            //customers: [{ email: "alice@gmail.com", id: 1 } ] }, { isMarkerShown: false }
            ;
        this.handleMapMounted = this.handleMapMounted.bind(this);
        this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
        this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
        this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/customers/1')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.email);
                /*Update the state*/
                this.setState({ customers: data.email })
            })
            .catch(error => console.log('parsing failed', error))
        if (this.state.customers != null) {
            // On Success do this...
            this.setState({
                redirect: true
            })
        }
        else {
            console.log('redirect in handle submit');
            this.setState({
                redirect: false
            })

        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/AgileSpace-war/webresources/customers/1')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.listings);
                /*Update the state*/
                this.setState({ customers: data.listings })
            })
        this.delayedShowMarker();

    }


    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }
    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }
    handleMapMounted(map) {
        this._map = map;
    }

    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }

    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();

        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            markers,
        });
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/booking" />;
        }
        return (

            <div className="findSpace">
                <Container>
                    <h1>Find Your Area</h1>
                    <div className="row">
                        <MapWithASearchBox
                            onMapMounted={this.handleMapMounted}
                            onBoundsChanged={this.handleBoundsChanged}
                            onSearchBoxMounted={this.handleSearchBoxMounted}
                            bounds={this.state.bounds}
                            onPlacesChanged={this.handlePlacesChanged}
                            markers={this.state.markers}
                            maps={this.state.maps}
                        />
                    </div>

                </Container>
                <Container>
                    <div className="row">

                        <br />

                        {/*href="/booking"*/}
                        <a className="btn flex-center aqua-gradient btn-rounded my-0 js-scroll-trigger" onClick={this.handleSubmit} >Book Yours Now!</a>

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

export default FindSpace;

