import React, { Component } from 'react';
import { useRef, useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      placeId: '',
      location: '',
      query: ''
    };
  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      // Location biasing to Malaysia
      componentRestrictions: { country: "my" },
      types: ['address'],
      fields: ['address_components', 'geometry', 'name']
      }

    const input = document.getElementById('autocomplete');

    // Initialize Google Autocomplete
    this.autocomplete = new google.maps.places.Autocomplete(input,options);

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(['place_id','address_components', 'formatted_address']);
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handleSelection);
  }


  handleSelection = () => {
    
    // Should store the selected place history using Redux
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;
    const point = address[0].place_id;

    console.log(addressObject);
    console.log(address);

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          placeId: addressObject.place_id, // doesnt seem to fetch the place id 
          location: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
    //window.alert(this.state.placeId);
  }

  // handleMarker = () => {
  //   const marker = new google.maps.Marker({map: map, draggable: false});
  //   const location = "";
  // }

  render() {
    return (
      <div>
        {/* <SearchBox /> */}
        <SearchBar id="autocomplete" placeholder="Search a location"  value={this.state.location}/>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZeg__wAYOzCyQ4hr9IH_VArIV0vs5orY&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          // Set the map centre as KL
          initialCenter={
            {
              lat: 3.157764,
              lng: 101.711861
            }
          }
        />
      </div>
      
      </div>
    );
  }
}

// function renderAddress(place) {
//   map.setCenter(place.geometry.location);
//   marker.setPosition(place.geometry.location);
//   marker.setVisible(true);
// }
const google = window.google;
// const input = document.getElementById("autocomplete");

// const options = {
//   types: ['establishment'],
//   fields: ['place_id', 'geometry', 'name']
//   }

// let autocomplete;

// function initAutocomplete() {
//   autocomplete = new google.maps.places.Autocomplete(input);
// }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZeg__wAYOzCyQ4hr9IH_VArIV0vs5orY'
})(MapContainer);