


import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';
import { FiArrowLeft,FiInfo,FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Icone from '../../images/icon.svg';
import { Map,TileLayer} from 'react-leaflet';

const Home:React.FC = () => {
    return(
        <>
            <Container>
                <aside>
                    <img src={Icone} alt="icone happy" />
                    <Link to="" >
                        <FiArrowLeft color="#fff"></FiArrowLeft>
                    </Link>
                </aside>
                <main>
                    <h6>Orfanato</h6>
                    
                    <div className="content"> 
                        <div className="divFotos">
                            <div className="fotoPrincipal" ></div>
                            <div className="fotos">
                                <div  className="fotoPequena"> </div>
                                <div  className="fotoPequena"> </div>
                                <div  className="fotoPequena"> </div>
                                <div  className="fotoPequena"> </div>
                                <div  className="fotoPequena"> </div>
                                <div  className="fotoPequena"> </div>
                            </div>
                        </div>
                       
                        <div className="description">
                            <h1>Orf. Esperança</h1>
                            <p>
                                Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
                            </p>
                            <div className="divMapa">
                                <div className="mapa">
                                    <Map
                                        center={[-23.1964042,-45.9093027]}
                                        zoom={15}
                                        style={{ width: '100%',height: '100%' }}
                                    >
                                        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>
                                    </Map>
                                </div>
                                <p>Ver rotas no Google Maps</p>
                            </div>
                        </div>

                        <footer>
                            <h3>Instruções para visita</h3>
                            <p id="visite">Venha como se sentir a vontade e traga muito amor e paciência para dar.</p>

                            <div className="cards">
                                <div className="card-info card">
                                    <FiClock size={ 40 }></FiClock>
                                    <p>Horário de visitas Das 18h até 8h</p>
                                </div>
                                <div className="card-danger card">
                                    <FiInfo size={ 40 }></FiInfo>
                                    <p>Atendemos fim de semana</p>
                                </div>
                            </div>

                            <div className="whatsButton">
                                <FaWhatsapp style={{ height: '20px'}}></FaWhatsapp>
                                <p>Entrar em contato</p>
                            </div>
                        </footer>
                    </div>
                </main>
            </Container>
        </>
    )
}


export default Home;