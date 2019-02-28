function fireEventsDueAttributes() {
  const isFixedHeight = this.getAttribute('fixedHeight')
  if (isFixedHeight && isFixedHeight != 'false') {
    this.fixSlidesHeight()
  }
}

export default fireEventsDueAttributes
