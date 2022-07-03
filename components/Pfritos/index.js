import React from "react"
import Contanier from "../Contanier"
import foto from "../../public/salgado1.jpg"
import Conteudo from "../Conteudo"
import Sabores from "../Sabores/indx"

function Pfritos(){
  return(
    <Contanier>
      <Conteudo>
        <Sabores
        nomeProduto="Pastel de Carne"
        fotoProduto={foto}
        valorProduto="3,00"
        />
      </Conteudo>
      <Conteudo>
      <Sabores
        nomeProduto="Pastel de Carne e queijo"
        fotoProduto={foto}
        valorProduto="3,00"
        />
      </Conteudo>
      
      <Conteudo>
      <Sabores
        nomeProduto="Pastel de Calabresa"
        fotoProduto={foto}
        valorProduto="3,00"
        />
      </Conteudo>
      
      <Conteudo>
      <Sabores
        nomeProduto="Pastel de  Queijo"
        fotoProduto={foto}
        valorProduto="3,00"
        />
      </Conteudo>
      
      <Conteudo>
      <Sabores
        nomeProduto="Pastel de Pizza"
        fotoProduto={foto}
        valorProduto="3,00"
        />
      </Conteudo>
      
    </Contanier>
  )
}
export default Pfritos