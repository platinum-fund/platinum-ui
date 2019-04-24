function attributeChangedCallback(attr, oldVal, newVal) {
  if (attr === 'open') {
    this.toggleVisibility()
  }

  if (attr === 'language') {
    this.updateMarkup()
  }
}

export default attributeChangedCallback
