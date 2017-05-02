'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
          var key = options.key;
          var keyCode = options.keyCode;
          var fn = options.fn;
          var ctrl = options.ctrl;
          var alt = options.alt;
          var shift = options.shift;
          var meta = options.meta;

          if (e.keyCode === (getKeyCode(key) || keyCode) && e.target.tagName === 'BODY' && (typeof ctrl !== 'undefined' ? ctrl ? e.ctrlKey : !e.ctrlKey : true) && (typeof alt !== 'undefined' ? alt ? e.altKey : !e.altKey : true) && (typeof shift !== 'undefined' ? shift ? e.shiftKey : !e.shiftKey : true) && (typeof meta !== 'undefined' ? meta ? e.metaKey : !e.metaKey : true)) {
            fn(e);
          }
        }
      }, {
        key: 'keyHandler',
        value: function keyHandler(e) {
          var _exec = this.executeShortcut.bind(this, e);
          for (var name in keymap) {
            _exec({
              key: keymap[name].key,
              keyCode: keymap[name].keyCode,
              fn: keymap[name].fn,
              ctrl: keymap[name].ctrl,
              alt: keymap[name].alt,
              shift: keymap[name].shift,
              meta: keymap[name].meta
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

var codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};
var aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};
for (i = 97; i < 123; i++) {
  codes[String.fromCharCode(i)] = i - 32;
}
// numbers
for (var i = 48; i < 58; i++) {
  codes[i - 48] = i;
}
// function keys
for (i = 1; i < 13; i++) {
  codes['f' + i] = i + 111;
}
// numpad keys
for (i = 0; i < 10; i++) {
  codes['numpad ' + i] = i + 96;
}

var getKeyCode = function getKeyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === (typeof searchInput === 'undefined' ? 'undefined' : _typeof(searchInput))) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) {
      searchInput = hasKeyCode;
    }
  }
  // Numbers
  if ('number' === typeof searchInput) {
    return names[searchInput];
  }
  // Everything else (cast to string)
  var search = String(searchInput);
  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) {
    return foundNamedKey;
  }
  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) {
    return foundNamedKey;
  }
  // weird character?
  if (search.length === 1) {
    return search.charCodeAt(0);
  }
  return undefined;
};

const promise = new Promise(resolve => {
  const arr = [3,55,12,764,2,32,689,233]
  const result = []
  let k = 0
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      k++
      result.push(arr[i])
      if (k === arr.length - 1) {
        resolve(result)
      }
    }, arr[i])
  }
})

promise().then(data=>console.log(data))