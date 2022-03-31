import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/Components/Home/Home';
import Register from './Components/Login/Register';
import Login from './Components/FormLogin/Login';
import Sale from '../src/Components/Sale/Sale';
import Travel from '../src/Components/Travel/Travel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Travel" element={<Travel/>}></Route>
        <Route path="/Sale" element={<Sale/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


