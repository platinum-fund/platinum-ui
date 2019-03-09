function attachEventListeners() {
  const shadow = this.shadowRoot
  this.toggleButton = shadow.querySelector('slot[name=toggle]')

  this.toggleButton.addEventListener('click', e => {
    this.toggle(e)
  })
}

export default attachEventListeners
