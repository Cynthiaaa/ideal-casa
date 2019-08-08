import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
  
    }
  }

  render () {
    return ( 
    <section id="filters">
         <h1>Encuentra la casa de tus sueños</h1>

          <h4>Cuitad</h4>
       <select name="city" className="city" onChange={this.props.change} >
         <option value="Todas">Todas</option>
         <option value="Barcelona">Barcelona</option>
         <option value="Sabadell">Sabadell</option>
         <option value="L Hospitalet de Llobregat">L'Hospitalet de Llobregat</option>
         <option value="El Prat de Llobregat">El Prat de Llobregat</option>
      </select>

         <h4> Tipo de inmueble</h4>
      <select name="homeType" className="homeType"onChange={this.props.change}>
         <option value="Todas">Todos</option>
         <option value="Apartamiento">Apartamiento</option>
         <option value="Casa">Casa</option>
      </select>

        <div name="prices" className="filter prices">
          <h4>Precio</h4>
           <input type="text" name="min_price" placeholder="Min" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price}/>
           <input type="text" name="max_price" placeholder="Max" className="max_price" onChange={this.props.change} value={this.props.globalState.max_price}/>
       </div>

        <div name="surface" className="filter surface">
          <h4>Tamano</h4>
           <input type="text" name="min_floor_space" placeholder="Min" className="min_floor_space" onChange={this.props.change}/>
           <input type="text" name="max_floor_space"placeholder="Max" className="max_floor_space" onChange={this.props.change}/>
        </div>

        <div name="bedrooms" className="filter bedrooms">
          <h4>Habitaciones</h4>
         <select name="rooms" className="rooms" onChange={this.props.change}>
            <option value="Todas">Todas</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="+4">4</option>
         </select>
        </div>
    </section>
    )
  }
}
