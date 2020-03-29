import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg'

export default function(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be the hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhado para encontar um herói para resolver isso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </section>
        
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}