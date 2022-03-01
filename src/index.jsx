import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';


import Welcome from './Components/Welcome/Welcome';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';
import MenuEsquerdo from './Components/MenuEsquerdo/MenuEsquerdo';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import MenuLateral from './Components/MenuLateralDireito/MenuLateral';




ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <HomePage /> 
    <MenuLateral />
    <MenuEsquerdo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

