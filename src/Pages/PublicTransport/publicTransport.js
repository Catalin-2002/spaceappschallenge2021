import React from 'react';
import MapTransport from './MapTransport.js' ;

export default class App extends React.Component {
    constructor(props) {
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
        <div className="App">
          <MapTransport
            lat={lat}
            lng={lng}
            onMapViewChange={this.handleMapViewChange}
            zoom={zoom}
          />
        </div>
      );
    }
  }