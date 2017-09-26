import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// example of something that layers over the map
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {lat: 38.889931, lng: -77.009003},
    zoom: 11,
    styles: {position: "absolute"}
  };

  render() {
    return (
      <div style={{'height' :800, 'width' :800}}>
      <GoogleMapReact
        style={{position: 'static'}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={38.9072}
          lng={77.0369}
          text={'mAAApz'}
        />
      </GoogleMapReact>
    </div>
    );
  }
}

export default Map
