function nextSlide(e) {
  e.preventDefault()
  const currentSlide = this.getAttribute('active-slide')
  this.setActiveSlideTo(+currentSlide + 1)
}

export default nextSlide
