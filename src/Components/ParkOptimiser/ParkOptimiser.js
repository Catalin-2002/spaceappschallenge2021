import React from 'react';
import MapPark from './MapPark.js' ;

export default class ParkOptimiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 0,
      lat: 0,
      lng: 0
    }
  }

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    })
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
      <div className="ParkOoptimiser">
        <MapPark
          lat={lat}
          lng={lng}
          onMapViewChange={this.handleMapViewChange}
          zoom={zoom}
        />
      </div>
    );
  }
}