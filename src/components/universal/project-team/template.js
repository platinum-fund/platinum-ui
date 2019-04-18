import style from './style'

const initialMarkup = `<div id="markup"></div>`

let template = document.createElement('template')
template.innerHTML = style + initialMarkup

export default template
