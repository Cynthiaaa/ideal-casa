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
            filteredData: listingData
        }
        this.change = this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
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


       this.setState({
           filteredData: newData
       }) 
    }

render () {
    return ( <div> 
        <Header />
        <section id="content">
            <Filter change={this.change} globalState={this.state} />
            <Listings listingData = {this.state.filteredData} />
        </section>
        </div>)
 }
}

ReactDOM.render(<App />, app)