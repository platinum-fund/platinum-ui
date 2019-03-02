import content from './content/index'

const itemMarkup = ({ href, image }) => `
  <a
    class="share__item"
    href="${href}"
    target="_blank"
  >
    <img class="share__item-image" src="${image}" alt="share now">
  </a>
`

const createMarkup = items => `
  <div class="share">
		${items.map(item => itemMarkup(item)).join('')}
	</div>
`

const markup = createMarkup(content)

export default markup
