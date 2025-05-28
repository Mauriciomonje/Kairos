import react from 'react';
import '../styles/inicio.css';
import marcas from "../assets/img/logosmarcas.png";
import Horario from '../components/horario';
import { motion } from 'framer-motion';
import video from '../assets/img/kairos.mp4';
function Inicio() {
    return (
        <div className='container-inicio'>

            <div className='container-inicio-header'>
                <div className='img-inicio'>
                    <img src="https://static.eldiario.es/clip/4afede85-69c5-4bb8-93b2-905188d1936e_16-9-discover-aspect-ratio_default_1018632.jpg" alt="Logo" />
                </div>
                <motion.div className='titulo-inicio'
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <motion.h1
                        initial={{ color: "#000" }}
                        animate={{ color: "#ff5900" }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >Bienvenido a Kairos</motion.h1>
                    <p>Tu libreria siempre cerca.</p>
                    <p>Explora nuestros servicios y descubre todo lo que podemos ofrecerte.</p>
                </motion.div>

            </div>
            <div className='galeria-inicio'>
                <motion.img initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3, ease: "easeInOut" }} className='foto-galeria' src="https://www.distribuidoraorfei.com.ar/fotito/500/500/xy/grafica/productos/010000/014260-01-01.jpg" alt="Banner" />
                <motion.img initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }} className='foto-galeria' src="https://delibreri.com.ar/images/products/46f0203c04a6fbcfb2b07c32a12f429b95f669f7440b7e9e76bc343fd9db0fd4.jpg" alt="Banner" />
                <motion.img initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4, ease: "easeInOut" }} className='foto-galeria' src="https://distribuidoracolorarte.com.ar/wp-content/uploads/2022/07/ACRILICOS3.png" alt="Banner" />
                <motion.img initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 5, ease: "easeInOut" }} className='foto-galeria' src="https://artisticabari.com/wp-content/uploads/2021/07/Puntas650.jpg" alt="Banner" />
                <motion.img initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4.5, ease: "easeInOut" }} className='foto-galeria' src="https://ugosantini.com.ar/wp-content/uploads/2024/11/jacinta-fte-narnaja.jpg" alt="Banner" />
                <motion.img initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 5.5, ease: "easeInOut" }} className='foto-galeria' src="https://tiendadetazas.com/wp-content/uploads/2022/01/4ab60741-de91-4593-a0fe-3dcbbfeee049.jpeg" alt="Banner" />
            </div>
            <div className='banner-inicio'>
                <img src={marcas} alt="Banner" className='img-banner' />

            </div>
            <div id='ancla' className="contacto">
                <div className="contacto-header">
                    <h3>CONTACTO</h3>
                </div>
                <div className="contacto-info">

                    <motion.a
                        initial={{ opacity: 1, "text-shadow": "0px 0px 5px #ff590073" }}
                        animate={{
                            "text-shadow": [
                                "0px 0px 5pxrgb(255, 89, 0)",
                                "0px 0px 0px #ff590073",
                                "0px 0px 5pxrgb(255, 89, 0)"
                            ]
                        }}
                        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "loop" }}
                        href="https://api.whatsapp.com/send/?phone=5402975299460&teyt&type=phone_number&app_absent=0">
                        Teléfono</motion.a>
                    <motion.a
                        initial={{ opacity: 1, "text-shadow": "0px 0px 5px #ff590073" }}
                        animate={{
                            "text-shadow": [
                                "0px 0px 5px rgb(255, 89, 0)",
                                "0px 0px 0px #ff590073",
                                "0px 0px 5px rgb(255, 89, 0)"
                            ]
                        }}
                        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "loop" }}
                        href="https://maps.app.goo.gl/cDeJRUgnLtRg6ovYA">Dirección</motion.a>
                </div>
            </div>
            <Horario />
            <div className='video'>
                <video width="100%" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            </div>

        </div>
    );
}
export default Inicio;