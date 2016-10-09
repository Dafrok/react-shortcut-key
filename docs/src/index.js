import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from '../../index.js'

const componentOnOk = () => alert('Yay!')
const componentOnCancel = () => alert('Oops.')

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
    return <span>Press Enter or Esc to alert messages.</span>
  }
}

const ComponentWithHotkey = hotkey(keymap)(Component)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

ReactDOM.render(<ComponentWithHotkey />, rootNode)
