import * as css from "./Sabores.module.css"
import Image from "next/image";

function Sabores(propriedade){
  return(
<div>
      <div className={css.Ppasteis}>
        <h1 id={css.Ppasteish1}>
         {propriedade.nomeProduto}
        </h1>
        <div>
          <Image 
            width={55}
            height={55}
            alt="coxinha" 
            src={propriedade.fotoProduto} 
            style={{
              borderRadius: '25%',
            }}
          />
        </div>
      </div>
      <div className={css.PpasteisDiv}>
        <p className={css.Ppasteisp}>
        R$ {propriedade.valorProduto}
        </p>
      </div>
</div>

  )
}

export default Sabores;