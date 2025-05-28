import React from "react";
import "../styles/pie.css";
function PiePagina({setPaginaActual}) {
    return (
        <div className="container-footer">
            <footer className="footer">
                <div className="footer-links">
                    <h3>LEGALES</h3>
                    <button onClick={() => setPaginaActual("politicas")} className="boton-footer">Políticas</button>
                    <button onClick={() => setPaginaActual("servicio")} className="boton-footer">Términos de Servicio</button>
                    <button onClick={() => setPaginaActual("devoluciones")} className="boton-footer">Política de Devoluciones</button>
                </div>
                
                <div className="footer-derechos">
                    <p>© 2025 Kairos. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
export default PiePagina;