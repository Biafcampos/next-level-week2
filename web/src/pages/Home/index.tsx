import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css';
const Home = () => {
    return (
        <div id="page-home" >
            <div className="content">
                <header>
                <img src={logo} alt="ecoleta"/>
                </header>
                <main>
                    <h1>Seu marketplace de coleta de residuos</h1>

                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <a href="/cadastro">
                        <span>
                            {'>'}
                        </span>
                        <strong>cadastre um ponto de coleta</strong>
                    </a>
                </main>
            </div>

        </div>
    )
}
export default Home;