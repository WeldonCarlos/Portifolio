import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LineHorizontal from '../LineHorizontal/index'
import "./style.css"
import { FaReact,FaAngular,FaGithub,FaBootstrap,FaSalesforce,FaHtml5,FaCss3Alt} from 'react-icons/fa';
import {BiLogoTailwindCss,BiLogoRedux,BiLogoGit, BiLogoJavascript, BiLogoJava,BiLogoPhp, BiLogoReact,BiLogoWordpress,BiLogoVuejs,BiLogoNodejs,BiLogoFirebase,BiLogoMongodb} from 'react-icons/bi'
import {SiMysql,SiAxios,SiQuasar, SiMulesoft, SiTypescript} from 'react-icons/si';
import IconReact from '../../assets/icones/structure.png'
import IconHtml5 from '../../assets/icones/html5.png'
import IconCss3 from '../../assets/icones/css3.png'
import IconJavascript from '../../assets/icones/javascript.png'
import IconSalesForce from '../../assets/icones/SalesForce.png'
import IconWordPress from '../../assets/icones/social.png'
import { FaStar } from 'react-icons/fa';
export default function Skills() {
    const skills = [
        { 
            id: 1, 
            icon: <img src={IconReact} style={{width:"120px",height:"120px"}} />,
            title: "React",
            descriptionSkill: "Em React.js,tenho as habilidades de Requisições HTTP com Axios,Utilização eficiente da Context API.Componentização eficaz, React Forms,Conhecimento em Redux,propriedades em React, React Hooks,estrutura de projeto,navegação entre telas através do React-Router.",
            starsSkill: 4,
        
        },
        { 
            id: 2, 
            icon: <img src={IconHtml5} style={{width:"120px",height:"120px"}} />,
            title: "HTML 5",
            descriptionSkill: "Tenho experiência em HTML5, incluindo,Estrutura e organização de páginas.Uso eficaz de semântica.Criação de listas e tabelas.Desenvolvimento de formulários e campos de entrada.Criação de links âncoras.Aplicação da hierarquia de títulos.Implementação de navegação com âncoras.Incorporação de conteúdo externo usando iframes.Essas habilidades me permitem criar páginas web bem estruturadas, interativas e acessíveis.",
            starsSkill: 5,
        },
        {   
            id: 3,
            icon: <img src={IconCss3} style={{width:"120px",height:"120px"}}  />,
            title: "Css 3",
            descriptionSkill: "Seletores avançados Arquitetura CSS3 moderna Uso de pseudo-classes como :hover e :active Estilização de texto Criação de sombras Domínio do modelo Flexbox Alinhamentos precisos Desenvolvimento de layouts responsivos Escolha e aplicação de cores Manipulação de cores de fundo Utilização de imagens de fundo Criação de gradientes Animações e transições Estilização por classe, ID e em linha Com essas habilidades, você é capaz de criar designs web sofisticados e interativos, garantindo uma experiência de usuário excepcional em suas páginas.",
            starsSkill: 5,
        },
        {
            id:4,
            icon: <img src={IconJavascript} style={{width:"120px",height:"120px"}}  />,
            title: "Javascript",
            descriptionSkill: "Claro, aqui estão suas habilidades em JavaScript resumidas:VariáveisCondiçõesOperadores aritméticos e matemáticosFunçõesEstruturas de controle como switch Object LiteralsOperador ternárioUso do loop forEachManipulação de arraysUtilização de métodos de arrayOperações com arraysTemplate strings Com essas habilidades em JavaScript, você é capaz de desenvolver aplicações interativas e eficazes, manipulando dados e controlando o comportamento dinâmico das páginas web.",
            starsSkill: 4,
        },
       
        {
            id: 5,
            icon: <img src={IconSalesForce} style={{width:"120px",height:"120px"}}  />,
            title: "Sales Force",
            descriptionSkill: "Gerenciamento de Usuários e Permissões.Automação de Processos e Fluxos de Trabalho.Integrações com outras ferramentas,manutenção e atualização da plataforma Salesforce.Com essas habilidades, sou capaz de administrar eficazmente a plataforma Salesforce, personalizando-a para atender às necessidades da organização, melhorando a eficiência e garantindo a segurança dos dados.",
            starsSkill: 4,
        },
        
        {
            id: 6,
            icon: <SiMulesoft size={125}  />,
            title: "MuleSoft",
            descriptionSkill: "Integração e Desenvolvimento de APIs Transformação de Dados,Conectividade com Sistemas Diversos,Gerenciamento do Ciclo de Vida de APIs,Implementação de Segurança em APIs,Resolução de Problemas de Integração,Com essas habilidades em MuleSoft, sou capaz de criar soluções de integração eficazes e seguras, melhorando a conectividade de sistemas e otimizando processos de negócios.",
            starsSkill: 4,
        },
        {   
            id: 7,
            icon: <BiLogoGit size={125}  color='#e84e31'/>,
            title: "Git",
            descriptionSkill: "Inicialização de Repositório,Clonagem de Repositórios,Adição de Arquivos,Realização de Commits,Criação e Gerenciamento de Ramificações,Resolução de Conflitos de Merge,Visualização de Histórico,Trabalho com Repositórios Remotos,Criação de Tags e Releases,Configuração de .gitignore",
            starsSkill: 4,
        },
      
        {
            id: 11,
            icon: <img src={IconWordPress} style={{width:"120px",height:"120px"}}  />,
            title: "Wordpress",
            descriptionSkill: "Instalação e Configuração do WordPress,Gestão de Conteúdo,Personalização de Temas (Especialmente com o Astra),Construção de Páginas com o Elementor,Gerenciamento de Plugins,Otimização de Desempenho,SEO (Otimização de Mecanismos de Busca),Resolução de Problemas,Segurança,Backup e Restauração,Integração de Terceiros,Gerenciamento de Usuários,Atualizações Regulares",
            starsSkill: 5,
        },
        
     
       
    
    ]
    

       
  return (
    
    <div className='Conteiner__ScrollingSkill'> 
  <Swiper modules={[Autoplay,Pagination,Navigation]} autoplay={{delay: 2000}} loop slidesPerView={1} className="swiper">

        {skills.map((item) => {
              return(  
              <SwiperSlide className='swiper__Slide' key={item.id}>
      
                   <span style={{color: "white"}}>{item.icon}</span> 
                   <span style={{padding: '18px 0 5px 0'}}>
                   
                   </span>
                   <p style={{color: "white",fontSize: "11px",margin: "0 5px" }}>{item.descriptionSkill}</p> 
                   <span style={{padding: '10px 0 10px 0 '}}>
                     <LineHorizontal largura={100} altura={0.2}/>
                   </span>
                   <div style={{display:"flex"}}>
                   {Array.from({ length: item.starsSkill }, (_, index) => (
             
             <FaStar key={index} style={{ marginRight: "2px" }} color='gold' />
     
      
        ))}
        
      
                   </div>
                  
              </SwiperSlide>
              
              )
        })}
  
  </Swiper>
  </div>
  )
}


 //Pai aqui abaixo são outros icones que comentei para quando o senhor se sentir seguro e quiser
    //apresentar como habilidade é só descomentar e já ta pronto !

    /*
     { 
        id:12,
        icon: <BiLogoReact size={22} color='#61dbfb'/>
    },
    {
        id: 2,
        icon: <FaAngular size={22} color='crimson'/>
    },*/

    /*
    {
        id:3,
        icon: <BiLogoVuejs size={22} color='#3fb27f'/>
    },
    */
    
    /* {
        id:7,
        icon: <BiLogoTailwindCss size={24} color='skyblue'/>
    },*/
   
    /*{
        id:10,
        icon: <BiLogoJava size={22} color='red'/>
    },
    */
    /*{
        id:11,
        icon: <BiLogoPhp size={24} color='#4d588e'/>
    },*/
   
   /*
    {
        id:14,
        icon: <BiLogoNodejs size={22} color='#8bbf3d'/>
    },
    */
   
   /*
    {
        id:16,
        icon: <BiLogoMongodb size={22} color='#3f9b38'/>
    },
    */
   /*
    {
        id:17,
        icon: <SiMysql size={24} color='white'/>
    },
    */
   /*{
        id:18,
        icon: <SiQuasar size={22} color='#40a0ed'/>
    },
    */
   