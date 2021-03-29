import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Mapa from './components/Map';
import Footer from './components/Footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Mapa />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);