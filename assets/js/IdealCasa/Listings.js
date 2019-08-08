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
        <div className="sort-options">
          <span className="sort-name">Ordenar :</span>
          <select className="sort-by" name="sort-by">
            <option value="relevance">Relevancia</option>
            <option value="price-asc">Baratos</option>
            <option value="recent">Recientes</option>
          </select>
        </div>
        <input type="text" name="search" placeholder="Que buscas ?" />
      </section>

      <section id="gallery-results">
        <div className="listing">
          <div className="listing-img">
          <div className="details">
              <div className="agency-img"></div>
                 <div className="agency-details">
                   <span className="agency-name">Barna Luxury Agency</span>
                   <span className="agency-date">Publicado el 03/05/2019</span>
                 </div>
             </div>
          </div>
          <div className="listing-details">
                    <div className="price">
                     3000€ / mes
                    </div>
                    <div className="location">
                      <i className="fa fa-map-marker" aria-hidden="true"></i> Barcelona
                    </div>
                 </div>
            </div> 
      </section>

      <section id="pagination">
         <ul className="pages">
             <li>Prev</li>
             <li className="active">1</li>
             <li>2</li>
             <li>Next</li>
         </ul>
      </section>

    </section>)
  }
}
