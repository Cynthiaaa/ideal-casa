import React, { Component} from 'react'

export default class Listing extends Component {
  constructor () {
    super()
    this.state = {
  
    }
  }

  render () {
    return ( <section id="listings">
      <span className="listing-number">14.570 casas y pisos en alquiler en Barcelona</span>
      
      <section id="search-box">
        <div className="sort-options"> Ordenar :
          <select className="sort-by" name="sort-by">
            <option value="relevance">Relevancia</option>
            <option value="price-asc">Baratos</option>
            <option value="recent">Recientes</option>
          </select>
        </div>
        <input type="text" name="search" placeholder="Que buscas ?" />
      </section>

      <section id="gallery-results">
        {/* <div className="listing">
          <div className="listing-img">
             <span className="adress">Adress</span>
          </div>
        </div> */}
      </section>

      <section id="pagination">
      </section>

    </section>)
  }
}
