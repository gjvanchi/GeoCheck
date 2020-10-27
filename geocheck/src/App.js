import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
/*
  {onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }*/
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  currentPos = (lat, lng) => {
    this.setState( { lat: lat, lng: lng })
  }
  
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

 

  render() {
    return (
  /*<div>
      <CurrentLocation />
      <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 13.02,
            lng: 80.01,
          }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        
        </Map>
        </div>
        */
      
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        currentPos = {this.currentPos}
      >
        { /*<Marker
          
          position={{ lat: -34.397, lng: 150.644 }} 
        
          />
          */
        }
        
           <Marker
          
          position = {{ lat: this.state.lat, lng : this.state.lng}}
        />
        {/*
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
        
        </CurrentLocation>
       
       
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC2EYYnCiH9WqnRWQIKjxULD7tDLLKQecI'
})(MapContainer);