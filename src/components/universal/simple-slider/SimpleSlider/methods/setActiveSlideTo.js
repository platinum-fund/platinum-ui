function setActiveSlideTo(index) {
  let nextValue = index
  if (index > this.lastSlideIndex) {
    nextValue = 0
  } else if (index < 0) {
    nextValue = this.lastSlideIndex
  }
  this.setAttribute('active-slide', nextValue)
}

export default setActiveSlideTo
