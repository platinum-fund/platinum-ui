function removeEventListeners() {
  this.prevButton.removeEventListener('click', this.prevSlide)
  this.nextButton.removeEventListener('click', this.nextSlide)
}

export default removeEventListeners
