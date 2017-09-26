import React from 'react'

export class Home extends React.Component {
  
  constructor(props) {
    super()
    this.state =  {
      age: props.initialAge, // não adicionar colocar props no state exceto quando for valor inicial
      status: 0
    }
  }
 
  onMakeOlder() {
    this.setState({ // colocar os valores que precisarem ser atualizado na UI
      age: this.state.age + 3,
      status: this.state.status + 1
    })
  }

  render() {
    return (
      <div>
        <p>Componente da Home</p>
        <p>Meu nome é { this.props.name }, tenho { this.state.age } anos</p>
        <p>Status: { this.state.status }</p>
        <hr/>
        <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Me deixar mais velho !</button>
        {/*<p>Gosto de { this.props.user.musica.estilo }, e { this.props.user.bebidas.cerveja }</p>*/}
        {/*<div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map((hobby, i) => <li key={ i }>{ hobby }</li>) }
          </ul>
        </div>
        <hr/>*/}
        {/*{ this.props.children }*/}
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number
  // user: React.PropTypes.object,
  // children: React.PropTypes.element.isRequired
}