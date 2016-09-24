# react-shortcut-key
Hotkey wrapper for react.

# Install

```
npm install react-shortcut-key
```

# Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from 'react-shortcut-key'

const componentOnOk = () => console.log('Yay!')
const componentOnCancel = () => console.log('Oops.')

const keymap = {
  ok: {
    keyCode: 13,
    ctrl: true,
    alt: false,
    shift: false,
    stop: true,
    fn: onOk
  },
  cancel: {
    keyCode: 27,
    ctrl: true,
    alt: false,
    stop: true,
    fn: onCancel
  }
}

class Component extends React.Component {
  render () {
    return <span>Press Enter or Esc to log messages.</span>
  }
}

const ComponentWithHotkey = hotkey(keymap)(Component)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

ReactDOM.render(<ComponentWithHotkey />, rootNode)
```
