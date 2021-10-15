import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Routes from './Routes'
import Logo from '../components/templates/logo/Logo'
import Nav from '../components/templates/nav/Nav'
import Footer from '../components/templates/footer/Footer'


const App = (props) => {
  return(
    <BrowserRouter>
    <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App