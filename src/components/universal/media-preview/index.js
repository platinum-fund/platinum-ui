import '@webcomponents/custom-elements'
import markup from './markup'
import style from './style'

let template = document.createElement('template')
template.innerHTML = markup + style

class MediaPreview extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('media-preview', MediaPreview)
