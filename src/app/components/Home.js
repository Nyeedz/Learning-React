import React from 'react'

export class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Componente da Home</p>
        <p>Meu nome é { this.props.user.name }, tenho { this.props.age } anos</p>
        <p>Gosto de { this.props.user.musica.estilo }, e { this.props.user.bebidas.cerveja }</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map((hobby, i) => <li key={ i }>{ hobby }</li>) }
          </ul>
        </div>
        <hr/>
        { this.props.children }
      </div>
    )
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
}