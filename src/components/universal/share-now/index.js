import markup from './markup'
import style from './style'

let template = document.createElement('template')
template.innerHTML = markup + style

class ShareNow extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('share-now', ShareNow)
