'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PoliticianDetail = function PoliticianDetail(_ref) {
  var politician = _ref.politician;

  if (!politician || politician.length <= 0) {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }

  var alternativeNames = politician.alternative_names.map(function (item) {
    return item.name;
  });

  var politicalParties = politician.political_parties.map(function (item) {
    return item.political_party.siglum;
  });

  var picture = '';
  if (!politician.picture) {
    picture = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' }),
      'Sem Foto'
    );
  } else {
    picture = _react2.default.createElement('img', { src: politician.picture, className: 'politician-picture' });
  }

  return _react2.default.createElement(
    'div',
    { className: '' },
    _react2.default.createElement(
      'div',
      { className: 'col-lg-4' },
      picture
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-lg-8' },
      _react2.default.createElement(
        'div',
        { className: 'politician-name' },
        politician.name
      ),
      _react2.default.createElement(
        'div',
        { className: 'details' },
        _react2.default.createElement(
          'p',
          null,
          'Sexo: ',
          politician.gender == 'M' ? 'Masculino' : 'Feminino'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Nacionalidade: ',
          politician.nationality.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Partido: ',
          politicalParties
        ),
        _react2.default.createElement(
          'p',
          null,
          'Estado civil: ',
          politician.marital_status.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Ocupação: ',
          politician.occupation.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Escolaridade: ',
          politician.education.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Data de nascimento: ',
          politician.date_of_birth
        ),
        _react2.default.createElement(
          'p',
          null,
          'Nacionalidade: ',
          politician.nationality.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Naturalidade: ',
          politician.place_of_birth,
          '/',
          politician.state ? politician.state.name : null
        ),
        _react2.default.createElement(
          'p',
          null,
          'Nomes Alternativos: ',
          alternativeNames
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cor/Raça: ',
          politician.ethnicity ? politician.ethnicity.name : null
        ),
        _react2.default.createElement(
          'p',
          null,
          'Email: ',
          politician.email
        ),
        _react2.default.createElement(
          'p',
          null,
          'Website: ',
          politician.website
        )
      )
    )
  );
}; /*
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

exports.default = PoliticianDetail;