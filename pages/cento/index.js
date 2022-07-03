import React from "react";
import PageHead from "../../components/PageHead";
import Pcentos from "../../components/Pcentos";
import Products from "../../components/Products";


function Cento(){
  return(
    <div 
    id="idPags"
    >
    <PageHead titulo="CCOMC - Cento"></PageHead>
    <Products paginaAtiva="cento"/>
    <Pcentos />
   </div>
  )
}

export default Cento;