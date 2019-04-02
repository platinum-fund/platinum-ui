import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import template from './template'

class MediaSection extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('media-section', MediaSection)
