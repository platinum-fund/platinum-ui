import articleMarkup from './articleMarkup'

const articlesMarkup = list => {
  return list.map(article => articleMarkup(article)).join('')
}

export default articlesMarkup
