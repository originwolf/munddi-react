import React from "react";
import "./index.css";

function Header() {
    return (
        <div id="home" className="container-fluid top-navigation">
            <div className="row">
                <div className="col-4 d-inline pl-sm-5">
                    <a aria-label="Voltar para a página inicial" id="meuNome" href="index.html">Pedro <span className="d-none d-sm-inline">Martins</span></a>
                </div>

                <div className="col-3 col-sm-4 fas fa-code d-inline text-center"></div>

                <div className="col-5 col-sm-4 text-right d-inline pr-sm-5">
                    <a rel="noopener, noreferrer" href="https://www.linkedin.com/in/pedro-martins-dev" aria-label="Conheça meu linkedIn" name="meuLinkedin" target="_blank"><span id="redesSociais1" className="fab fa-linkedin-in mr-2"></span></a>
                    <a rel="noopener, noreferrer" href="https://github.com/originwolf" aria-label="Conheça meu GitHub" name="meuGithub" target="_blank"><span id="redesSociais2" className="fab fa-github mr-2"></span></a>
                    <a rel="noopener, noreferrer" href="https://www.instagram.com/pedro_m4rtins/" aria-label="Conheça meu Instagram" name="meuInstagram" target="_blank"><span id="redesSociais3" className="fab fa-instagram mr-2"></span></a>
                </div>
            </div>
        </div>
    );
}

export default Header;