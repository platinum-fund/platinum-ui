import template from '../template'
import connectedCallback from './lifecycle/connectedCallback'
import disconnectedCallback from './lifecycle/disconnectedCallback'
import attributeChangedCallback from './lifecycle/attributeChangedCallback'
import initAttributes from './initAttributes'
import getSlides from './methods/getSlides'
import getLastSlideIndex from './methods/getLastSlideIndex'
import removeEventListeners from './listeners/removeEventListeners'
import attachEventListeners from './listeners/attachEventListeners'
import nextSlide from './methods/nextSlide'
import prevSlide from './methods/prevSlide'
import setActiveSlideTo from './methods/setActiveSlideTo'
import hideInactiveSlides from './visual/hideInactiveSlides'
import fireEventsDueAttributes from './fireEventsDueAttributes'
import fixSlidesHeight from './visual/fixSlidesHeight'
import updateProgressBar from './visual/updateProgressBar'

class SimpleSlider extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['active-slide']
  }
}

SimpleSlider.prototype.updateProgressBar = updateProgressBar
SimpleSlider.prototype.fixSlidesHeight = fixSlidesHeight
SimpleSlider.prototype.hideInactiveSlides = hideInactiveSlides
SimpleSlider.prototype.setActiveSlideTo = setActiveSlideTo
SimpleSlider.prototype.prevSlide = prevSlide
SimpleSlider.prototype.nextSlide = nextSlide
SimpleSlider.prototype.attachEventListeners = attachEventListeners
SimpleSlider.prototype.removeEventListeners = removeEventListeners
SimpleSlider.prototype.getLastSlideIndex = getLastSlideIndex
SimpleSlider.prototype.getSlides = getSlides
SimpleSlider.prototype.fireEventsDueAttributes = fireEventsDueAttributes
SimpleSlider.prototype.initAttributes = initAttributes
SimpleSlider.prototype.attributeChangedCallback = attributeChangedCallback
SimpleSlider.prototype.connectedCallback = connectedCallback
SimpleSlider.prototype.disconnectedCallback = disconnectedCallback

export default SimpleSlider
