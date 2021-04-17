import React from 'react';
import '../pageStyles.css';
import './featuresStyles.css'
import conicet from '../../../media/conicetLogo.jpg';
import barbijo from '../../../media/barbijoVector.jpg';
import { GiDutchBike } from 'react-icons/gi';

function Features() {
    return (
        <div className="container">
            <h2>Features</h2>
            <section id="Features">
                <div className="box">
                    <img src={conicet} alt="Logo del conicet" id='conicet' />
                    <div id="conicet-text">
                        <span>Desarrollados por
                            <a href="http://nanodak.com/" target="_blank" rel="noopener noreferrer">
                                {' '}Nanodak
                            </a>
                            {' '}en conjunto con el
                             <a href="https://www.conicet.gov.ar/" target="_blank" rel="noopener noreferrer">
                             {' '}Conicet
                            </a>
                        </span>
                    </div>
                </div>
                <div className="box">
                    <img src={barbijo} alt="barbijo vector" id='barbijo' />
                    <ul>
                        <li>Tecnologia N98</li>
                        <li>Filtran particulas</li>
                        <li>Se lavan hasta 30 veces sin perder su calidad original</li>
                        <li>4 capas de protección</li>
                    </ul>
                </div>
                <div className="box">
                    <GiDutchBike size={180}/>
                    <br/>
                    <a href='#Shiping' id='envio' >Envio</a>
                </div>
            </section>
        </div>
    )
}

export default Features;
