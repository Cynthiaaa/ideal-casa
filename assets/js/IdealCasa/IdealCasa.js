import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'

class App extends Component {
    constructor() {
        super()
    }

render () {
    return ( <div> 
        <Header />
        <section id="content">
            <Filter />
            <Listings />
        </section>
        </div>)
 }
}

ReactDOM.render(<App />, app)