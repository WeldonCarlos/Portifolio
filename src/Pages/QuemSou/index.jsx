import React from "react";

import "./estilos.css";
import LineHorizontal from '../../Components/LineHorizontal/index'
import {FcAbout} from 'react-icons/fc'
import {FaCheckCircle} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import Skills from "../../Components/Skills";

export default function QuemSou() {
  return (
    <section
      className="Conteiner__QuemSou"

    >  
     

      <div className="Conteiner__GeralQuemsou">
       
      <div>
         <div className="SobreMim__Titulo">
           <h2 className="Texto__Titulo">Sobre mim <FcAbout size={22} color="white"/></h2>
           <LineHorizontal largura={150} altura={1}/>
         </div>

         <div className="Conteiner__SobreMim">
            <h3 className="Texto__TituloSobreMim">Quem sou ? </h3>
            <p className="Texto__DescricaoSobreMim">Sou Weldon Carlos, um entusiasta da tecnologia e desenvolvedor Front-end React e Sales Force. Minha jornada começou em 2020, e desde então, tenho me empenhado para me destacar no mundo do desenvolvimento de software.

Com um histórico como Técnico de Informática profissional e certificado, logo percebi minha paixão pelo desenvolvimento de softwares e decidi aprofundar meus conhecimentos nessa área. Agora, após três anos de dedicação, me sinto confiante e preparado para enfrentar qualquer desafio que o mercado de tecnologia possa apresentar.</p>
        <p className="Texto__DescricaoSobreMim">Minha especialização abrange desde a criação de sites institucionais, landing pages e sites WordPress com Tema Astra e Elementor, até a administração de aplicativos Sales Force e Mule Soft. Minha versatilidade e compromisso em me manter atualizado me permitem oferecer soluções sob medida para empresas em busca de eficiência e inovação.

Minha jornada é um testemunho da minha determinação em evoluir e me destacar na tecnologia. Estou pronto para colaborar em projetos desafiadores e contribuir para o sucesso de equipes e empresas que valorizam a excelência tecnológica. Vamos inovar juntos!</p>

         </div>
      </div>
      <div>
        <div className="Skills__Titulo"> 
         <h2 className="Texto__TituloHabilidades">Habilidades <FaCheckCircle size={20} color="#2196F3"/></h2>
         <LineHorizontal largura={120} altura={1}/>
        </div>
        <div className="Conteiner__Habilidades"> 
         <h2 className="Texto__HabilidadeSobreMim" > Hard Skills</h2>

      
           <Skills/>
      


        </div>
      </div>
          
      </div>
    </section>
  );
}
