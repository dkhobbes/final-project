'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var AbvComponent = function (_React$Component) {
    _inherits(AbvComponent, _React$Component);

    function AbvComponent() {
      _classCallCheck(this, AbvComponent);

      var _this = _possibleConstructorReturn(this, (AbvComponent.__proto__ || Object.getPrototypeOf(AbvComponent)).call(this));

      _this.state = {
        currentClass: 'nav-2',
        headerClass: 'nav-tabs',
        apiResult: { data: [] }
      };
      return _this;
    }

    _createClass(AbvComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AbvComponent.ComponentDidMount');
        // this.getTheData();
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt, query) {
        var _this2 = this;

        $.ajax({
          url: "/api/theabv/" + query
        }).done(function (data) {

          var dataAsObjects = JSON.parse(data);
          // console.log('got data', dataAsObjects);
          _this2.setState({
            apiResult: dataAsObjects,
            currentClass: query
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var theList;

        if (this.state != null) {
          console.log(this.state);
          console.log(this.state.apiResult);
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.data.map(function (abv, index) {
              return React.createElement(
                'li',
                { key: index },
                ' ',
                React.createElement('img', { src: abv.labels.medium, className: 'abvIbuImg' }),
                React.createElement(
                  'h2',
                  { className: 'beerImgText' },
                  'Abv:',
                  abv.abv
                ),
                React.createElement(
                  'h2',
                  { className: 'ellipses beerImgText', title: abv.name },
                  abv.name
                ),
                ' '
              );
            })
          );
        }

        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'Locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'ABV'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'IBU'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'abvIbu-bkgd' },
            React.createElement('div', { className: 'abv-img' }),
            React.createElement(
              'div',
              { className: 'ibu-content' },
              React.createElement(
                'section',
                null,
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "2,4" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "2,4");
                    } },
                  ' 2-4% abv'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "5,7" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "5,7");
                    } },
                  '5-7% abv'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "8,10" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "8,10");
                    } },
                  '8-10% abv'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "11,13" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "11,13");
                    } },
                  '11-13% abv'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "14,80" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "14,80");
                    } },
                  '14+% abv'
                )
              ),
              React.createElement('div', null),
              this.state.apiResult.data.length ? theList : React.createElement(
                'div',
                { className: 'abvIbu-content' },
                React.createElement(
                  'h2',
                  null,
                  'Welcome to the ABV page'
                ),
                React.createElement(
                  'h3',
                  null,
                  'ABV stands for alcohol by volume, and usually indicates how kick butt your beer is going to be. An average beer will be between 4-5% ABV. Select one of the tabs above to see beers within that range.'
                )
              )
            ),
            React.createElement('footer', null)
          )
        );
      }
    }]);

    return AbvComponent;
  }(React.Component);

  BeerRouter.AbvComponent = AbvComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var MapHistory = function (_React$Component) {
    _inherits(MapHistory, _React$Component);

    function MapHistory() {
      _classCallCheck(this, MapHistory);

      return _possibleConstructorReturn(this, (MapHistory.__proto__ || Object.getPrototypeOf(MapHistory)).apply(this, arguments));
    }

    _createClass(MapHistory, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log("sanity check");
        var myLatLng = { lat: 31.032936, lng: -99.9130348 };
        this.googleMap = new google.maps.Map(this.map, {
          center: myLatLng,
          scrollwheel: false,
          zoom: 7
        });
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: this.googleMap,
          title: 'Hello World!'
        });
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _this2 = this;

        console.log('willReceiveProps test', this.props);

        this.props.info.data.forEach(function (brewery) {
          console.log(brewery);
          var myLatLng = { lat: brewery.latitude, lng: brewery.longitude };
          console.log(myLatLng);
          console.log(_this2.googleMap);

          var marker = new google.maps.Marker({
            position: myLatLng,
            map: _this2.googleMap,
            title: 'Hello World!'
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement('div', { id: 'map', ref: function ref(map) {
            _this3.map = map;
          } });
      }
    }]);

    return MapHistory;
  }(React.Component);

  var HistoryComponent = function (_React$Component2) {
    _inherits(HistoryComponent, _React$Component2);

    function HistoryComponent() {
      _classCallCheck(this, HistoryComponent);

      var _this4 = _possibleConstructorReturn(this, (HistoryComponent.__proto__ || Object.getPrototypeOf(HistoryComponent)).call(this));

      _this4.state = { apiResult: {
          data: []
        }
      };

      return _this4;
    }

    _createClass(HistoryComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
        this.getTheData();
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt) {
        var _this5 = this;

        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/texas"
        }).done(function (data) {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          _this5.setState({
            apiResult: dataAsObjects
          });
        });
        // }
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'abv'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'ibu'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'history-bar' },
            React.createElement(
              'h1',
              { id: 'Title-beer' },
              'Texas Brewery History'
            ),
            React.createElement(
              'p',
              null,
              'Watch the history of Texas Breweries in front of you.'
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'runButton' },
              'Run History'
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'resetButton' },
              'Reset'
            )
          ),
          React.createElement(MapHistory, { info: this.state.apiResult }),
          React.createElement(
            'div',
            { className: 'example-2' },
            React.createElement(
              'p',
              null,
              'The beer brewing industry is a major economic driver in America. There are more than 2,800 breweries in the U.S. responsible for $246.5 billion in economic output in 2012 alone. Directly and indirectly, breweries create more than 2 million American jobs.',
              React.createElement('br', null),
              React.createElement(
                'span',
                null,
                'www.ceres.org/declaration/about/climate-declaration-campaigns/brewery'
              )
            )
          )
        );
      }
    }]);

    return HistoryComponent;
  }(React.Component);

  BeerRouter.HistoryComponent = HistoryComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var IbuComponent = function (_React$Component) {
    _inherits(IbuComponent, _React$Component);

    function IbuComponent() {
      _classCallCheck(this, IbuComponent);

      var _this = _possibleConstructorReturn(this, (IbuComponent.__proto__ || Object.getPrototypeOf(IbuComponent)).call(this));

      _this.state = {
        currentClass: 'nav-2',
        apiResult: { data: [] }
      };
      return _this;
    }

    _createClass(IbuComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('IbuComponent.ComponentDidMount');
        // this.getTheData();
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt, query) {
        var _this2 = this;

        $.ajax({
          url: "/api/theibu/" + query
        }).done(function (data) {

          var dataAsObjects = JSON.parse(data);
          // console.log('got data', dataAsObjects);

          _this2.setState({
            apiResult: dataAsObjects,
            currentClass: query
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.data.map(function (ibu, index) {
              return React.createElement(
                'li',
                { key: index },
                ' ',
                React.createElement('img', { src: ibu.labels.medium, className: 'abvIbuImg' }),
                React.createElement(
                  'h2',
                  { className: 'beerImgText' },
                  'Ibu:',
                  ibu.ibu
                ),
                React.createElement(
                  'h2',
                  { className: 'ellipses beerImgText', title: ibu.name },
                  ibu.name
                )
              );
            })
          );
        }

        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'Locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'ABV'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'IBU'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'abvIbu-bkgd' },
            React.createElement('div', { className: 'ibu-img' }),
            React.createElement(
              'div',
              { className: 'ibu-content' },
              React.createElement(
                'section',
                null,
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "10,19" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "10,19");
                    } },
                  '10-19 ibu'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "20,39" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "20,39");
                    } },
                  '20-39 ibu'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "40,70" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "40,70");
                    } },
                  '40-70 ibu'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "71,100" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "71,100");
                    } },
                  '71-100 ibu'
                ),
                React.createElement(
                  'div',
                  { className: this.state.currentClass === "101,250" ? "nav-2-on" : "nav-2", onClick: function onClick(evt) {
                      _this3.getTheData(evt, "101,250");
                    } },
                  '101+ ibu'
                )
              ),
              React.createElement('div', null),
              this.state.apiResult.data.length ? theList : React.createElement(
                'div',
                { className: 'abvIbu-content' },
                React.createElement(
                  'h2',
                  null,
                  'Welcome to the IBU page'
                ),
                React.createElement(
                  'h3',
                  null,
                  'IBU stands for International Bitterness Unit. Ibu usually relates to how hoppy a beer tastes. For instance a stout will usually have a low IBU and not have a very hoppy taste, while an IPA will usually have a high IBU and taste very hoppy. Most IPA beers usually fall into a range of 40-70 IBU. Select one of the tabs above to see beers within that range.'
                )
              )
            ),
            React.createElement('footer', null)
          )
        );
      }
    }]);

    return IbuComponent;
  }(React.Component);

  BeerRouter.IbuComponent = IbuComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var LandingPageComponent = function (_React$Component) {
    _inherits(LandingPageComponent, _React$Component);

    function LandingPageComponent() {
      _classCallCheck(this, LandingPageComponent);

      return _possibleConstructorReturn(this, (LandingPageComponent.__proto__ || Object.getPrototypeOf(LandingPageComponent)).call(this));
    }

    _createClass(LandingPageComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'Locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'ABV'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'IBU'
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'home-picture' },
            React.createElement(
              'div',
              { id: 'divs2center' },
              React.createElement(
                'div',
                { className: 'home-section', id: 'home-2' },
                React.createElement(
                  'h1',
                  null,
                  'Welcome to Beer Me Finder'
                ),
                React.createElement(
                  'p',
                  null,
                  'Enjoy this application devoted to the beer and breweries near you. You can look at the breweries in your area, or see what beer has the highest abv to kick your butt.'
                ),
                React.createElement(
                  ReactRouter.Link,
                  { to: '/locator' },
                  React.createElement(
                    'button',
                    { type: 'submit', className: 'learnButton' },
                    'Get Started'
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return LandingPageComponent;
  }(React.Component);

  BeerRouter.LandingPageComponent = LandingPageComponent;
})();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.BeerRouter === undefined) {
  window.BeerRouter = {};
}
(function () {
  var breweryId = []; //returned from the API
  var allLatlng = []; //returned from the API
  var allMarkers = []; //returned from the API
  var breweryName = []; //returned from the API
  var infowindow = null;
  var pos;
  var userCords;
  var tempMarkerHolder = [];
  var markers = [];

  var Map = function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map() {
      _classCallCheck(this, Map);

      return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log("sanity check");

        var myLatLng = { lat: 38.032936, lng: -97.9130348 };

        this.googleMap = new google.maps.Map(this.map, {
          center: myLatLng,
          zoom: 5
        });
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _this2 = this;

        console.log('willReceiveProps test', this.props);

        this.props.info.data.forEach(function (brewery) {
          console.log(brewery);
          var myLatLng = { lat: brewery.latitude, lng: brewery.longitude };
          console.log(myLatLng);
          console.log(_this2.googleMap);

          console.log('LOCALITY', brewery);

          var contentString = '<div className="content">' + '<h2 className="bolded">Brewery: ' + (brewery.brewery.name || '') + '</h2>' + '<h2 lassName="bolded">Brewery Type: ' + (brewery.locationTypeDisplay || '') + '</h2>' + '<h3>' + (brewery.locality || '') + ', ' + (brewery.region || '') + ' ' + (brewery.postalCode || '') + '</h3>' + (brewery.brewery.website ? '<a href= "' + brewery.brewery.website + '" target="_blank">' + brewery.brewery.website + '</a>' : '') + '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: myLatLng,
            map: _this2.googleMap,
            title: 'Beer Me Finder!'
          });

          allLatlng.push(myLatLng);

          marker.addListener('click', function () {
            infowindow.open(map, marker);
          });

          var bounds = new google.maps.LatLngBounds();
          for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
            bounds.extend(allLatlng[i]);
          }

          _this2.googleMap.fitBounds(bounds);
          console.log("bounds test", bounds);
          markers.push(marker);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        console.log('sanity check 2');
        return React.createElement('div', { id: 'map', ref: function ref(map) {
            _this3.map = map;
          } });
      }
    }]);

    return Map;
  }(React.Component);

  var BeerSampleComponent = function (_React$Component2) {
    _inherits(BeerSampleComponent, _React$Component2);

    function BeerSampleComponent() {
      _classCallCheck(this, BeerSampleComponent);

      var _this4 = _possibleConstructorReturn(this, (BeerSampleComponent.__proto__ || Object.getPrototypeOf(BeerSampleComponent)).call(this));

      _this4.state = { apiResult: { data: [] } };
      return _this4;
    }

    _createClass(BeerSampleComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt) {
        var _this5 = this;

        $.ajax({
          url: "/api/state/" + this.myInput.value
        }).done(function (data) {

          var dataAsObjects = JSON.parse(data);
          console.log('got data', dataAsObjects);

          _this5.setState({
            apiResult: dataAsObjects
          });
        });
      }
    }, {
      key: 'clearHandler',
      value: function clearHandler(evt) {
        function setMapOnAll(map) {
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
          }
        }

        function clearMarkers() {
          setMapOnAll(null);
        }

        clearMarkers();
        markers = [];
        allLatlng = [];
      }
    }, {
      key: 'keyUp',
      value: function keyUp(evt) {
        if (evt.keyCode === 13) {
          this.getTheData(evt.target.value);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this6 = this;

        console.log('render', this.state);
        var theList;

        if (this.state != null) {
          console.log(this.state);
          theList = React.createElement(
            'ul',
            { className: 'theList' },
            this.state.apiResult.data.map(function (brewery, index) {
              return React.createElement(
                'li',
                { key: index },
                ' (latitude: ',
                brewery.latitude,
                ') (longitude: ',
                brewery.longitude,
                ')'
              );
            }),
            ')}'
          );
        }

        return React.createElement(
          'div',
          null,
          React.createElement(
            'header',
            null,
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/' },
                'Home'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/locator' },
                'Locator'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/abv' },
                'ABV'
              )
            ),
            React.createElement(
              'div',
              { className: 'nav-tabs' },
              React.createElement(
                ReactRouter.Link,
                { to: '/ibu' },
                'IBU'
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'control' },
            React.createElement(
              'h2',
              { id: 'Title-beer' },
              'FIND LOCAL BREWERIES'
            ),
            React.createElement(
              'p',
              null,
              'Let us help you locate the breweries closest to you. Simply enter your state below to find your next beer.'
            ),
            React.createElement(
              'form',
              { method: 'get', id: 'chooseZip' },
              React.createElement(
                'div',
                { className: 'zipSearch' },
                React.createElement('input', { id: 'textZip', type: 'text', placeholder: 'enter state', onKeyUp: function onKeyUp(evt) {
                    _this6.keyUp(evt);
                  }, ref: function ref(input) {
                    _this6.myInput = input;
                  } }),
                React.createElement(
                  'button',
                  { type: 'submit', className: 'learnButton', onClick: function onClick(evt) {
                      _this6.getTheData(evt);
                    } },
                  'Search for State'
                ),
                React.createElement(
                  'button',
                  { type: 'submit', className: 'learnButton', onClick: function onClick(evt) {
                      _this6.clearHandler(evt);
                    } },
                  'Clear Results'
                )
              )
            )
          ),
          React.createElement(Map, { info: this.state.apiResult })
        );
      }
    }]);

    return BeerSampleComponent;
  }(React.Component);

  BeerRouter.BeerSampleComponent = BeerSampleComponent;
})();
"use strict";

if (window.BeerRouter === undefined) {
      window.BeerRouter = {};
}

(function () {
      var mountNode = document.querySelector('#react-root');

      var Router = ReactRouter.Router;
      var Route = ReactRouter.Route;
      var IndexRoute = ReactRouter.IndexRoute;

      var router = React.createElement(
            Router,
            { history: ReactRouter.hashHistory },
            React.createElement(Route, { path: "/", component: BeerRouter.LandingPageComponent }),
            React.createElement(Route, { path: "/locator", component: BeerRouter.BeerSampleComponent }),
            React.createElement(Route, { path: "/abv", component: BeerRouter.AbvComponent }),
            React.createElement(Route, { path: "/ibu", component: BeerRouter.IbuComponent }),
            React.createElement(Route, { path: "/history", component: BeerRouter.HistoryComponent })
      );

      ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=all.js.map
