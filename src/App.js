import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          stores: [
            { latitude: -23.6853947, longitude: -46.603549, local: "Cordilheira Alta" },
            { latitude: -23.4605363, longitude: -46.4335505, local: "Xaxim" },]
        }
      }
    
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          />
        })
      }

    render() {
      return (
        <Map
          google={this.props.google}
          zoom={10.5}
          initialCenter={{ lat: -23.57595, lng: -46.59106 }}
        >
        <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: -23.548519, lng: -46.405640}} 
        />
            {this.displayMarkers()}
        </Map>
      );
    }
  }

  export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyBH1wDkk_FxiRk_jcLAsvWqsxY2MYZMYsc',
    }
  ))(MapContainer)