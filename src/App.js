import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import fondo from './images/logo.png';
import Home from './components/home';
import Vehiculos from './components/vehiculos';
import Login from './components/modals/Login';



function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  return (
    <div>
      {usuarioLogueado?null:<Login setUsuarioLogueado={setUsuarioLogueado} />}
      <BrowserRouter>
        <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg container-fluid ">
          <div class="container-fluid">
          <img src={logo} weight={90} height={90}/>
            <a class="navbar-brand m-4 h1" href="#">INVENTARIO DE AUTOS EASY-CAR</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="home" className='ppal' class="nav-link active " aria-current="page" href="#">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="vehiculos" className='ppal' class="nav-link" href="#">Vehiculos</Link>
                </li>
              </ul>
            </div>
          </div>
         {
/*
<h1 class="title">INVENTARIO DE AUTOS EASY-CAR</h1>
<Link to="home" className='ppal'> Home</Link>
<Link to="vehiculos" className='ppal'>Vehiculos</Link>
         */   } 
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="vehiculos" element={<Vehiculos/>} />
        </Routes>
      </BrowserRouter>

      {/*  
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            <h5> © 2022 INVENTARIO DE AUTOS EASY-CAR </h5>
        </div>
      </footer>
      */}  

    </div>
  );
}

export default App;
