import React from 'react'

import "./estilos.css";
import video from "../../assets/Videos/video2.mp4";
import FotoThallysson from '../../assets/Image/DevCartoon.png'
import {FaLinkedin,FaInstagram} from 'react-icons/fa'
import {BiSolidRightArrow} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import ScrollingIconesSkills from '../../Components/ScrollingIconesSkills';



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
                <span className='Text__Hello'>✌🏼 Hello World, I´m Weldon Carlos !</span>
              </div>
              
              <h1 className='Titulo__Home'> Desenvolvedor Front end apaixonado por tecnologia e transformar ideias em soluções digitais.</h1>
              <p className='Descricao__Home'> Minha expertise abrange desde Desenvolvimento Front-end a Sales Force e CMS, com habilidades em HTML, CSS, JavaScript, React, Wordpress, Sales Force Adm e Mule Soft. Estou comprometido em aprender constantemente, vestir a camisa e colaborar em projetos desafiadores que me deem um horizonte para conquistar.</p>

               <div className='Conteiner__Btn'>
                 <a id='Quemsou' className='btn__MeuTrabalho'> Conhecer mais... <BiSolidRightArrow className="icone__flecha" color='white'/> </a> 
               </div>  
            </div>
            
            <div className='Conteiner__Foto-Apresentacao'>
              <img src={FotoThallysson} className='Foto__Apresentacao' />
       
              <div className='Conteiner__RedesSociais'>
                   
                
                    <ScrollingIconesSkills/>
              </div>
            </div>


       </div>

    </section>
  )
}