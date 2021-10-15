import React from 'react'
import './Nav.css'


const Nav = (props) => {
  return(
    <aside className="menu-area">
      <nav className="menu">
        {/* criar componente para link ex: nav-item  e usando `` composição*/}
        <a href="#/">
          <i className="fa fa-home"></i> Início
        </a>
        <a href="#/users">
          <i className="fa fa-users"></i> Usuários
        </a>
      </nav>
    </aside>
  )
}

export default Nav