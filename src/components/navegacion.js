import React, { useState } from "react";
import Inicio from "../pages/inicio";
import Politicas from "../pages/politicas";
import Servicio from "../pages/servicio";
import Devoluciones from "../pages/devoluciones";
import PiePagina from "./pie-pagina";
import "../styles/menu.css"; 

function Navegacion() {
    const [paginaActual, setPaginaActual] = useState("inicio");
    
    return (
        <div>
            <nav className="navbar"> 
                <div className="logo">
                    <img className="img-navbar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyS6cq9eVUaAqeddFM1H55ZMVaQPj3VAhnQ&s" alt="Logo" />
                    <h1 className="titulo">KAIROS</h1>
                </div>
                <div className="menu">
                    <button onClick={() => setPaginaActual("inicio")} className="boton-menu">INICIO</button>   
                </div>
            </nav>
            <div>
                {paginaActual === "inicio" && <Inicio />}
                {paginaActual === "politicas" && <Politicas />}
                {paginaActual === "servicio" && <Servicio />}
                {paginaActual === "devoluciones" && <Devoluciones />}
                <PiePagina setPaginaActual={setPaginaActual} />
            </div>

        </div>
    );
};

export default Navegacion;