import React from 'react';
import { useRef, useState } from 'react';
import { InfoWindow, Map, Marker,GoogleApiWrapper} from 'google-maps-react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const google = window.google;

export class MapContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      myLatLng:'',
      lat: '',
      lng:'',
      placeId: '',
      location: '',
    };
  }

  
  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      // Location biasing to Malaysia
      componentRestrictions: { country: "my" },
      types: ['establishment'],
      fields: ['address_components', 'geometry', 'name']
      }

    const input = document.getElementById('autocomplete');

    // Initialize Google Autocomplete
    this.autocomplete = new google.maps.places.Autocomplete(input,options);

    // Restricting the set of place fields that are returned 
    this.autocomplete.setFields(['place_id','address_components', 'formatted_address']);
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handleSelection);
  }


  handleSelection = () => {
    // Should store the selected place history using Redux
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;
    const lat = addressObject.geometry.location.lat();
    const lng = addressObject.geometry.location.lng();
    const LatLng = { lat: lat, lng: lng };
    

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          myLatLng: LatLng,
          name: addressObject.name,
          lat: addressObject.geometry.location.lat(),
          lng: addressObject.geometry.location.lng(),
        }
      );
    }
    console.log("Latitude: ", this.state.lat);
    console.log("Longitude: ", this.state.lng);
    console.log(addressObject.name);
  }

  render() {
    return (
      <div>
        <SearchBar id="autocomplete" placeholder="Search a location"  value={this.state.name}/>
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
          center={ this.state.myLatLng }
        >
          <Marker onClick={this.onMarkerClick}
                position={ this.state.myLatLng }
          />
          
        </Map>
      </div>
      
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZeg__wAYOzCyQ4hr9IH_VArIV0vs5orY'
})(MapContainer);