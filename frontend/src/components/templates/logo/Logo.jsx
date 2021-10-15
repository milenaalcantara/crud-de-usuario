import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo.png'
import './Logo.css'


const Logo = (props) => {
  return(
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" title="Logo Cod3r" />
      </Link>
    </aside>
  )
}

export default Logo