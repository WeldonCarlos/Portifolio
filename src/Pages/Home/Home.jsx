import React from 'react'


import "./estilos.css";
import video from "../../assets/Videos/video2.mp4";
import FotoThallysson from '../../assets/Image/DevCartoon.png'
import {FaLinkedin,FaInstagram} from 'react-icons/fa'
import {BiSolidRightArrow} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Home(){
  return(
    <section>
     
      <div className="fundo__video">
          <video className="video" autoPlay loop muted>
            <source src={video} alt="video de apresentação" />
          </video>
      </div>

      <div className='Conteiner__Home'>
            <div className='Conteiner__Apresentacao'>
              <div className='Conteiner__HelloWorlds'>
                <span className='Text__Hello'>✌🏼 Hello World !</span>
              </div>
              
              <h1 className='Titulo__Home'> Desenvolvedor Full Stack apaixonado por tecnologia e transformar ideias em soluções digitais. </h1>
              <p className='Descricao__Home'> Minha expertise abrange o desenvolvimento front-end, mobile e back-end, com habilidades em HTML, CSS, JavaScript, React, React Native, Node.js e bancos de dados. Estou comprometido em aprender constantemente, vestir a camisa e colaborar em projetos desafiadores.</p>

               <div className='Conteiner__Btn'>
                 <a id='Quemsou' className='btn__MeuTrabalho'> Conheça sobre mim <BiSolidRightArrow className="icone__flecha" color='white'/> </a> 
               </div>  
            </div>
            <div className='Conteiner__Foto-Apresentacao'>
              <img src={FotoThallysson} className='Foto__Apresentacao' />
              <div className='Conteiner__RedesSociais'>
                  <ul className='Lista__RedesSociais'>
                    <li className='Itens__RedesSociais'> 
                      <a href='https://www.linkedin.com/in/weldon-thallysson-54a0a1219/' target='_blank'><FaLinkedin className='icones' color='white'/></a>
                    </li>
                    
                    <li className='Itens__RedesSociais'>
                      <a href='https://github.com/WeldonThallysson' target='_blank'><AiFillGithub className='icones' color='white'/></a>
                    </li>
                   
                    <li className='Itens__RedesSociais'>
                      <a href='https://www.instagram.com/thallysson_programax/' target='_blank'><FaInstagram className='icones' color='white'/></a>
                    </li>
                    <li className='Itens__RedesSociais'>
                      <a href='https://twitter.com/thallyssondev' target='_blank'><AiFillTwitterCircle className='icones' color='white'/></a>
                    </li>
                  </ul>
              </div>
            </div>


       </div>

    </section>
  )
}