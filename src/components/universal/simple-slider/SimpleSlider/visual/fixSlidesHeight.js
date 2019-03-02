function fixSlidesHeight() {
  let maxHeight = this.slides[0].offsetHeight

  for (const slide of this.slides) {
    if (slide.offsetHeight > maxHeight) {
      maxHeight = slide.offsetHeight
    }
  }

  for (const slide of this.slides) {
    slide.style.minHeight = maxHeight + 'px'
  }
}

export default fixSlidesHeight
