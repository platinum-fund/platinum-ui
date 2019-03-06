function toggleVisibility() {
  const isOpen = JSON.parse(this.getAttribute('open'))
  const rest = this.shadowRoot.querySelector('slot[name=rest]')

  rest.style.display = isOpen ? 'block' : 'none'
  this.toggleButton.style.display = isOpen ? 'none' : 'block'
}

export default toggleVisibility
