import React, { Component} from 'react'

export default class Listing extends Component {
  constructor () {
    super()
    this.state = {
  
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {

          var {listingData} = this.props

          if(listingData == undefined || listingData.length == 0) {
            return "Lo sentimos, no se han encontrado resultados para su búsqueda."
          }

           return listingData.map((listing, index) => {

            return (  
           <div className="listing" key={index}>  
             <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
             <div className="details">
                <div className="agency-img"></div>
                   <div className="agency-details">
                     <span className="agency-name">{listing.agency}</span>
                     <span className="agency-date">{listing.date}</span>
                     <div className="view">View Listing</div>
                   </div>
               </div>
            </div>
            <div className="listing-details">
                      <div className="price">
                       {listing.price} / mes
                      </div>
                      <div className="location">
                        <i className="fa fa-map-marker" aria-hidden="true"></i> {listing.city}
                      </div>
                   </div>
              </div>
              )
           })
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
        <input type="text" name="search" onChange={this.props.change}/>
      </section>

      <section id="gallery-results">
    
            {this.loopListings()}
          
      </section>

      <section id="pagination">
         <ul className="pages">
             <li>Anterior</li>
             <li className="active">1</li>
             <li>2</li>
             <li>Siguiente</li>
         </ul>
      </section>

    </section>)
  }
}
