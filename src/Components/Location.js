import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Location.css';


class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {

        const mapStyles = {
            width: '70%',
            height: '70%',
        }


        return <div>
            <div className="location-main">
                <div className="map">
                    <div>
                        <h1>The Parlor</h1>
                        <p></p>
                    </div>
                </div>
                <div>
                    <div className="map-info">
                        <div className='info-div'>
                            <h1>Our Address </h1>
                            <p>5324 N 7th Ave, Phoenix, AZ 85013</p>
                            <h1>Book an Appointment</h1>
                            <p><a className="phone-map" href="tel:6024866621" >602 555 5555</a></p>
                            <h1>Connect with Us</h1>
                            <p> <a className="phone-map" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="blank">
                                @juniorsbarberparlor
                            </a></p>
                        </div>
                        <div className='map-div'>

                            <div >
                                <Map className="map-component"
                                    google={this.props.google}
                                    zoom={8}
                                    style={mapStyles}
                                    initialCenter={{ lat: 33.4484, lng: -112.0740 }}>
                                    <Marker position={{ lat: 33.5157, lng: -112.0828 }} /></Map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)


}
)(MapContainer)