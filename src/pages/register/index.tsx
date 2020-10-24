


import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './style';
import Icone from '../../images/icon.svg';
import { Map,TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { FaWhatsapp } from 'react-icons/fa';

const Register:React.FC = () => {
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
                    <h5>Adicione um orfanato</h5>
                    <div className="content">
                        <h1>Dados</h1>

                            <div className="divDados">
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
                                    <p>Clique no mapa para adicionar a localização</p>
                                </div>

                                <label htmlFor="nome">nome</label>
                                <input type="text" name="nome"/>

                                <label htmlFor="">sobre</label>
                                <textarea></textarea>

                                <label htmlFor="">numero do whatsapp</label>
                                <input type="text"/>

                                <label htmlFor="">fotos</label>
                                <input type="file" id="inputFile"/>
                            </div>

                         <h1>Visitação</h1>

                            <div className="divVisitacao">
                                <label htmlFor="">Instruções</label>
                                <textarea></textarea>

                                <label htmlFor="">Horário das visitas</label>
                                <input type="text"/>

                                <div className="btnAtende">
                                    <label htmlFor="atende" className="checkAtende">Atende fim de semana?</label>
                                    <input type="checkbox" name="atende" className="atende"/>
                                </div>
                                
                            </div>
                            
                            <div className="whatsButton">
                                <FaWhatsapp style={{ height: '20px'}}></FaWhatsapp>
                                <p>Entrar em contato</p>
                            </div>


                    </div>

            </main>
        </Container>
        </>
    )
}


export default Register;