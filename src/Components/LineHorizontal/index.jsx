

import React from 'react';
import './estilos.css'

function LineHorizontal({largura,altura}) {
  return <div className='linha' style={{width: largura, height: altura}}/>;
}

export default LineHorizontal;