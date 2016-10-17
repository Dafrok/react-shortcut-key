import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from '../../index.js'

const componentOnOk = e => alert('Yay! You pressed CTRL + Enter!')
const componentOnCancel = e => alert('Oops. You pressed CTRL + Esc.')

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

class Component extends React.Component {
  render () {
    return <div style={{textAlign: 'center', fontSize: 36}}>Press "CTRL + Enter" or "CTRL + Esc" to alert messages.</div>
  }
}

const ComponentWithHotkey = hotkey(keymap)(Component)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

ReactDOM.render(<ComponentWithHotkey />, rootNode)
