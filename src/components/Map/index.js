import React, { useState, useEffect } from 'react';
import './index.css';
import '../../dados';

function buscaDados() {
    const url = "https://munddi.com/dev/pdvs?ne_lat=-23.27153&ne_lng=-45.91969&sw_lat=-24.06141&sw_lng=-47.22157";
    return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

function Mapa() {
    const [estabelecimentos, setEstabelecimentos] = useState([]);
        useEffect(() => {
            buscaDados().then((dados) => setEstabelecimentos(dados.data));
        }, []);
    return (
        <div className="container-fluid">
            <div className="row text-center py-4">
                <div class="col-12">
                    <h1>Encontre o estabelecimento mais próximo de você:</h1>
                    <p className="h4">Navegue pelo mapa abaixo</p>
                </div>
            </div>

            <div className="row pb-5 px-3 justify-content-center">
                <div id="map" className="col-12 col-md-10 col-lg-8"></div>
            </div>
        </div>
    );
}

export default Mapa;