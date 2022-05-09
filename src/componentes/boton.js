import React from 'react'
import  '../estilos/Boton.css'

function Boton(props){

  const esoperador = valor => {
    return isNaN(valor) && (valor!='.') && (valor!= '=');
    }
    
  return(
    <div 
      className={`boton-contenedor ${esoperador(props.children) ? 'operador': null}`}
      onClick = { () => props.manejarClic(props.children)}> 
      {props.children}
      
    </div> // definir funcion flecha ()=>
    
  )
}

export default Boton;
