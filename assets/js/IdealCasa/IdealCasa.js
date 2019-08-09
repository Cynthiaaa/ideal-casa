import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import listingData from './data/ListingData'

class App extends Component {
    constructor() {
        super()
        this.state = {
            listingData,
            city: "Todas", 
            homeType: "Todos", 
            rooms: "Todas",
            min_price: 0, 
            max_price: 10000,
            min_floor_space: 0, 
            max_floor_space: 1000,
            filteredData: listingData, 
            search: '', 
            populateFormData: ''
        }
        this.change = this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
        this.populateForm = this.populateForm.bind(this)
    }
    change(event) {
        var name = event.target.name
        var value = event.target.value

        this.setState({
          [name]: value
        }, () => {
            console.log(this.state)
        this.filteredData()
        })
    }

    filteredData(){
       var newData = this.state.listingData.filter((item) => {
           return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorspace >= this.state.min_floor_space && item.floorspace <= this.state.max_floor_space
       })

       if(this.state.city != "Todas") {
         newData = newData.filter((item) => {
             return item.city == this.state.city
         })
       }

       if(this.state.homeType != "Todos") {
        newData = newData.filter((item) => {
            return item.homeType == this.state.homeType
        })
      }

      if(this.state.rooms != "Todas") {
        newData = newData.filter((item) => {
            return item.rooms == this.state.rooms
        })
      }

    //   if(this.state.search != ''){
    //       newData = newData.filter((item) => {
    //          var city = item.city.toLowerCase()
    //          var searchText = this.state.search.toLowerCase()
    //          var x = city.match(searchText)

    //          if(x != null) {
    //              return true
    //          }

    //       })
    //   }

       this.setState({
           filteredData: newData
       }) 
    }

    populateForm() {
        var cities  = this.state.listingData.map((item) => {
            return item.city
        })
        cities = new Set(cities)
        cities = [...cities]

        var homeTypes  = this.state.listingData.map((item) => {
            return item.homeType
        })
        homeTypes = new Set(homeTypes)
        homeTypes = [...homeTypes]

        var bedrooms  = this.state.listingData.map((item) => {
            return item.rooms
        })
        bedrooms = new Set(bedrooms)
        bedrooms = [...bedrooms]

        this.setState({
            populateFormData: {
                homeTypes, 
                bedrooms, 
                cities
            }
          }, () => {
            console.log(this.state)
        })
    }

render () {
    return ( <div> 
        <Header />
        <section id="content">
            <Filter change={this.change} globalState={this.state} populateAction={this.populateForm} />
            <Listings listingData = {this.state.filteredData} />
        </section>
        </div>)
 }
}

ReactDOM.render(<App />, app)