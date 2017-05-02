import React from 'react'
import ReactDOM from 'react-dom'
import hotkey from '../../src/index.js'

const componentOnHello = e => alert('Hello! You pressed CTRL + Enter!')
const componentOnBye = e => alert('Bye! You pressed CTRL + Esc.')

const keymap = {
  'ctrl+enter': componentOnHello,
  'meta+esc': componentOnBye
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
  'ctrl+enter': componentOnHello
}`}
        </code>
      </pre>
      <h2>Press "META + Esc" to alert bye.</h2>
      <pre>
        <code>{
`const componentOnBye = e => alert('Bye! You pressed CTRL + Esc.')
const keymap = {
  'meta+esc': componentOnBye
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
