import '../../simple-slider'
import articles from '../content'
import slidesMarkup from './slidesMarkup'

function getMarkupByScreenSize() {
  if (typeof window === 'undefined') {
    return slidesMarkup(articles, articles.length)
  }

  if (window.innerWidth > 1200) {
    return slidesMarkup(articles, 6)
  }

  if (window.innerWidth > 500) {
    return slidesMarkup(articles, 3)
  }

  return slidesMarkup(articles, 1)
}

const markup = `
  <simple-slider fixedHeight="true">
    ${getMarkupByScreenSize()}
  </simple-slider>
`

export default markup
