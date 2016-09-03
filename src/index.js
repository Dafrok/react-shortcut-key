import React from 'react'

export default class ShortcutKey
 extends React.Component {
    constructor(props) {
        super(props)
    }
    executeShortcut (e, options = {}) {
        if (e.keyCode === options.keyCode
            && e.target.tagName === 'BODY'
            && (typeof options.ctrl !== 'undefined' ? options.ctrl ? e.ctrlKey : !e.ctrlKey : true)
            && (typeof options.alt !== 'undefined' ? options.alt ? e.altKey : !e.altKey : true)
            && (typeof options.shift !== 'undefined'? options.shift ? e.shiftKey : !e.shiftKey : true)) {
            options.prevent && e.preventDefault()
            options.stop && e.stopPropagation()
            options.fn()
        }
    }
    keyHandler = e => {
        const _exec = this.executeShortcut.bind(this, e)
        const keymap = this.props.keymap
        for (const name in this.props.keymap) {
            _exec({
                keyCode: keymap[name].keyCode,
                fn: keymap[name].fn,
                ctrl: keymap[name].ctrl,
                alt: keymap[name].alt,
                shift: keymap[name].shift,
                stop: keymap[name].stop,
                prevent: keymap[name].prevent
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
        return (<span>
            {this.props.children}
        </span>)
    }
}
