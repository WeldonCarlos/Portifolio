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


const Skills = [
    { 
        id: 1, 
        icon: <FaReact size={22} color='#61dafb'/>
    },
    { 
        id: 2, 
        icon: <FaHtml5 size={22} color='#EC722E'/>
    },
    {   
        id: 3,
        icon: <FaCss3Alt size={22}  color='#229FDC'/>
    },
    {
        id:4,
        icon: <BiLogoJavascript size={26} color='yellow'/>
    },
    {
        id: 5,
        icon: <SiTypescript size={20}  color='#009CD9'/>
    },
    {
        id: 6,
        icon: <FaSalesforce size={25}  color='#009CD9'/>
    },
    
    {
        id: 7,
        icon: <SiMulesoft size={20}  color='white'/>
    },
    {   
        id: 8,
        icon: <BiLogoGit size={25}  color='#e84e31'/>
    },
    {
        id: 9,
        icon: <FaGithub size={22} color='white'/>
    },
    {
        id: 10,
        icon: <FaBootstrap size={22} color="skyblue"/>
    },
    {
        id: 11,
        icon: <BiLogoRedux size={24} color='purple'/>
    },
   
   
    {
        id:12,
        icon: <BiLogoWordpress size={22} color='#207196'/>
    },
    
    {
        id:13,
        icon: <BiLogoFirebase size={22} color='#F7C427'/>
    },

    {
        id:14,
        icon: <SiAxios size={22} color='white'/>
    }

   

]


export default function ScrollingIconesSkills() {
  return (
    
    <div className='Conteiner__Scrolling'> 
  <Swiper pagination={true} modules={[Autoplay]} autoplay={{delay: 1000}} loop slidesPerView={5} className="swiper">

        {Skills.map((item) => {
              return(  
              <SwiperSlide key={item.id}>
                    {item.icon}
              </SwiperSlide>
              
              )
        })}
   
  
  </Swiper></div>
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
   