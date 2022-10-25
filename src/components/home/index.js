import React from 'react';
import './styles.css';
import carro1 from '../../images/carro1.jpg';
import mercedes from '../../images/mercedes.png';

function Home () {
    return (
        <div>
            <div className="containerAutos">
                <div className='container'>
                    <img src={carro1} weight={600} height={250}/>
                </div>
                <div className='container'>
                    <h1>SALTATE LAS COMPLICACIONES</h1>
                    <h3>¡Para la nueva temporada de tu vida!</h3>
                    <h6>Contamos con autos de diversos modelos, años, gustos y precios, que se acomodan facilmente a cualquier necesidad! </h6>
                </div>
            </div>
            <div className="containerAutos">
                <div className='container'>
                    <h1>CAMBIA YA DE AUTO</h1>
                    <h3>¡Tomamos tu auto como forma de pago!</h3>
                    <h6>Contamos con profesionales capacitados para evaluar tu auto con el fin de darte la mejor oferta </h6>
                    <h4>Que esperas para preguntar!</h4>
                </div>
                <div className='container'>
                    <img src={mercedes} weight={600} height={250}/>
                </div>
            </div>
            
        </div>
    );
}

export default Home;