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
        }
    }

render () {
    return ( <div> 
        <Header />
        <section id="content">
            <Filter />
            <Listings listingData = {this.state.listingData} />
        </section>
        </div>)
 }
}

ReactDOM.render(<App />, app)