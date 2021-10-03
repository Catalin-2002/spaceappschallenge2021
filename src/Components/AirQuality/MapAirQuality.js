import React from 'react';
import H from "@here/maps-api-for-javascript";
import onResize from 'simple-element-resize-detector';

import axios from 'axios';

const idVec = [7653, 7654, 7660, 7661, 4189]

class Station{
  
  constructor(name, lat, lng, aqi){
    this.name = name 
    this.lat = lat 
    this.lng = lng 
    this.aqi = aqi
  }

  getName(){
    return this.name
  }

  getLat(){
    return this.lat
  }

  getLng(){
    return this.lng
  }

  getAqi(){
    return this.aqi
  }
}

const getColor = (aqi) => {
  let classObj = {
      color: null,
      level: null,
      healthImplication: null,
      CautionaryStatement: null
  };
  if (aqi >= 0 && aqi <= 50) {
      return {
          color: "#009966",
          level: "Good",
          healthImplication: "Air quality is considered satisfactory, and air pollution poses little or no risk",
          CautionaryStatement: null
      }
  } else if (aqi > 50 && aqi < 100) {
      return {
          color: "#FFDE33",
          level: "Moderate",
          healthImplication: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
          CautionaryStatement: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
      }
  } else if (aqi > 100 && aqi <= 150) {
      return {
          color: "#FF9933",
          level: "Unhealthy for Sensitive Groups",
          healthImplication: "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
          CautionaryStatement: "Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion."
      }
  }
  else if (aqi > 150 && aqi <= 200) {
      return {
          color: "#CC0033",
          level: "Unhealthy",
          healthImplication: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects",
          CautionaryStatement: "Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion"
      }
  } else if (aqi > 200 && aqi <= 300) {
      return {
          color: "#660099",
          level: "Very Unhealthy",
          healthImplication: "Health warnings of emergency conditions. The entire population is more likely to be affected.",
          CautionaryStatement: "Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion."
      }
  } else if (aqi > 300) {
      return {
          color: "#7E0023",
          level: "Hazardous",
          healthImplication: "Health alert: everyone may experience more serious health effects",
          CautionaryStatement: "Everyone should avoid all outdoor exertion"
      }
  }
  return classObj
}

export default class MapAirQuality extends React.Component {

  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
    for (let i=0; i<5; i++){
         axios({
          method: 'GET',
          url: "https://api.waqi.info/feed/@" + idVec[i] + "/?token=61ce1b8b589289ef069737d3c06b83eb476b7af7"
          }).then((resp) => {
              let station = new Station(resp.data.data.city.name,
                                    resp.data.data.city.geo[0],
                                    resp.data.data.city.geo[1],
                                    resp.data.data.aqi)
              let aqiNr = station.getAqi()
              let color = getColor(aqiNr).color

              var svgMarkup = '<svg  width="40" height="40" xmlns="http://www.w3.org/2000/svg">' +
              '<rect fill="${FILL}" x="1" y="1" width="40" height="40" border-radius="10" />' +
              '<text x="12" y="18" font-size="15pt" font-family="Calibri" font-weight="bold" ' +
              'text-anchor="center" fill="${FILL}" >' + aqiNr + '</text></svg>';
              
              var bearsIcon = new H.map.Icon(
                svgMarkup.replace('${FILL}', color).replace('${STROKE}', color)),
                bearsMarker = new H.map.Marker({lat: station.getLat(), lng: station.getLng() },
                  {icon: bearsIcon});
              this.map.addObject(bearsMarker);
             
          }) 
          
    }
    

    if (!this.map) {
      const platform = new H.service.Platform({
        apikey: 'Uw03yhTzLtMNLP5KsdB5Q1nMh0VeTb2Ddi40fgFFGqo'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 45.756698, lng: 21.228805},
          zoom: 13,
        },
      );
        
      onResize(this.ref.current, () => {
        map.getViewPort().resize();
      });
      this.map = map;
      // attach the listener
      map.addEventListener('mapviewchange', this.handleMapViewChange);
      window.addEventListener('resize', () => this.map.getViewPort().resize());
      this.restrictMap(this.map);

      // add the interactive behaviour to the map
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    }
  }

  componentDidUpdate() {
    const {
      lat,
      lng,
      zoom
    } = this.props;

    if (this.map) {
      // prevent the unnecessary map updates by debouncing the
      // setZoom and setCenter calls
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.map.setZoom(zoom);
        this.map.setCenter({lat, lng});
      }, 100);
    }
  }

  handleMapViewChange = (ev) => {
    const {
      onMapViewChange
    } = this.props;
    if (ev.newValue && ev.newValue.lookAt) {
      const lookAt = ev.newValue.lookAt;
      // adjust precision
      const lat = Math.trunc(lookAt.position.lat * 1E7) / 1E7;
      const lng = Math.trunc(lookAt.position.lng * 1E7) / 1E7;
      const zoom = Math.trunc(lookAt.zoom * 1E2) / 1E2;
      onMapViewChange(zoom, lat, lng);
    }
  }

  restrictMap = (map) => {
    if(map != null) {
      const bounds = new H.geo.Rect(45.806698, 21.178805, 45.706698, 21.278805);

      map.getViewModel().addEventListener('sync', function() {
        let center = map.getCenter();

        if (!bounds.containsPoint(center)) {
          if (center.lat > bounds.getTop()) {
            center.lat = bounds.getTop();
          } else if (center.lat < bounds.getBottom()) {
            center.lat = bounds.getBottom();
          }
          if (center.lng < bounds.getLeft()) {
            center.lng = bounds.getLeft();
          } else if (center.lng > bounds.getRight()) {
            center.lng = bounds.getRight();
          }
          map.setCenter(center);
        }

        let zoom = map.getZoom();

        if(zoom < 12) {
          zoom = 12;
          map.setZoom(zoom);
        }
      });
    }
}
  render() {
    return (
      <div
      
        style={{ position: 'relative', width: '100%', height:'100vh' }}
        ref={this.ref}
      />
    )
  }

}
