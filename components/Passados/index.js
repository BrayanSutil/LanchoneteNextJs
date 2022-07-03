import * as css from "./Passados.module.css"
import React from "react"
import Contanier from "../Contanier"
import Conteudo from "../Conteudo"
import Image from "next/image"
import foto from "../../public/salgado1.jpg"
import Sabores from "../Sabores/indx"

function Passados(){
  return(
    <Contanier>
    <Conteudo>
      <Sabores
      nomeProduto="Frango Catupiry"
      fotoProduto={foto}
      valorProduto="5,00"
      />
    </Conteudo>
    <Conteudo>
      <Sabores
      nomeProduto="Pizza"
      fotoProduto={foto}
      valorProduto="5,00"
      />
    </Conteudo>
    <Conteudo>
      <Sabores
      nomeProduto="hamburgão"
      fotoProduto={foto}
      valorProduto="5,00"
      />
    </Conteudo>
    <Conteudo>
      <Sabores
      nomeProduto="Doginho"
      fotoProduto={foto}
      valorProduto="5,00"
      />
    </Conteudo>
    <Conteudo>
      <Sabores
      nomeProduto="Empadinha"
      fotoProduto={foto}
      valorProduto="5,00"
      />
    </Conteudo>
    </Contanier>
  )
}
export default Passados;