import React from "react";
import PageHead from "../../components/PageHead";
import Ppasteis from "../../components/Ppasteis";
import Products from "../../components/Products"


function Pastel(){
  return(
    <div 
    id="idPags"
>
          <PageHead titulo="CCOMC - Pasteis"></PageHead>
          <Products paginaAtiva="pastel"/>
          <Ppasteis/>
          
   </div>
  )
}

export default Pastel;