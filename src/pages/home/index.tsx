

import React from 'react';
import logo from '../../images/Logo.svg';
import { FiArrowRight } from 'react-icons/fi'
import { Link }  from 'react-router-dom';
import { Container } from './style';

const Home:React.FC = () => {
    return(
        <>
        <Container>
            <div className="content">
                <div id="header">
                    <img src={ logo } id="logo" alt="icone happy" />
                    <div className="content-header">
                        <div id="cidadeEstado">
                            <strong>Rio do Sul</strong>
                            <p>Santa Catarina</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="description">
                        <strong className="titulo">Leve felicidade para o mundo</strong>
                        <span>Visite orfanatos e mude o dia de muitas crianças</span>
                    </div>
                    <Link to="/mapa" className="button"> 
                        <FiArrowRight color="#8D734B"/>
                    </Link>
                </div>
            </div>
        </Container>
        </>
    )
}


export default Home;