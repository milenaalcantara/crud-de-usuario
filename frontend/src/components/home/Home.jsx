import React from 'react'
import Main from '../templates/main/Main'

const Home = (props) => {
  return(
    <Main icon="home" title="Início"person>
      <div className='display-4'>Bem Vindo!</div>
      <hr />
      <p className="mb-0">Sistema para exemplificar a construção
        de um cadastro desenvolvido em React!</p>
    </Main>
  )
}

export default Home