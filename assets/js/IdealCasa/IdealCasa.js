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
            min_price: 0, 
            max_price: 10000,
            min_floor_space: 0, 
            max_floor_space: 1000,
        }
        this.change = this.change.bind(this)
    }
    change(event) {
        var name = event.target.name
        var value = event.target.value

        this.setState({
          [name]: value
        }, () => {
            console.log(this.state)
        }
        )
    }

render () {
    return ( <div> 
        <Header />
        <section id="content">
            <Filter change={this.change} globalState={this.state} />
            <Listings listingData = {this.state.listingData} />
        </section>
        </div>)
 }
}

ReactDOM.render(<App />, app)