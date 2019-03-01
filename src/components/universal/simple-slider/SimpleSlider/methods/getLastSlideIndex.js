function getLastSlideIndex() {
  const slidesCount = this.slides.length
  return slidesCount ? slidesCount - 1 : 0
}

export default getLastSlideIndex
