import React from 'react'
import './Main.css'

import Header from '../header/Header'


const Main = (props) => {
  return(
    <React.Fragment>
      <Header />
      <main className="content">
        Conteúdo
      </main>
    </React.Fragment>
  )
}

export default Main