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
    >
      <div className="display-4">Bem vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a construção de um 
        cadastro desenvolvido em React!
      </p>
    </Main>
    <Footer />
  </div>
  )
}

export default App