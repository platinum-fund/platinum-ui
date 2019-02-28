function attachEventListeners() {
  const shadow = this.shadowRoot
  this.prevButton = shadow.querySelector('slot[name=prev]')
  this.nextButton = shadow.querySelector('slot[name=next]')

  this.prevButton.addEventListener('click', e => {
    this.prevSlide(e)
  })
  this.nextButton.addEventListener('click', e => {
    this.nextSlide(e)
  })
}

export default attachEventListeners
