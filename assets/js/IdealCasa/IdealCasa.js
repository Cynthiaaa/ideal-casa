import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'

class App extends Component {
    constructor() {
        super()
    }

render () {
    return ( <div> <Header /></div>)
 }
}

ReactDOM.render(<App />, app)