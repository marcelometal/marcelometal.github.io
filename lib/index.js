'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _search_bar = require('./components/search_bar');

var _search_bar2 = _interopRequireDefault(_search_bar);

var _politician_list = require('./components/politician_list');

var _politician_list2 = _interopRequireDefault(_politician_list);

var _filters = require('./components/filters');

var _filters2 = _interopRequireDefault(_filters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Marcelo Jorge Vieira <metal@alucinados.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This program is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * it under the terms of the GNU Affero General Public License as
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * published by the Free Software Foundation, either version 3 of the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, or (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GNU Affero General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You should have received a copy of the GNU Affero General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * along with this program. If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      politicians: [],
      selectedPoliticalParties: [],
      selectedPoliticalOffices: [],
      selectedEducations: [],
      selectedElections: [],
      selectedPoliticians: [],
      selectedCities: [],
      selectedStates: [],
      selectedElected: [],
      selectedGender: [],
      selectedOccupations: [],
      selectedMaritalStatus: [],
      query: ''
    };

    _this.URL = "http://politicos.olhoneles.org/api/v0";

    _this.onChange = function (state) {
      return _this.setState(state);
    };

    // FIXME: Iniial query
    _axios2.default.get(_this.URL + "/politicians/").then(function (result) {
      _this.onChange({
        politicians: result.data.objects
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_filters2.default, {
          onChange: this.onChange.bind(this),
          url: this.URL,
          politicians: this.state.politicians,
          selectedPoliticalParties: this.state.selectedPoliticalParties,
          selectedPoliticalOffices: this.state.selectedPoliticalOffices,
          selectedEducations: this.state.selectedEducations,
          selectedElections: this.state.selectedElections,
          selectedPoliticians: this.state.selectedPoliticians,
          selectedCities: this.state.selectedCities,
          selectedStates: this.state.selectedStates,
          selectedElected: this.state.selectedElected,
          selectedGender: this.state.selectedGender,
          selectedOccupations: this.state.selectedOccupations,
          selectedMaritalStatus: this.state.selectedMaritalStatus,
          query: this.state.query }),
        _react2.default.createElement(_politician_list2.default, { politicians: this.state.politicians })
      );
    }
  }]);

  return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('.main'));