'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _politician_list_item = require('./politician_list_item');

var _politician_list_item2 = _interopRequireDefault(_politician_list_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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

var PoliticianList = function PoliticianList(props) {
  var politicianItems = props.politicians.map(function (politician) {
    return _react2.default.createElement(_politician_list_item2.default, {
      onPoliticianSelect: props.onPoliticianSelect,
      key: politician.id,
      politician: politician });
  });

  return _react2.default.createElement(
    'ul',
    { className: 'col-lg-12 list-group politicians' },
    politicianItems
  );
};

exports.default = PoliticianList;