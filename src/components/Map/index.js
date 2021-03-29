import React from 'react';
import App from '../../App';
import './index.css';

function Mapa() {
    return (
        <div className="container-fluid">
            <div className="row text-center py-4">
                <div className="col-12">
                    <h1>Encontre o estabelecimento mais próximo de você:</h1>
                    <p className="h4">Navegue pelo mapa abaixo</p>
                </div>
            </div>

            <div className="row pb-5 justify-content-center">
                <div id="map" className="col-11 col-md-10 col-lg-8">
                    <App />
                </div>
            </div>
        </div>
    );
}

export default Mapa;