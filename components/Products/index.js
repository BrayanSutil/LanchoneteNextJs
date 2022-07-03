import * as css from './products.module.css';
import React from 'react';
import Link from 'next/link';

function Products(propriedades){
  return(
    <div className={css.menu}>
      <Link href="/">
        <button
          className={
            css.button 
            + (propriedades.paginaAtiva === 'fritos' ? ' ' + css.active : '')
          }
        >
        Fritos
        </button>
      </Link>

      <Link href="/assados">
        <button
          className={
            css.button 
            + (propriedades.paginaAtiva === 'assados' ? ' ' + css.active : '')
          }
        >
          Assados
        </button>
      </Link>
      <Link href="/pastel">
        <button
          className={
            css.button 
            + (propriedades.paginaAtiva === 'pastel' ? ' ' + css.active : '')
          }
        >
          Pasteis
        </button>
      </Link>
      <Link href="/cento">
        <button
          className={
            css.button 
            + (propriedades.paginaAtiva === 'cento' ? ' ' + css.active : '')
          }
        >
        Centos
        </button>
      </Link>
    </div>
  )
}

export default Products;
