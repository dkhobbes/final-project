'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

window.BeerRouter = window.BeerRouter || {};
(function () {
  var AbvComponent = function (_React$Component) {
    _inherits(AbvComponent, _React$Component);

    function AbvComponent() {
      _classCallCheck(this, AbvComponent);

      return _possibleConstructorReturn(this, (AbvComponent.__proto__ || Object.getPrototypeOf(AbvComponent)).call(this));
    }

    _createClass(AbvComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('AppComponent.ComponentDidMount');
      }
    }, {
      key: 'getTheData',
      value: function getTheData(evt) {
        var _this2 = this;

        // if (evt.keyCode === 13) {
        $.ajax({
          url: "/api/abv"
        }).done(function (data) {
          console.log('got data');

          var dataAsObjects = JSON.parse(data);

          _this2.setState({
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
            'p',
            null,
            'test'
          )
        );
      }
    }]);

    return AbvComponent;
  }(React.Component);

  BeerRouter.AbvComponent = AbvComponent;
})();
//# sourceMappingURL=abv.js.map
