function updateProgressBar() {
  const activeIndex = this.getAttribute('active-slide')
  const lastIndex = this.lastSlideIndex
  const progress = activeIndex === 0 ? '0' : (activeIndex / lastIndex) * 100

  const bar = this.shadowRoot.querySelector('.slider__progress')
  bar.style.width = progress + '%'
}

export default updateProgressBar
