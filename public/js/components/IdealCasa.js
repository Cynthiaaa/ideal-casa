webpackJsonp([0],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.cities = _this.cities.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormData.cities != undefined) {
        var cities = this.props.globalState.populateFormData.cities;


        console.log(cities);

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormData.homeTypes;


        console.log(homeTypes);

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormData.bedrooms;


        console.log(bedrooms);

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filters" },
        _react2.default.createElement(
          "h1",
          null,
          "Encuentra la casa de tus sue\xF1os"
        ),
        _react2.default.createElement(
          "h4",
          null,
          "Cuitad"
        ),
        _react2.default.createElement(
          "select",
          { name: "city", className: "city", onChange: this.props.change },
          _react2.default.createElement(
            "option",
            { value: "Todas" },
            "Todas"
          ),
          this.cities()
        ),
        _react2.default.createElement(
          "h4",
          null,
          " Tipo de inmueble"
        ),
        _react2.default.createElement(
          "select",
          { name: "homeType", className: "homeType", onChange: this.props.change },
          _react2.default.createElement(
            "option",
            { value: "Todos" },
            "Todos"
          ),
          this.homeTypes()
        ),
        _react2.default.createElement(
          "div",
          { name: "prices", className: "filter prices" },
          _react2.default.createElement(
            "h4",
            null,
            "Precio"
          ),
          _react2.default.createElement("input", { type: "text", name: "min_price", placeholder: "Min", className: "min_price", onChange: this.props.change, value: this.props.globalState.min_price }),
          _react2.default.createElement("input", { type: "text", name: "max_price", placeholder: "Max", className: "max_price", onChange: this.props.change, value: this.props.globalState.max_price })
        ),
        _react2.default.createElement(
          "div",
          { name: "surface", className: "filter surface" },
          _react2.default.createElement(
            "h4",
            null,
            "Tamano"
          ),
          _react2.default.createElement("input", { type: "text", name: "min_floor_space", placeholder: "Min", className: "min_floor_space", onChange: this.props.change, value: this.props.globalState.min_floor_space }),
          _react2.default.createElement("input", { type: "text", name: "max_floor_space", placeholder: "Max", className: "max_floor_space", onChange: this.props.change, value: this.props.globalState.max_floor_space })
        ),
        _react2.default.createElement(
          "div",
          { name: "bedrooms", className: "filter bedrooms" },
          _react2.default.createElement(
            "h4",
            null,
            "Habitaciones"
          ),
          _react2.default.createElement(
            "select",
            { name: "rooms", className: "rooms", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "Todas" },
              "Todas"
            ),
            this.bedrooms()
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Ideal Casa Barcelona"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Pon tu anuncio gratis"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Sobre nosotros"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "login-btn" },
            "Acesso usuarios"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listing = function (_Component) {
  _inherits(Listing, _Component);

  function Listing() {
    _classCallCheck(this, Listing);

    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this));

    _this.state = {};
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listing, [{
    key: "loopListings",
    value: function loopListings() {
      var listingData = this.props.listingData;


      if (listingData == undefined || listingData.length == 0) {
        return "Lo sentimos, no se han encontrado resultados para su búsqueda.";
      }

      return listingData.map(function (listing, index) {

        return _react2.default.createElement(
          "div",
          { className: "listing", key: index },
          _react2.default.createElement(
            "div",
            { className: "listing-img", style: { background: "url(\"" + listing.image + "\") no-repeat center center" } },
            _react2.default.createElement(
              "div",
              { className: "details" },
              _react2.default.createElement("div", { className: "agency-img" }),
              _react2.default.createElement(
                "div",
                { className: "agency-details" },
                _react2.default.createElement(
                  "span",
                  { className: "agency-name" },
                  listing.agency
                ),
                _react2.default.createElement(
                  "span",
                  { className: "agency-date" },
                  listing.date
                ),
                _react2.default.createElement(
                  "div",
                  { className: "view" },
                  "View Listing"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "listing-details" },
            _react2.default.createElement(
              "div",
              { className: "price" },
              listing.price,
              " / mes"
            ),
            _react2.default.createElement(
              "div",
              { className: "location" },
              _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
              " ",
              listing.city
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "span",
          { className: "listing-number" },
          "14.570 casas y pisos en alquiler en Barcelona"
        ),
        _react2.default.createElement(
          "section",
          { id: "search-box" },
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "span",
              { className: "sort-name" },
              "Ordenar :"
            ),
            _react2.default.createElement(
              "select",
              { className: "sort-by", name: "sort-by" },
              _react2.default.createElement(
                "option",
                { value: "relevance" },
                "Relevancia"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Baratos"
              ),
              _react2.default.createElement(
                "option",
                { value: "recent" },
                "Recientes"
              )
            )
          ),
          _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.change })
        ),
        _react2.default.createElement(
          "section",
          { id: "gallery-results" },
          this.loopListings()
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              null,
              "Anterior"
            ),
            _react2.default.createElement(
              "li",
              { className: "active" },
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "Siguiente"
            )
          )
        )
      );
    }
  }]);

  return Listing;
}(_react.Component);

