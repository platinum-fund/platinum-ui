function attributeChangedCallback(attr, oldVal, newVal) {
  if (attr === 'active-slide' && this.slides) {
    this.hideInactiveSlides()
    this.updateProgressBar()
  }
}

export default attributeChangedCallback
