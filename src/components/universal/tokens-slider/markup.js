import '../simple-slider'
import tokenList from './content'

const tokenMarkup = ({ name, image, imageAlt }) => `
   <div class="token-list__item">
      <img
        class="token-list__image"
        src="${image}"
        alt="${imageAlt}"
      />
      <p class="token-list__name">${name}</p>
    </div>
`

const tokenListMarkup = list => `
  <div class="token-list">
    ${list.map(token => tokenMarkup(token)).join('')}
  </div>
`

const markup = `
  <simple-slider fixedHeight="true">
    <div slot="slide">
      <div slot="body">
        ${tokenListMarkup(tokenList.slice(0, 27))}
      </div>
    </div>
    <div slot="slide">
      <div slot="body">
        ${tokenListMarkup(tokenList.slice(27, 54))}
      </div>
    </div>
    <div slot="slide">
      <div slot="body">
        ${tokenListMarkup(tokenList.slice(54))}
      </div>
    </div>
  </simple-slider>
`

export default markup
