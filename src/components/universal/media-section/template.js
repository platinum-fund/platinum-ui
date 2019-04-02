import markup from './markup/index'
import style from './style'

let template = document.createElement('template')
template.innerHTML = markup + style

export default template