exports.default = Listing;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingData = [{
    address: 'Carrer Barcelona 20',
    neighbourhood: "Barrio Garcia",
    city: 'L Hospitalet de Llobregat',
    agency: 'Rocio from Agencia Gaudi',
    date: 'Posted on 02/04/2019',
    rooms: 3,
    bathroom: 1,
    price: 1300,
    floorspace: 86,
    extras: ['ascensor', 'piscina'],
    homeType: 'Casa',
    equipment: 'Solo cocina equipada',
    image: 'https://i.pinimg.com/originals/50/ce/71/50ce7129b450475210f7808abe6aecfb.jpg'
}, {
    address: 'Carrer Balmes 120',
    neighbourhood: "Barrio Eixample",
    city: 'Barcelona',
    agency: 'Valerio from Agencia Sagrada',
    date: 'Posted on 28/03/2019',
    rooms: 1,
    bathroom: 3,
    price: 1800,
    floorspace: 40,
    extras: ['ascensor', 'terraza'],
    homeType: 'Apartamiento',
    equipment: 'Solo cocina equipada',
    image: 'https://i.pinimg.com/originals/ca/f5/07/caf50744c28e3f9ef79095aa84388148.jpg'
}, {
    address: 'Carrer de Gracia 234',
    neighbourhood: "Barrio Eixample",
    city: 'Sabadell',
    agency: 'Rocio from Agencia Gaudi',
    date: 'Posted on 25/03/2019',
    rooms: 0,
    bathroom: 1,
    price: 900,
    floorspace: 88,
    extras: ['piscina', 'duplex'],
    homeType: 'Casa',
    equipment: 'Amueblado',
    image: 'https://i.pinimg.com/originals/03/c6/63/03c663ecee5aa8fa032fdc630e9c4735.jpg'
}, {
    address: 'Carrer del Aeropuerto 318',
    neighbourhood: "Barrio Monjuic",
    city: 'El Prat de Llobregat',
    agency: 'Valerio from Agencia Sagrada',
    date: 'Posted on 21/03/2019',
    rooms: 4,
    bathroom: 2,
    price: 1100,
    floorspace: 64,
    extras: ['piscina', 'duplex'],
    homeType: 'Casa',
    equipment: 'Amueblado',
    image: 'https://static.dezeen.com/uploads/2018/08/high-desert-modern-deforest-architects-architecture-house-oregon-usa_dezeen_2364_hero-852x479.jpg'
}, {
    address: 'Carrer Balmes 120',
    neighbourhood: "Barrio Eixample",
    city: 'Barcelona',
    agency: 'Valerio from Agencia Sagrada',
    date: 'Posted on 28/03/2019',
    rooms: 2,
    bathroom: 1,
    price: 1800,
    floorspace: 40,
    extras: ['ascensor', 'terraza'],
    homeType: 'Apartamiento',
    equipment: 'Solo cocina equipada',
    image: 'https://www.impressiveinteriordesign.com/diverse/spanisharch/32270053591.jpg'
}, {
    address: 'Carrer de Gracia 234',
    neighbourhood: "Barrio Eixample",
    city: 'Sabadell',
    agency: 'Rocio from Agencia Gaudi',
    date: 'Posted on 25/03/2019',
    rooms: 2,
    bathroom: 3,
    price: 900,
    floorspace: 88,
    extras: ['piscina', 'duplex'],
    homeType: 'Casa',
    equipment: 'Amueblado',
    image: 'https://honka.com/wp-content/uploads/2018/02/moderni-hirsitalo-vista-keittio.jpg'
}, {
    address: 'Carrer del Aeropuerto 318',
    neighbourhood: "Barrio Monjuic",
    city: 'El Prat de Llobregat',
    agency: 'Valerio from Agencia Sagrada',
    date: 'Posted on 21/03/2019',
    rooms: 1,
    bathroom: 2,
    price: 1455,
    floorspace: 70,
    extras: ['piscina', 'duplex'],
    homeType: 'Casa',
    equipment: 'Amueblado',
    image: 'https://i.pinimg.com/originals/19/62/46/19624677c2cde98f3034352902214aeb.jpg'
}, {
    address: 'Carrer del Aeropuerto 318',
    neighbourhood: "Barrio Monjuic",
    city: 'El Prat de Llobregat',
    agency: 'Valerio from Agencia Sagrada',
    date: 'Posted on 21/03/2019',
    rooms: 1,
    bathroom: 2,
    price: 1455,
    floorspace: 70,
    extras: ['piscina', 'duplex'],
    homeType: 'Casa',
    equipment: 'Amueblado',
    image: 'https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2016/03/0316_realestate_modern01_gcoada_oneuseonly.jpg'
}];

