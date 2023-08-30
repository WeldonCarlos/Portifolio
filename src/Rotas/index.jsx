import React from "react";

import Home from "../Pages/Home/Home";


import "./rotas.css"

import QuemSou from "../Pages/QuemSou";
import Projetos from "../Pages/Projetos";
import Contato from "../Pages/Contato";
import Certificados from "../Pages/Certificados";

export default function RotasScroll() {
 return (
 
   
   <main className="Conteiner__Geral">
 
          <div id="Home">
            <Home/>
          </div>  
          <div id="QuemSou">
            <QuemSou/>
          </div>
          <div id="Projetos">
            <Projetos/>
          </div>
          <div id="Certificados">
            <Certificados/>
          </div>
          <div id="Contato">
            <Contato/>
          </div>
   </main>

   

  );
}