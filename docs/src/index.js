import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from '../../src/index.js'

const componentOnHello = e => alert('Hello! You pressed CTRL + Enter!')
const componentOnBye = e => alert('Bye! You pressed CTRL + Esc.')

const keymap = {
  hello: {
    key: 'enter',
    ctrl: true,
    alt: false,
    shift: false,
    fn: componentOnHello
  },
  bye: {
    keyCode: 27,
    meta: true,
    fn: componentOnBye
  }
}

class Component extends React.Component {
  render () {
    return <article>
      <h1>REACT-SHORTCUT-KEY</h1>
      <hr />
      <h2>Press "CTRL + Enter" to say hello.</h2>
      <pre>
        <code>{
`
const componentOnHello = e => alert('Hello! You pressed CTRL + Enter!')
const keymap = {
  ok: {
    keyCode: 13,
    ctrl: true,
    alt: false,
    shift: false,
    fn: componentOnHello
  }
}`}
        </code>
      </pre>
      <h2>Press "META + Esc" to alert bye.</h2>
      <pre>
        <code>{
`const componentOnBye = e => alert('Bye! You pressed CTRL + Esc.')
const keymap = {
  bye: {
    key: 'esc',
    meta: true,
    fn: componentOnBye
  }
}`}
        </code>
      </pre>
    </article>
  }
}

const ComponentWithHotkey = hotkey(keymap)(Component)

const rootNode = document.createElement('div')
document.body.appendChild(rootNode)

ReactDOM.render(<ComponentWithHotkey />, rootNode)
