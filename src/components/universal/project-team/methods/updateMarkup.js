import getMarkupByLanguage from '../markup'
import LazyLoad from 'vanilla-lazyload'

function updateMarkup() {
  const markup = this.shadow.getElementById('markup')
  const language = this.getAttribute('language') || 'en'
  markup.innerHTML = getMarkupByLanguage(language)
  new LazyLoad({}, this.shadow.querySelectorAll('.js-lazy'))
}

export default updateMarkup
