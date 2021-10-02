import React from 'react';
import MapAirQuality from './MapAirQuality';

import './AirQuality.css'

export default class AirQuality extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            zoom: 0,
            lat: 0,
            lng: 0
        }
    }

handleMapViewChange = (zoom, lat, lng) => {
    this.setState({
      lat,
      lng,
      zoom
    })
  }


  render() {
    const {
      zoom,
      lat,
      lng
    } = this.state;
    return (
      <div className="AirQuality">
        <MapAirQuality
          lat={lat}
          lng={lng}
          onMapViewChange={this.handleMapViewChange}
          zoom={zoom}
        />
      </div>
    );
  }
}
