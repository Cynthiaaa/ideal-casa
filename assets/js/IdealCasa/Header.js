import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
  
    }
  }

  render () {
    return ( <header>
      <div className="logo">Ideal Casa Barcelona - Encuentra la casa de tus sueños</div>
      <nav>
        <a href="#">Pon tu anuncio gratis</a>
        <a href="#">Sobre nosotros</a>
        <a href="#" className="login-btn">Acesso usuarios</a>
      </nav>
      </header>)
  }
}


