import * as css from "./Ppasteis.module.css"
import Image from "next/image";
import Contanier from "../Contanier";
import Conteudo from "../Conteudo";
import foto from "../../public/salgado1.jpg"
import Sabores from "../Sabores/indx";

function Ppasteis(){
  return(
  <Contanier>
    <Conteudo>
      <Sabores
      nomeProduto="Pastel de Carne"
      fotoProduto={foto}
      valorProduto="4,00"
      />
    </Conteudo>
    <Conteudo>
    <Sabores
      nomeProduto="Pastel de Carne e queijo"
      fotoProduto={foto}
      valorProduto="4,00"
      />
    </Conteudo>
    
    <Conteudo>
    <Sabores
      nomeProduto="Pastel de Calabresa"
      fotoProduto={foto}
      valorProduto="4,00"
      />
    </Conteudo>
    
    <Conteudo>
    <Sabores
      nomeProduto="Pastel de  Queijo"
      fotoProduto={foto}
      valorProduto="4,00"
      />
    </Conteudo>
    
    <Conteudo>
    <Sabores
      nomeProduto="Pastel de Pizza"
      fotoProduto={foto}
      valorProduto="4,00"
      />
    </Conteudo>
    
  </Contanier>
  )
} 

export default Ppasteis;
