import React from 'react';
import Map from './Maps/Map.js';
import MapPosition from './Maps/MapPosition.js';

export default class App extends React.Component {
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
      <div className="App">
        <Map
          lat={lat}
          lng={lng}
          onMapViewChange={this.handleMapViewChange}
          zoom={zoom}
        />
        <MapPosition
          lat={lat}
          lng={lng}
          onChange={this.handleInputChange}
          zoom={zoom}
        />
      </div>
    );
  }
}