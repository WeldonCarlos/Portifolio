import React from "react";

import "./estilos.css";
import LineHorizontal from "../../Components/LineHorizontal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Projetos() {
  
   const projetos = [
    {
      id: 1,
      titulo: "xbrain-store",
      description: "Projeto de Teste: Página de Produtos com ReactJS + Redux",
      linkRepositorio: "https://github.com/WeldonCarlos/xbrain-store",
      linkDeploy: "https://xbrain-store.netlify.app/",  
      image: ''
    },
    {
      id: 2,
      titulo: "Proway Computers",
      description: "Projeto de Teste: Página de Produtos com ReactJS + Redux",
      linkRepositorio: "https://prowaycomputers.netlify.app",
      linkDeploy: "https://prowaycomputers.netlify.app",  
      image: ''
    },
    {
      id: 3,
      titulo: "Interactive Card",
      description: "Projeto de Teste: Página de Produtos com ReactJS + Redux",
      linkRepositorio: "https://github.com/WeldonCarlos/cartaointerativo",
      linkDeploy: "",  
      image: ''
    },
  
    {
      id: 4,
      titulo: "Painel de Controle do Tempo",
      description: "Projeto de Teste: Página de Produtos com ReactJS + Redux",
      linkRepositorio: "https://github.com/WeldonCarlos/Painel-de-controle-de-tempo",
      linkDeploy: "",  
      image: ''
    },
    {
      id: 5,
      titulo: "Painel de Controle do Tempo",
      description: "Projeto de Teste: Página de Produtos com ReactJS + Redux",
      linkRepositorio: "https://github.com/WeldonCarlos/Painel-de-controle-de-tempo",
      linkDeploy: "",  
      image: ''
    },
  ]


  return (
    <section
      className="Conteiner__Projetos"
      style={{ backgroundColor: "#082556" }}
    >
      <div className="Conteiner__TituloProjetos">
        <h2 className="Titulo__Principal--Projetos">Projetos</h2>
        <LineHorizontal largura={140} altura={1} />
      </div>
      <div className="Conteiner__Projetos">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        
        pagination={true}
        modules={[ Pagination]}
        
      >
       
           {projetos.map((item) => (
             <SwiperSlide>
               <div key={item.id} className="card" >
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
             </div>
 
             </SwiperSlide>
           ))}
      
       
      </Swiper>

      </div>
    </section>
  );
}
