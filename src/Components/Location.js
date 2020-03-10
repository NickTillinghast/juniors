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

            width: '50%',
            height: '50%',
        }
        return <div>
            <div className="map">
                <div>
                    <Map className="real-map"
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 33.4484, lng: -112.0740 }}>
                        <Marker position={{ lat: 33.5157, lng: -112.0828 }} /></Map>
                    hello </div>
            </div>
        </div>
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyBXbPmy46LELdN9UVh5OCmKppDp8-Gtuk0"
})(MapContainer)