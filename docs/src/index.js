import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from '../../index.js'

const componentOnOk = () => alert('Yay! You pressed CTRL + Enter!')
const componentOnCancel = () => alert('Oops. You pressed CTRL + Esc')

const keymap = {
  ok: {
    keyCode: 13,
    ctrl: true,
    alt: false,
    shift: false,
    stop: true,
    fn: componentOnOk
  },
  cancel: {
    keyCode: 27,
    ctrl: true,
    alt: false,
    stop: true,
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
