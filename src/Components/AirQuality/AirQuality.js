import React, { useState } from 'react';
import MapAirQuality from './MapAirQuality';
import scale from '../../Images/scale.png'
import './AirQuality.css'



export default class AirQuality extends React.Component{
  constructor(props){
        
        super(props)
        this.visible = false
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
        <div className="map">
        <MapAirQuality
          lat={lat}
          lng={lng}
          onMapViewChange={this.handleMapViewChange}
          location1 = {this.location1}
          location2 = {this.location2}
          zoom={zoom}
        />
        </div>
        <div className="buttonComponent">
         <button className="buttonStyle">Air Quality Index</button>
        <img src={scale} alt="Scale" className="scale"/>
        </div>
      </div>
    );
  }
}
