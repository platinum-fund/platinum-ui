function toggle(e) {
  e.preventDefault()
  const isOpen = this.getAttribute('open')
  this.setAttribute('open', !JSON.parse(isOpen))
}

export default toggle
