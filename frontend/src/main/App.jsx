import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
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
    <Main 
      icon="home" 
      title="Início" 
      subtitle="Segundo projeto do capítulo de React."
    />
    <Footer />
  </div>
  )
}

export default App