import React from 'react'
import './Main.css'

import Header from '../header/Header'


const Main = (props) => {
  return(
    <React.Fragment>
      <Header { ...props }/>
      <main className="content">
        Conteúdo
      </main>
    </React.Fragment>
  )
}

export default Main