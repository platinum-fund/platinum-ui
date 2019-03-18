import getLanguageByUrl from './methods/getLanguageByUrl'
import getTranslatedStringBy from './methods/getTranslatedStringBy'

class TranslationsProvider {
  constructor(translations, language) {
    this.language = language || 'en'
    this.translations = translations || {}
  }
}

TranslationsProvider.getLanguageByUrl = getLanguageByUrl
TranslationsProvider.prototype.getTranslatedStringBy = getTranslatedStringBy

export default TranslationsProvider
