function hideInactiveSlides() {
  const activeSlideIndex = this.getAttribute('active-slide')

  this.slides.map(slide => slide.setAttribute('aria-hidden', true))
  this.slides[activeSlideIndex].setAttribute('aria-hidden', false)
}

export default hideInactiveSlides
