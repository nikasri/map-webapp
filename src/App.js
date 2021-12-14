import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="search-box">
            <div id="title">Search Box</div>
            <div id="pac-container"><input id="pac-input" type="text" placeholder="Enter a location" /></div>
        </div>
      <div>
        <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={
            {
              lat: 3.157764,
              lng: 101.711861
            }
          }
        />
      </div>
      <div id="overlay">
        {/* <input id="autocomplete" placeholder='Search' type="text" /> */}
  
        <Fab color="primary" size="medium" aria-label="search" variant="circular"><SearchIcon />
        </Fab>
      </div>
      
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCZeg__wAYOzCyQ4hr9IH_VArIV0vs5orY'
})(MapContainer);