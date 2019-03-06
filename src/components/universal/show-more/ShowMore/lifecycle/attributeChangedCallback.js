function attributeChangedCallback(attr, oldVal, newVal) {
  if (attr === 'open') {
    this.toggleVisibility()
  }
}

export default attributeChangedCallback
