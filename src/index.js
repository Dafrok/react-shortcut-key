import React from 'react'

const codes = {
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
}
const aliases = {
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
}
for (i = 97; i < 123; i++) {
  codes[String.fromCharCode(i)] = i - 32
}
for (var i = 48; i < 58; i++) {
  codes[i - 48] = i
}
for (i = 1; i < 13; i++) {
  codes['f'+i] = i + 111
}
for (i = 0; i < 10; i++) {
  codes['numpad '+i] = i + 96
}

const getKeyCode = searchInput => {
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) {
      searchInput = hasKeyCode
    }
  }
  if ('number' === typeof searchInput) {
    return names[searchInput]
  }
  var search = String(searchInput)
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) {
    return foundNamedKey
  }
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) {
    return foundNamedKey
  }
  if (search.length === 1) {
    return search.charCodeAt(0)
  }
  return undefined
}

const getKeyMap = keymap => Object.keys(keymap).map(input => {
  const result = {}
  input.split('+').forEach(keyName => {
    switch (keyName.toLowerCase()) {
      case 'ctrl':
      case 'alt':
      case 'shift':
      case 'meta':
        result[keyName] = true
        break
      default:
        result.keyCode = getKeyCode(keyName)
    }
  })
  result.callback = keymap[input]
  return result
})

export default function (keymap) {
  return function (Comp) {
    return class ShortcutKey extends React.Component {
      constructor (props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.map = getKeyMap(keymap)
      }
      keyHandler (e) {
        for (const hotkey of this.map) {
          hotkey.keyCode === e.keyCode
            && !!hotkey.ctrl === e.ctrlKey
            && !!hotkey.alt === e.altKey
            && !!hotkey.shift === e.shiftKey
            && !!hotkey.meta === e.metaKey
            && hotkey.callback(e)
        }
      }
      componentDidMount () {
        document.addEventListener('keydown', this.keyHandler)
      }
      componentWillUnmount () {
        document.removeEventListener('keydown', this.keyHandler)
      }
      render () {
        return <Comp {...this.props}/>
      }
    }
  }
}
