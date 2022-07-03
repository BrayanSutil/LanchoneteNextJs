import React from "react"
import PageHead from "../components/PageHead"
import Pfritos from "../components/Pfritos"
import Products from "../components/Products"

function Home() {
  return (
    <section 
    id="idPags"
    className="home"
>
      <PageHead titulo="CCOMC - Fritos"></PageHead>
      <Products paginaAtiva="fritos"/>
      <Pfritos/>
    </section>
  )
}

export default Home
