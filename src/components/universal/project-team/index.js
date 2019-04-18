import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import template from './template'
import updateMarkup from './methods/updateMarkup'

class ProjectTeam extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['language']
  }

  connectedCallback() {
    this.updateMarkup()
  }

  attributeChangedCallback(name) {
    if (name === 'language') {
      this.updateMarkup()
    }
  }
}

ProjectTeam.prototype.updateMarkup = updateMarkup

window.customElements.define('project-team', ProjectTeam)
