import React from 'react';
import './index.css';

function Footer() {
    return (
        <footer className="container-fluid">
            <section id="rodapeSite" className="row justify-content-center rodape">
                <div className="col-sm-4 mt-4">
                    <hr className="d-block d-sm-none" />
                    <h3 id="h3Curriculo" >Currículo</h3>
                    <hr className="d-none d-sm-block" />
                    <a aria-label="Baixe meu currículo" id="aCurriculo" href="https://pedromartins.dev/files/CurriculoPedroMartins.pdf" download="CurriculoPedroMartins" target="_blank" rel="noopener, noreferrer" className="linkSocial"><span className="font-weight-bold">Baixe meu CV: </span>curriculum vitæ</a>
                    <br />
                    <a rel="noopener, noreferrer" aria-label="Conheça meu Lattes" id="aLattes2" href="http://lattes.cnpq.br/8655373056969189" target="_blank" className="linkSocial"><span className="font-weight-bold">Lattes: </span>currículo Lattes</a>
                </div>

                <div className="col-sm-4 mt-4">			
                    <hr className="d-block d-sm-none" />
                    <h3 id="h3Contatos" >Contatos</h3>
                    <hr className="d-none d-sm-block" />
                    <p id="pEmail"><span className="font-weight-bold">E-mail:</span> pedrogmhead@gmail.com</p>
                    <p id="pTelefone"><span className="font-weight-bold">Telefone:</span> +55 (35) 9 9856-3930</p>
                </div>

                <div className="col-sm-4 mt-4">		
                    <hr className="d-block d-sm-none" />
                    <h3 id="h3RedesSociais">Redes sociais</h3>
                    <hr className="d-none d-sm-block" />
                    <a aria-label="Conheça meu GitHub" rel="noopener, noreferrer" id="aGithub" href="https://github.com/originwolf" target="_blank" className="linkSocial"><span className="font-weight-bold">Github: </span>originwolf</a>
                    <br />
                    <a aria-label="Conheça meu LinkedIn" rel="noopener, noreferrer" id="aLinkedin2"href="https://www.linkedin.com/in/pedro-martins-dev" target="_blank" className="linkSocial"><span className="font-weight-bold">LinkedIn: </span>Pedro Martins</a>	
                </div>

                <button aria-label="voltarAoTopo" id="arrow" type="button" onclick="go('#home')" className="btn btnTop col-1"><i className="fas fa-arrow-up"></i></button>

                <div className="col-12 text-center pb-3">			
                    <hr />
                    <a aria-label="Voltar para a página inicial" id="aMeuNome" href="index.html" className="linkNoUnderline">Pedro Martins - 2019</a>
                </div>		
            </section>
        </footer>
    );
}

export default Footer;