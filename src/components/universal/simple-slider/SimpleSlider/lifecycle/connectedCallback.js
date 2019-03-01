function connectedCallback() {
  this.attachEventListeners()
  this.initAttributes()
  this.slides = this.getSlides()
  this.lastSlideIndex = this.getLastSlideIndex()
  this.hideInactiveSlides()
  this.fireEventsDueAttributes()
}

export default connectedCallback
