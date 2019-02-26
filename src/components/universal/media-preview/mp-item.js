const style = `
	<style>
		:host {
			display: block;
			padding: 1em 0.7em;
		  filter: grayscale(100%);
		  opacity: 0.48;
		  transition: filter 0.1s, opacity 0.1s;
		}
	
	  :host(:hover) {
	    filter: unset;
	    opacity: 1;
	  }
	  
	  .card__item-image {
		  display: block;
	    max-width: 11.6em;
	    max-height: 2.8em;
	  }
  </style>
`

let template = document.createElement('template')

template.innerHTML = style

const item = document.createElement('a')

const image = document.createElement('img')
item.innerHTML = `
	<style>
		:host {
			display: block;
	    max-width: 11.6em;
	    max-height: 2.8em;
    }
	</style>
`

class MPItem extends HTMLElement {
	connectedCallback() {
		const shadow = this.attachShadow({ mode: 'open' })

		item.href = this.getAttribute('href')
		image.src = this.getAttribute('src')

		item.appendChild(image)
		template.appendChild(item)

		console.log(template)

		shadow.appendChild(template)
	}
}

window.customElements.define('mp-item', MPItem)
