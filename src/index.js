import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Mapa from './components/Map'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Mapa />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);