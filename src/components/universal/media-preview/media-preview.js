const style = `
	<style>
		:host {
			display: block;
		  flex-wrap: wrap;
		  justify-content: center;
		  align-items: center;
		  padding: 1.5em 0.7em;
		  font-size: 10px;
		  background: #fff;
		  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		  border-radius: 17px;
		}
  </style>
`

let template = document.createElement('template')
template.innerHTML = style

class MediaPreview extends HTMLElement {
	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'open' })
		shadow.appendChild(template.content.cloneNode(true))
	}
}

window.customElements.define('media-preview', MediaPreview)
