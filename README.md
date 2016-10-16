# react-shortcut-key
Shortcut key wrapper for react components.

# Install

```
npm install react-shortcut-key
```

# Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from 'react-shortcut-key'

// Define callback functions of shortcut key
const componentOnOk = e => alert('Yay! You pressed CTRL + Enter!')
const componentOnCancel = e => alert('Oops. You pressed CTRL + Esc')

// Define shortcut key map.
const keymap = {
  ok: {
    keyCode: 13,
    ctrl: true,
    alt: false,
    shift: false,
    fn: componentOnOk
  },
  cancel: {
    keyCode: 27,
    ctrl: true,
    alt: false,
    fn: componentOnCancel
  }
}

// Any component which will use shortcut keys
class Component extends React.Component {
  render () {
    return <div>Press "CTRL + Enter" or "CTRL + Esc" to alert messages.</div>
  }
}

// Inject the shortcut keys into the component
const ComponentWithHotkey = hotkey(keymap)(Component)

// render DOM
const rootNode = document.createElement('div')
document.body.appendChild(rootNode)
ReactDOM.render(<ComponentWithHotkey />, rootNode)
```

# Options

- `keyCode:` The shortcut key code.
- `ctrl: true | false` Optional. Whether your callback function excutes by pressed the shortcut key and the 'CTRL' button down.
- `alt: true | false` Optional. Whether your callback function excutes by pressed the shortcut key and the 'ALT' button down.
- `shift: true | false` Optional. Whether your callback function excutes by pressed the shortcut key and the 'SHIFT' button down.
- `fn:` Callback function of the shortcut key.
