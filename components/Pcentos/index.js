import * as css from "./Pcentos.module.css"
import Contanier from "../Contanier";
import Conteudo from "../Conteudo";
import Sabores from "../Sabores/indx";
import foto from "../../public/salgado1.jpg"

function Pcentos(){
  return(
  <Contanier>
     <Conteudo>
      <Sabores
      nomeProduto="Cento de coxinha"
      fotoProduto={foto}
      valorProduto="40,00"
      />
    </Conteudo>

    <Conteudo>
      <Sabores
      nomeProduto="Cento de Risoles"
      fotoProduto={foto}
      valorProduto="40,00"
      />
    </Conteudo>

    <Conteudo>
      <Sabores
      nomeProduto="Cento de Kibe"
      fotoProduto={foto}
      valorProduto="40,00"
      />
    </Conteudo>
    <Conteudo>
      <Sabores
      nomeProduto="Cento de Vina"
      fotoProduto={foto}
      valorProduto="40,00"
      />
    </Conteudo>

    <Conteudo>
      <Sabores
      nomeProduto="Cento de Bolinha"
      fotoProduto={foto}
      valorProduto="40,00"
      />
    </Conteudo>

    <Conteudo>
      <Sabores
      nomeProduto="Cento de Pastel"
      fotoProduto={foto}
      valorProduto="40,00"
      />
    </Conteudo>
  </Contanier>
  )
}

export default Pcentos;