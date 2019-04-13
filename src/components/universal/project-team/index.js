import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import LazyLoad from 'vanilla-lazyload'
import template from './template'

class ProjectTeam extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const elements = this.shadow.querySelectorAll('.js-lazy')
    new LazyLoad({}, elements)
  }
}

window.customElements.define('project-team', ProjectTeam)
