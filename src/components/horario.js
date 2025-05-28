import React from "react";
import "../styles/horario.css";
function Horario() {
    return (
        <div className="container-horario">
            <h2>HORARIO DE ATENCIÓN</h2>
            <ul className="horario-lista">
                <li>Lunes a Viernes: 10:00 AM - 13:00 PM / 17:00 PM - 19:00 PM</li>
                <li>Sábados: 10:00 AM - 1:00 PM</li>
                <li>Domingos: Cerrado</li>
            </ul>
        </div>
    );
}
export default Horario;