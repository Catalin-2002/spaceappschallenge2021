import React from 'react';
import H from "@here/maps-api-for-javascript";
import onResize from 'simple-element-resize-detector';


export default class MapTransport extends React.Component {
  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  addMarkersToMap(map) {

  var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="15" ' +
    'height="15" /><text x="8" y="15" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">1</text></svg>';

  var icon = new H.map.Icon(svgMarkup)

  var lineString = new H.geo.LineString();

  var dict1 = { 
    1 : [45.769455702313145, 21.219672162121167], 
    2 : [45.76873811612841, 21.216230042058594], 
    3 : [45.76564134493718,  21.21311671164719],
    4 : [45.76368004746787,  21.20941523794363],
    5 : [45.75795962927602, 21.20981145582285],
    6 : [45.75705896331304, 21.213454869592102], 
    7 : [45.75674452552855, 21.2173993169018],
    8 : [45.75650864064024, 21.22293538934765],
    9 : [45.75598461368992, 21.226651889552553], 
    10 : [45.755884547375814, 21.231995719721215], 
    11 : [45.75580969040351, 21.238454479270438], 
    12 : [45.75689026111878, 21.244694595108555], 
    13 : [45.7576393106845, 21.248943881300907], 
    14 : [45.75356821210661, 21.25010966944091], 
    15 : [45.74931266275674, 21.25281622150165], 
    16 : [45.74440672200253, 21.255012283727314], 
    17 : [45.73962479810203, 21.256258463257865], 
    18 : [45.737516024158175, 21.25809838883754], 
    19 : [45.732666929273414, 21.2603334723914], 
    20 : [45.730768971074376, 21.2654748322919], 
    21 : [45.729690536198795, 21.26877931401087], 
  };

  for(var station in dict1){
    var lt = dict1[station][0];
    var lg = dict1[station][1];
    var marker = new H.map.Marker({lat: lt, lng: lg}, {icon: icon});
    map.addObject(marker);

    lineString.pushPoint({lat:lt, lng:lg});
  }

  map.addObject(new H.map.Polyline(
    lineString, { 
      style: { 
      lineWidth: 4, 
      strokeColor: '#1b468d'
    }
  }
  ));

  

   var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#ff0000" x="1" y="1" width="15" ' +
    'height="15" /><text x="8" y="15" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">2</text></svg>';

   var icon = new H.map.Icon(svgMarkup)

   var dict2 = { 
    1 : [45.724946309242966, 21.201918212449325], 
    2 : [45.72898601386922, 21.204727680964684], 
    3 : [45.73390811095038, 21.202647999428002],
    4 : [45.73825076343898, 21.197707412371486],
    5 : [45.741303132090565, 21.197020762756548],
    6 : [45.74206861499575, 21.20109880183495], 
    7 : [45.742874528938934, 21.20364296044693],
    8 : [45.74385672082804, 21.206385599518004],
    9 : [45.74507456910619,  21.21105822663584], 
    10 : [45.74659815835525, 21.215388709747476], 
    11 : [45.74888975970346, 21.218889183641643], 
    12 : [45.751407894506805, 21.223490321847102], 
    13 : [45.75508260145436, 21.221149112830922], 
    14 : [45.756050924982794, 21.226611811841405], 
    15 : [45.75573948959261, 21.231839140625056], 
    16 : [45.75570833237611, 21.23831104612915], 
    17 : [45.756734285827605, 21.24458519008706], 
    18 : [45.757617930546424, 21.248534142679365], 
    19 : [45.76226721948406, 21.247684863195314], 
    20 : [45.76669955036009,  21.245094289141726], 
    21 : [45.76998901853071, 21.251697312842907], 
    22 : [45.77161478133488, 21.25487478652383], 
    23 : [45.77188621621946, 21.258817258180535], 
    24 : [45.76936532897916, 21.260135678917692], 
    25 : [45.765687353484765, 21.26050007336518], 
    26 : [45.76223659956482, 21.260331195432585], 
    27 : [45.7593277881622,  21.257892174443086], 
    28 : [45.757283310298504, 21.255759809984863], 
    29 : [45.757617930546424, 21.248534142679365],
  };

  var lineString = new H.geo.LineString();

  for(var station in dict2){
    var lt = dict2[station][0];
    var lg = dict2[station][1];
    var marker = new H.map.Marker({lat: lt, lng: lg}, {icon: icon});
    map.addObject(marker);

    lineString.pushPoint({lat:lt, lng:lg});
  }

  map.addObject(new H.map.Polyline(
    lineString, { 
      style: { 
      lineWidth: 4, 
      strokeColor: '#ff0000'
    }
  }
  ));

  var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#008000" x="1" y="1" width="15" ' +
    'height="15" /><text x="8" y="15" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">3</text></svg>';

   var icon = new H.map.Icon(svgMarkup)

  var dict3 = { 
    1 : [45.75624722449902, 21.226627630023938], 
    2 : [45.7558006826463, 21.23392498764951], 
    3 : [45.7557048339914, 21.23815479602808],
    4 : [45.756723114310226, 21.244464528200258],
    5 : [45.75762459446541, 21.248450102407286],
    6 : [45.75332586903628, 21.24973942714293], 
    7 : [45.74874293366704, 21.252120390159202],
    8 : [45.74717445886845, 21.24642874285791],
    9 : [45.745452454864235, 21.241359367774436], 
    10 : [45.743816501857104, 21.237003460386095], 
    11 : [45.74202626264019, 21.232390877937977], 
    12 : [45.741939587793546, 21.224728349117388], 
    13 : [45.7444267272597, 21.22201029700214], 
    14 : [45.7483027584589, 21.218940350073613], 
    15 : [45.751586516262634, 21.223237019288906], 
    16 : [45.75521723748435, 21.221659880444776], 
    17 : [45.75638500687169, 21.222303610608353], 
  };

  var lineString = new H.geo.LineString();

  for(var station in dict3){
    var lt = dict3[station][0];
    var lg = dict3[station][1];
    var marker = new H.map.Marker({lat: lt, lng: lg}, {icon: icon});
    map.addObject(marker);

    lineString.pushPoint({lat:lt, lng:lg});
  }

  map.addObject(new H.map.Polyline(
    lineString, { 
      style: { 
      lineWidth: 4, 
      strokeColor: '#008000'
    }
  }
  ));

  var svgMarkup = '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#800080" x="1" y="1" width="15" ' +
  'height="15" /><text x="8" y="15" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">4</text></svg>';

  var icon = new H.map.Icon(svgMarkup)
 
  var dict4 = { 
    1 : [45.75037063303197, 21.207982134982988], 
    2 : [45.745212918289134, 21.21080429667507], 
    3 : [45.743748234150544, 21.206823548617404],
    4 : [45.74259070582092, 21.203455223271447],
    5 : [45.74186946448957, 21.201426572735965],
    6 : [45.740297838473076, 21.197005645675947], 
    7 : [45.73966979069009, 21.195816190390715],
    8 : [45.73677126095099, 21.197730011500777],
    9 : [45.73373589610636, 21.20241707561735], 
    10 : [45.732600424571054, 21.20798629533823], 
    11 : [45.732511366999354, 21.212732571962732], 
    12 : [45.733000562397116, 21.21938214364144], 
    13 : [45.73492861007683, 21.226182588434877], 
    14 : [45.736536007737705, 21.230909726942453], 
    15 : [45.736509292388156, 21.230999038886257], 
    16 : [45.73848619540343, 21.237582583648482], 
    17 : [45.73836152791212, 21.240019515996437], 
    18 : [45.737212792925966, 21.250047939053132], 
    19 : [45.733508184202314, 21.258232714559753], 
    20 : [45.73045793124324, 21.265154367929338], 
    21 : [45.72953169007211, 21.268018720509808],
  };

  var lineString = new H.geo.LineString();

  for(var station in dict4){
    var lt = dict4[station][0];
    var lg = dict4[station][1];
    var marker = new H.map.Marker({lat: lt, lng: lg}, {icon: icon});
    map.addObject(marker);

    lineString.pushPoint({lat:lt, lng:lg});
  }

  map.addObject(new H.map.Polyline(
    lineString, { 
      style: { 
      lineWidth: 4, 
      strokeColor: '#800080'
    }
  }
  ));

  var areaNorth = new H.geo.LineString(
    [45.782906694112725, 21.212341403598593, 0,
      45.769881730756936, 21.228282121000053, 0,
      45.76635747738691, 21.221064649760383, 0,
      45.76283300134867, 21.21781678770253, 0, 
      45.759217461137595, 21.23931899364176, 0,
      45.76776225067461, 21.23778793678478, 0,
      45.77274610667715, 21.245851503776944, 0,
     45.78170991744376, 21.258057342145815, 0,
     45.782906694112725, 21.212341403598593, 0],
    'values lat lng alt'
  );

  map.addObject(
    new H.map.Polygon(areaNorth, {
      style: {
        fillColor: 'rgba(252, 247, 135, 0.3 )',
        strokeColor: '#829',
        lineWidth: 3
      }
    })
  );


  var areaSouth = new H.geo.LineString(
    [45.730007845382026, 21.21079130450005, 0,
      45.7154710964426, 21.202829808843774, 0,
      45.71058222600532, 21.242762288888606, 0,
      45.72891905692735, 21.256666859292476 , 0, 
      45.7326336293713, 21.241560659347527, 0,
      45.729158714217476, 21.226626120765594, 0,
      45.730007845382026, 21.21079130450005, 0,],
    'values lat lng alt'
  );

  map.addObject(
    new H.map.Polygon(areaSouth, {
      style: {
        fillColor: 'rgba(252, 247, 135, 0.3 )',
        strokeColor: '#829',
        lineWidth: 3
      }
    })
  );

  var areaEast = new H.geo.LineString(
    [45.74313324658172, 21.259384587179607, 0,
      45.751878457048456, 21.25655668484323, 0,
      45.76663967375417, 21.275279525882677, 0,
      45.77208793958385, 21.301887038982766, 0, 
      45.74028890302924, 21.284892564044704, 0,
      45.74313324658172, 21.259384587179607, 0,],
    'values lat lng alt'
  );

  map.addObject(
    new H.map.Polygon(areaEast, {
      style: {
        fillColor: 'rgba(252, 247, 135, 0.3 )',
        strokeColor: '#829',
        lineWidth: 3
      }
    })
  );

  var areaWest = new H.geo.LineString(
    [45.77462118423775, 21.208428356483893, 0,
      45.77220825153423, 21.199446020858797, 0,
      45.76331759863171, 21.18190618980709, 0,
      45.75332450714216, 21.18518352848111, 0, 
      45.75368286528607, 21.20352747047084, 0,
      45.76377306138996, 21.2073898516684, 0,
      45.76781461604333, 21.21232511583056, 0,
      45.77462118423775, 21.208428356483893, 0,],
    'values lat lng alt'
  );

  map.addObject(
    new H.map.Polygon(areaWest, {
      style: {
        fillColor: 'rgba(252, 247, 135, 0.3 )',
        strokeColor: '#829',
        lineWidth: 3
      }
    })
  );
  
 }

  componentDidMount() {
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

      // Add the markers to the map:
      this.addMarkersToMap(map);
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