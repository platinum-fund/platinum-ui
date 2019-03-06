import template from '../template'
import connectedCallback from './lifecycle/connectedCallback'
import disconnectedCallback from './lifecycle/disconnectedCallback'
import attributeChangedCallback from './lifecycle/attributeChangedCallback'
import removeEventListeners from './listeners/removeEventListeners'
import attachEventListeners from './listeners/attachEventListeners'
import toggle from './methods/toggle'
import toggleVisibility from './visual/toggleVisibility'

class ShowMore extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['open']
  }
}

ShowMore.prototype.toggleVisibility = toggleVisibility
ShowMore.prototype.toggle = toggle
ShowMore.prototype.attachEventListeners = attachEventListeners
ShowMore.prototype.removeEventListeners = removeEventListeners
ShowMore.prototype.attributeChangedCallback = attributeChangedCallback
ShowMore.prototype.connectedCallback = connectedCallback
ShowMore.prototype.disconnectedCallback = disconnectedCallback

export default ShowMore
