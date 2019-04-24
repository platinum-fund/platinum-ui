import template from '../template'
import connectedCallback from './lifecycle/connectedCallback'
import disconnectedCallback from './lifecycle/disconnectedCallback'
import attributeChangedCallback from './lifecycle/attributeChangedCallback'
import removeEventListeners from './listeners/removeEventListeners'
import attachEventListeners from './listeners/attachEventListeners'
import toggle from './methods/toggle'
import toggleVisibility from './visual/toggleVisibility'
import updateMarkup from './methods/updateMarkup'

class ShowMore extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['open', 'language']
  }
}

ShowMore.prototype.toggleVisibility = toggleVisibility
ShowMore.prototype.updateMarkup = updateMarkup
ShowMore.prototype.toggle = toggle
ShowMore.prototype.attachEventListeners = attachEventListeners
ShowMore.prototype.removeEventListeners = removeEventListeners
ShowMore.prototype.attributeChangedCallback = attributeChangedCallback
ShowMore.prototype.connectedCallback = connectedCallback
ShowMore.prototype.disconnectedCallback = disconnectedCallback

export default ShowMore
