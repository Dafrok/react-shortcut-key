# react-shortcut-key
Shortcut key wrapper for react components.

## Demo

https://dafrok.github.io/react-shortcut-key/

## Install

```
npm install react-shortcut-key
```

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from 'react-shortcut-key'

// Define callback functions of shortcut key
const componentOnHello = e => alert('Hello! You pressed CTRL + Enter!')
const componentOnBye = e => alert('Bye. You pressed META + Esc.')

// Define shortcut key map.
const keymap = {
  'ctrl+enter': componentOnHello,
  'meta+esc': componentOnBye
}

// Any component which will use shortcut keys
class Component extends React.Component {
  render () {
    return <div>Press "CTRL + Enter" or "META + Esc" to alert messages.</div>
  }
}

// Inject the shortcut keys into the component
const ComponentWithHotkey = hotkey(keymap)(Component)

// render DOM
const rootNode = document.createElement('div')
document.body.appendChild(rootNode)
ReactDOM.render(<ComponentWithHotkey />, rootNode)
```

## License

[MIT License](https://github.com/Dafrok/react-shortcut-key/blob/master/LICENSE)
