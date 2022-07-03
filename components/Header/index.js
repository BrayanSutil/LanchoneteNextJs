import * as css from './Header.module.css';
import React from 'react';
import Image from 'next/image'
import Logo from '../../public/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return(
    <header className={css.header}>
      <div className={css.configHeader}>
        <div className={css.confgLogo}>
          <div className={css.logo}>
            <Image alt='logo' src={Logo} />
          </div>
          <h1>C com C<span>Salgados</span>.</h1>        
        </div>

        <div className={css.iconMenu}>
          <MenuIcon color='error'/>
        </div>
      </div>   

      <div className={css.line}></div>
    </header>
  )
}

export default Header;