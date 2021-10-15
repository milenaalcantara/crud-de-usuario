import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo1.png'
import './Logo.css'


const Logo = (props) => {
  return(
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" title="Logo" />
      </Link>
    </aside>
  )
}

export default Logo