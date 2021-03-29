import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from './components/Map/api'

export class MapContainer extends Component {

    state = {
        locais:[],
    }

    async  componentDidMount() {
        const response = await api.get('');
        this.setState({locais: response.data['data']});
    }

    render() {

        const {locais} = this.state;

        return(
            <div>
                <Map
                    google={this.props.google}
                    zoom={10.5}
                    initialCenter={{ lat: -23.57595, lng: -46.59106 }}
                >
                    {locais.map(local => (
                        <Marker key={local.lat+local.lng+local.name}
                            name={local.name}
                            position={{lat: local.lat, lng: local.lng}}
                        >
                        </Marker>
                    ))}
                </Map>
            </div>
        );
    }
}

  export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyBH1wDkk_FxiRk_jcLAsvWqsxY2MYZMYsc',
    }
  ))(MapContainer)