import React from "react";
import * as css from "./Conteudo.module.css"

function Conteudo(propriedades){
  return(
    <div className={css.teste}>
      {propriedades.children}
    </div>
  )
}
export default Conteudo;