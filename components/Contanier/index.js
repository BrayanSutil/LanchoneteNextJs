import * as css from "./Contanier.module.css"

function Contanier(propriedades){
  return(
    <div className={css.contanier}>
       {propriedades.children}
    </div>
  )
}
export default Contanier