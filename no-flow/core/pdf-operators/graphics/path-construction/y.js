'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PDFOperator2 = require('../../PDFOperator');

var _PDFOperator3 = _interopRequireDefault(_PDFOperator2);

var _utils = require('../../../../utils');

var _validate = require('../../../../utils/validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable new-cap */


/**
Append a cubic Bézier curve to the current path. The curve shall extend from the
current point to the point (x3, y3), using (x1, y1) and (x3, y3) as the Bézier
control points. The new current point shall be (x3, y3).
*/
var y = function (_PDFOperator) {
  _inherits(y, _PDFOperator);

  function y(x1, y1, x3, y3) {
    _classCallCheck(this, y);

    var _this = _possibleConstructorReturn(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this));

    _initialiseProps.call(_this);

    (0, _validate.validateArr)([x1, y1, x3, y3], _validate.isNumber, 'y operator args "x1 y1 x3 y3" must all be numbers.');
    _this.x1 = x1;
    _this.y1 = y1;
    _this.x3 = x3;
    _this.y3 = y3;
    return _this;
  }

  return y;
}(_PDFOperator3.default);

y.of = function (x1, y1, x3, y3) {
  return new y(x1, y1, x3, y3);
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.toString = function () {
    return _this2.x1 + ' ' + _this2.y1 + ' ' + _this2.x3 + ' ' + _this2.y3 + ' y\n';
  };

  this.bytesSize = function () {
    return _this2.toString().length;
  };

  this.copyBytesInto = function (buffer) {
    return (0, _utils.addStringToBuffer)(_this2.toString(), buffer);
  };
};

exports.default = y;