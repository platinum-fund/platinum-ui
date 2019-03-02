import content from './content/index'

const itemMarkup = ({ href, image }) => `
	<a
	  class="card__item"
	  href="${href}"
	  target="_blank"
	>
	  <img
	    class="card__item-image"
	    src="${image}"
	    alt="media"
	  />
	</a>
`

const createMarkup = items => `
	<div class="card">
		${items.map(item => itemMarkup(item)).join('')}
	</div>
`

const markup = createMarkup(content)

export default markup
