import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./style.css"
import { FaReact,FaAngular,FaGithub,FaBootstrap,FaSalesforce,FaHtml5,FaCss3Alt} from 'react-icons/fa';
import {BiLogoTailwindCss,BiLogoRedux,BiLogoGit, BiLogoJavascript, BiLogoJava,BiLogoPhp, BiLogoReact,BiLogoWordpress,BiLogoVuejs,BiLogoNodejs,BiLogoFirebase,BiLogoMongodb} from 'react-icons/bi'
import {SiMysql,SiAxios,SiQuasar, SiMulesoft, SiTypescript} from 'react-icons/si';
import IconReact from '../../assets/icones/structure.png'
export default function Skills() {
    const skills = [
        { 
            id: 1, 
            icon: <img src={IconReact} style={{width:"50px",height:"50px"}} />,
            title: "React",
            descriptionSkill: "Tenho habilidades sólidas em React.js,incluindo Requisições HTTP com Axios.Utilização eficiente da Context API.Componentização eficaz, React Forms,Conhecimento em Redux.",
            starsSkill: 5,
        },
        { 
            id: 2, 
            icon: <FaHtml5 size={22} color='#EC722E'/>,
            title: "HTML 5",
            descriptionSkill: "Tenho experiência em HTML5, incluindo,Estrutura e organização de páginas.Uso eficaz de semântica.Criação de listas e tabelas.Desenvolvimento de formulários e campos de entrada.Criação de links âncoras.Aplicação da hierarquia de títulos.Implementação de navegação com âncoras.Incorporação de conteúdo externo usando iframes.Essas habilidades me permitem criar páginas web bem estruturadas, interativas e acessíveis.",
            starsSkill: 5,
        },
        {   
            id: 3,
            icon: <FaCss3Alt size={22}  color='#229FDC'/>,
            title: "Css 3",
            descriptionSkill: "Seletores avançados Arquitetura CSS3 moderna Uso de pseudo-classes como :hover e :active Estilização de texto Criação de sombras Domínio do modelo Flexbox Alinhamentos precisos Desenvolvimento de layouts responsivos Escolha e aplicação de cores Manipulação de cores de fundo Utilização de imagens de fundo Criação de gradientes Animações e transições Estilização por classe, ID e em linha Com essas habilidades, você é capaz de criar designs web sofisticados e interativos, garantindo uma experiência de usuário excepcional em suas páginas.",
            starsSkill: 5,
        },
        {
            id:4,
            icon: <BiLogoJavascript size={26} color='yellow'/>,
            title: "Javascript",
            descriptionSkill: "Claro, aqui estão suas habilidades em JavaScript resumidas:VariáveisCondiçõesOperadores aritméticos e matemáticosFunçõesEstruturas de controle como switch Object LiteralsOperador ternárioUso do loop forEachManipulação de arraysUtilização de métodos de arrayOperações com arraysTemplate strings Com essas habilidades em JavaScript, você é capaz de desenvolver aplicações interativas e eficazes, manipulando dados e controlando o comportamento dinâmico das páginas web.",
            starsSkill: 5,
        },
       
        {
            id: 5,
            icon: <FaSalesforce size={25}  color='#009CD9'/>,
            title: "Sales Force",
            descriptionSkill: "Configuração e Personalização do Salesforce.Gerenciamento de Usuários e Permissões.Automação de Processos e Fluxos de Trabalho.Criação de Relatórios e Painéis.Integrações com outras ferramentas.Suporte e Treinamento para Usuários.Implementação de Políticas de Segurança de Dados.Manutenção e Atualização da Plataforma Salesforce.Com essas habilidades, sou capaz de administrar eficazmente a plataforma Salesforce, personalizando-a para atender às necessidades da organização, melhorando a eficiência e garantindo a segurança dos dados.",
            starsSkill: 5,
        },
        
        {
            id: 6,
            icon: <SiMulesoft size={20}  color='white'/>,
            title: "MuleSoft",
            descriptionSkill: "Integração de Sistemas,Desenvolvimento de APIs Transformação de Dados,Conectividade com Sistemas Diversos,Gerenciamento do Ciclo de Vida de APIs,Implementação de Segurança em APIs,Monitoramento e Análise,Resolução de Problemas de Integração,Com essas habilidades em MuleSoft, você é capaz de criar soluções de integração eficazes e seguras, melhorando a conectividade de sistemas e otimizando processos de negócios.",
            starsSkill: 5,
        },
        {   
            id: 7,
            icon: <BiLogoGit size={25}  color='#e84e31'/>,
            title: "Git",
            descriptionSkill: "Inicialização de Repositório,Clonagem de Repositórios,Adição de Arquivos,Realização de Commits,Criação e Gerenciamento de Ramificações,Resolução de Conflitos de Merge,Visualização de Histórico,Trabalho com Repositórios Remotos,Criação de Tags e Releases,Configuração de .gitignore",
            starsSkill: 5,
        },
      
        {
            id: 11,
            icon: <BiLogoWordpress size={22} color='#207196'/>,
            title: "Wordpress",
            descriptionSkill: "Instalação e Configuração do WordPress,Gestão de Conteúdo,Personalização de Temas (Especialmente com o Astra),Construção de Páginas com o Elementor,Gerenciamento de Plugins,Otimização de Desempenho,SEO (Otimização de Mecanismos de Busca),Resolução de Problemas,Segurança,Backup e Restauração,Integração de Terceiros,Gerenciamento de Usuários,Atualizações Regulares",
            starsSkill: 5,
        },
        
     
       
    
    ]
    
    
  return (
    
    <div className='Conteiner__ScrollingSkill'> 
  <Swiper pagination={true} modules={[Autoplay]} autoplay={{delay: 1000}} loop slidesPerView={1} className="swiper">

        {skills.map((item) => {
              return(  
              <SwiperSlide className='swiper__Slide' key={item.id}>
                   <p style={{color: "white",fontSize: "15px"}}>{item.icon}</p> 
                   <p style={{color: "white",fontSize: "12px", }}>{item.descriptionSkill}</p>
                   <p style={{color: "white",fontSize: "15px"}}>estrelas:{item.title}</p>
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
   