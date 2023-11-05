import React from 'react';
import { Link } from 'react-scroll'

import './Estilos.css'
import Logo from '../../assets/Image/Weldon.png'


export default function Header() {
 return (

   <header className='Conteiner__Cabecalho'>
    
                   
    <section>
      <nav className="navbar navbar-expand-lg fixed-top  Conteiner_background ">
        <div className="container-fluid  ">
          <a className="navbar-brand" href="#secao-home" aria-label="Logo para voltar na primeira sessão do site ">
            <img src={Logo} className='logo__principal'/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav">
              <li>  
                 <Link to='Home' className="nav-link" smooth duration={500} aria-current="page" aria-label="link para acessar a home"> Home</Link>
              </li>
              <li>
              
                <Link to='QuemSou' className="nav-link" smooth offset={-50} duration={500} aria-current="page" aria-label="link para acessar a home"> Sobre</Link>
              </li>
              <li>
               
                <Link to='Projetos' className="nav-link" smooth offset={-50} duration={500} aria-current="page" aria-label="link para acessar a home"> Projetos</Link>
              </li>
              <li>
                <Link to='Certificados' className="nav-link" smooth offset={-50}duration={500} aria-current="page" aria-label="link para acessar a home"> Certificados</Link>
              </li>
              <li> 
                 <Link to='Contato' className="nav-link" smooth offset={-50} duration={500} aria-current="page" aria-label="link para acessar a home"> Contato</Link>  
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </section>

   </header>

  );
}