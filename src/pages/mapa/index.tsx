

import React from 'react';
import { Container } from './style';
import Icon from '../../images/icon.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import  {  Map,TileLayer }  from 'react-leaflet';


import 'leaflet/dist/leaflet.css';

const Home:React.FC = () => {
    return(
        <>
        <Container>
            <div className="aside">
                <div className="content">
                    <header>   
                        <img src={ Icon } alt="icone do happy" />
                        <h1>Escolha um orfanato no mapa</h1>
                        <p className="description">
                            Muitas crianças estão esperando sua presença :)
                        </p>
                    </header>
                    
                    <footer>
                        <strong>Rio do Sul</strong>
                        <p>santa catarina</p>
                        <Link to="/register" className="button"> 
                            <FiPlus />
                        </Link>
                    </footer>
                </div>
            </div>

            <div className="mapa">

                <Map center={[-23.1964042,-45.9093027]} 
                    zoom={13}
                    style={{ width: '100%', height: '100%'}}
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
                </Map>
            </div>
        </Container>
        </>
    )
}




export default Home;