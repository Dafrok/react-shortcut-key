import React from 'react'

export default function (keymap) {
  return function (Comp) {
    return class ShortcutKey extends React.Component {
      constructor (props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
        this.executeShortcut = this.executeShortcut.bind(this)
      }
      executeShortcut (e, options = {}) {
        const {keyCode, fn, ctrl, alt, shift, stop, prevent} = options
        if (e.keyCode === keyCode
          && e.target.tagName === 'BODY'
          && (typeof ctrl !== 'undefined' ? ctrl ? e.ctrlKey : !e.ctrlKey : true)
          && (typeof alt !== 'undefined' ? alt ? e.altKey : !e.altKey : true)
          && (typeof shift !== 'undefined'? shift ? e.shiftKey : !e.shiftKey : true)) {
          prevent && e.preventDefault()
          stop && e.stopPropagation()
          fn(e)
        }
      }
      keyHandler (e) {
        const _exec = this.executeShortcut.bind(this, e)
        for (const name in keymap) {
          _exec({
            keyCode: keymap[name].keyCode,
            fn: keymap[name].fn,
            ctrl: keymap[name].ctrl,
            alt: keymap[name].alt,
            shift: keymap[name].shift,
            prevent: keymap[name].prevent,
            stop: keymap[name].stop
          })
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
