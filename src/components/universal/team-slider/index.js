import template from './template'

class TeamSlider extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('team-slider', TeamSlider)
