function connectedCallback() {
  this.updateMarkup()
  this.attachEventListeners()
  this.setAttribute('open', false)
}

export default connectedCallback
