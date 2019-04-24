import translations from './translations'

function getStringByLanguage(key, language) {
  const translation = translations[language] || {}
  const fallbackTranslation = translations['en']

  return translation[key] || fallbackTranslation[key]
}

const getMarkupByLanguage = language => getStringByLanguage('seeMore', language)

export default getMarkupByLanguage