exports.default = listingData;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(71);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(154);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(153);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(155);

var _Listings2 = _interopRequireDefault(_Listings);

var _ListingData = __webpack_require__(156);

var _ListingData2 = _interopRequireDefault(_ListingData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            listingData: _ListingData2.default,
            city: "Todas",
            homeType: "Todos",
            rooms: "Todas",
            min_price: 0,
            max_price: 10000,
            min_floor_space: 0,
            max_floor_space: 1000,
            filteredData: _ListingData2.default,
            search: '',
            populateFormData: ''
        };
        _this.change = _this.change.bind(_this);
        _this.filteredData = _this.filteredData.bind(_this);
        _this.populateForm = _this.populateForm.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.value;

            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
                _this2.filteredData();
            });
        }
    }, {
        key: 'filteredData',
        value: function filteredData() {
            var _this3 = this;

            var newData = this.state.listingData.filter(function (item) {
                return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorspace >= _this3.state.min_floor_space && item.floorspace <= _this3.state.max_floor_space;
            });

            if (this.state.city != "Todas") {
                newData = newData.filter(function (item) {
                    return item.city == _this3.state.city;
                });
            }

            if (this.state.homeType != "Todos") {
                newData = newData.filter(function (item) {
                    return item.homeType == _this3.state.homeType;
                });
            }

            if (this.state.rooms != "Todas") {
                newData = newData.filter(function (item) {
                    return item.rooms == _this3.state.rooms;
                });
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
            });
        }
    }, {
        key: 'populateForm',
        value: function populateForm() {
            var _this4 = this;

            var cities = this.state.listingData.map(function (item) {
                return item.city;
            });
            cities = new Set(cities);
            cities = [].concat(_toConsumableArray(cities));

            var homeTypes = this.state.listingData.map(function (item) {
                return item.homeType;
            });
            homeTypes = new Set(homeTypes);
            homeTypes = [].concat(_toConsumableArray(homeTypes));

            var bedrooms = this.state.listingData.map(function (item) {
                return item.rooms;
            });
            bedrooms = new Set(bedrooms);
            bedrooms = [].concat(_toConsumableArray(bedrooms));

            this.setState({
                populateFormData: {
                    homeTypes: homeTypes,
                    bedrooms: bedrooms,
                    cities: cities
                }
            }, function () {
                console.log(_this4.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content' },
                    _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForm }),
                    _react2.default.createElement(_Listings2.default, { listingData: this.state.filteredData })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[160]);