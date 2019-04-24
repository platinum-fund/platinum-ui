import getMarkupByLanguage from '../../updateableMarkup'

function updateMarkup() {
  const markup = this.shadow.getElementById('updateable')
  const language = this.getAttribute('language') || 'en'
  markup.innerHTML = getMarkupByLanguage(language)
}

export default updateMarkup
