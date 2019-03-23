import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import template from './template'

class ProjectTeam extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('project-team', ProjectTeam)
