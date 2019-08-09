import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
  
    }
    this.cities = this.cities.bind(this)
  }

  componentWillMount(){
     this.props.populateAction()
  }

  cities() {
    if(this.props.globalState.populateFormData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormData

      console.log(cities)
  
       return cities.map((item) => {
         return (
           <option key={item} value={item}>{item}</option>
         )
       })
    }
  }
  homeTypes(){
    if(this.props.globalState.populateFormData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormData

      console.log(homeTypes)
  
       return homeTypes.map((item) => {
         return (
           <option key={item} value={item}>{item}</option>
         )
       })
    }
  }
  bedrooms(){
    if(this.props.globalState.populateFormData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormData

      console.log(bedrooms)
  
       return bedrooms.map((item) => {
         return (
           <option key={item} value={item}>{item}</option>
         )
       })
    }
  }

  render () {
    return ( 
    <section id="filters">
         <h1>Encuentra la casa de tus sueños</h1>

          <h4>Cuitad</h4>
       <select name="city" className="city" onChange={this.props.change} >
           <option value="Todas">Todas</option>
           {this.cities()}
      </select>

         <h4> Tipo de inmueble</h4>
      <select name="homeType" className="homeType"onChange={this.props.change}>
         <option value="Todos">Todos</option>
          {this.homeTypes()}
      </select>

        <div name="prices" className="filter prices">
          <h4>Precio</h4>
           <input type="text" name="min_price" placeholder="Min" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price}/>
           <input type="text" name="max_price" placeholder="Max" className="max_price" onChange={this.props.change} value={this.props.globalState.max_price}/>
       </div>

        <div name="surface" className="filter surface">
          <h4>Tamano</h4>
           <input type="text" name="min_floor_space" placeholder="Min" className="min_floor_space" onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
           <input type="text" name="max_floor_space"placeholder="Max" className="max_floor_space" onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
        </div>

        <div name="bedrooms" className="filter bedrooms">
          <h4>Habitaciones</h4>
         <select name="rooms" className="rooms" onChange={this.props.change}>
            <option value="Todas">Todas</option>
            {this.bedrooms()}
         </select>
        </div>
    </section>
    )
  }
}
