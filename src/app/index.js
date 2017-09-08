import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
  render() {
    const user = {
      name: 'Christian',
      musica: {
        estilo: 'Rock'
      },
      bebidas: {
        cerveja: 'Cerveja'
      },
      hobbies: ['Esportes', 'Ler']
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home age={25} user={user} >
              <p>Passando dados para o componente sem props (children)</p>
            </Home>
          </div>
        </div>
      </div>
    )
  }
}

render( <App/>, window.document.getElementById('app') )