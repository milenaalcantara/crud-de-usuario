import React from 'react'
import './App.css'

import Logo from '../components/templates/logo/Logo'
import Nav from '../components/templates/nav/Nav'
import Main from '../components/templates/main/Main'
import Footer from '../components/templates/footer/Footer'


const App = (props) => {
  return(
    <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
  )
}

export default App