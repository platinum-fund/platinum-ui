function getSlides() {
  const slidesBody = this.shadowRoot.querySelector('slot[name=slide]')
  return slidesBody.assignedNodes()
}

export default getSlides
