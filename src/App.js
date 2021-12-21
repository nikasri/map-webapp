import React from 'react';
import { Map, Marker,GoogleApiWrapper} from 'google-maps-react';
import Script from 'react-load-script';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

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
    // Assign to object so it can be pushed into Redux store(?)
    recentSearch = addressObject.name;
    // turn this function into an action creator?
  }

  render() {
    return (
      <div>
        {/* <SearchBar id="autocomplete" placeholder="Search a location"  value={this.state.name}/> */}
        <input class="form-control" id="autocomplete" placeholder="Search location"></input>
        
      <div>
      <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZeg__wAYOzCyQ4hr9IH_VArIV0vs5orY&libraries=places"
          onLoad={this.handleScriptLoad}
        />  
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

const defaultState = {
  history : []
};

var recentSearch = '';

const searchReducer = (state = defaultState, action) => {
  if (!recentSearch === '') return state.concat(action.recentSearch);
  else return state;
}

// action creator functions return action object
const searchAction = recentSearch => {
  return {
    //history : add
    recentSearch
  };
}

const store = createStore(searchReducer, applyMiddleware(thunk));
//store.subscribe(MapContainer.handleSelection())


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZeg__wAYOzCyQ4hr9IH_VArIV0vs5orY'
})(MapContainer);