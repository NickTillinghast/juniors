import React, { Component } from 'react';
import './Location.css';


export default class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {



        return <div>
            <div className="location-main">
                <div className="map">
                    <div>
                        <div className="location-text">
                            <h1>Juniors Barber Parlor</h1>
                            <p>We are located in Midtown Phoenix just north of Missouri and 7th Ave</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="map-info">
                        <div className='info-div'>
                            <h2>Our Address</h2>
                            <p>5324 N 7th Ave, Phoenix, AZ 85013</p>
                            <h2>Book an Appointment</h2>
                            <p><a className="phone-map" href="tel:6022740000" >(602) 274-0000</a></p>
                            <h2>Connect with Us</h2>
                            <p> <a className="phone-map" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="_blank" rel="noopener noreferrer">
                                @juniorsbarberparlor
                            </a></p>
                        </div>
                        <div className='map-div'>

                            <div >
                                <iframe
                                    className="map-embed"
                                    title="Map to Juniors Barber Parlor"
                                    src="https://maps.google.com/maps?q=5324%20N%207th%20Ave%2C%20Phoenix%2C%20AZ%2085013&z=15&output=embed"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
