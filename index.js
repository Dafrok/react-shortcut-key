'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (keymap) {
  return function (Comp) {
    return function (_React$Component) {
      _inherits(ShortcutKey, _React$Component);

      function ShortcutKey(props) {
        _classCallCheck(this, ShortcutKey);

        var _this = _possibleConstructorReturn(this, (ShortcutKey.__proto__ || Object.getPrototypeOf(ShortcutKey)).call(this, props));

        _this.keyHandler = _this.keyHandler.bind(_this);
        _this.executeShortcut = _this.executeShortcut.bind(_this);
        return _this;
      }

      _createClass(ShortcutKey, [{
        key: 'executeShortcut',
        value: function executeShortcut(e) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var keyCode = options.keyCode;
          var fn = options.fn;
          var ctrl = options.ctrl;
          var alt = options.alt;
          var shift = options.shift;
          var stop = options.stop;
          var prevent = options.prevent;

          prevent && e.preventDefault();
          stop && e.stopPropagation();
          if (e.keyCode === keyCode && e.target.tagName === 'BODY' && (typeof ctrl !== 'undefined' ? ctrl ? e.ctrlKey : !e.ctrlKey : true) && (typeof alt !== 'undefined' ? alt ? e.altKey : !e.altKey : true) && (typeof shift !== 'undefined' ? shift ? e.shiftKey : !e.shiftKey : true)) {
            options.fn(e);
          }
        }
      }, {
        key: 'keyHandler',
        value: function keyHandler(e) {
          var _exec = this.executeShortcut.bind(this, e);
          for (var name in keymap) {
            _exec({
              keyCode: keymap[name].keyCode,
              fn: keymap[name].fn,
              ctrl: keymap[name].ctrl,
              alt: keymap[name].alt,
              shift: keymap[name].shift,
              prevent: keymap[name].prevent,
              stop: keymap[name].stop
            });
          }
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.addEventListener('keydown', this.keyHandler);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          document.removeEventListener('keydown', this.keyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Comp, this.props);
        }
      }]);

      return ShortcutKey;
    }(_react2.default.Component);
  };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
