import React from "react";
import PageHead from "../../components/PageHead";
import Passados from "../../components/Passados";
import Products from "../../components/Products";

function Assados(){
  return(
    <div
    id="idPags"
    >
    <PageHead titulo="CCOMC - Assados"></PageHead>
    <Products paginaAtiva="assados"/>
    <Passados />
   </div>
  )
}

export default Assados;