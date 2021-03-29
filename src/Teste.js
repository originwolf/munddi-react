import React, { Component } from 'react';
import api from './components/Map/api'

class Teste extends Component {

    state = {
        locais:[],
    }

    async  componentDidMount() {
        const response = await api.get('');

        this.setState({locais: response.data['data']});
    }

    render(){

        const {locais} = this.state;

        return(
            <div>
                <h1>Listar</h1>
                {console.log(locais)}
                {locais.map(local => (
                    <li key={local.name}>
                        <h2>
                            <strong> Título: </strong>
                            {local.name}
                            {local.lat}
                            {local.lng}
                        </h2>
                    </li>
                ))}
            </div>
        );
    }
}

export default Teste;