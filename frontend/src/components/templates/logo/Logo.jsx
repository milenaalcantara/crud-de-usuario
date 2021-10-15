import React from 'react'
import logo from '../../../assets/images/logo.png'
import './Logo.css'


const Logo = (props) => {
  return(
    <aside className="logo">
      <a href="/" className="logo">
        <img src={logo} alt="logo" title="Logo Cod3r" />
      </a>
    </aside>
  )
}

export default Logo