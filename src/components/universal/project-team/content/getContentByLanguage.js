import content from './content'
import translations from './translations'

function getContentByLanguage(language) {
  const translation = translations[language] || {}
  const fallbackTranslation = translations['en']

  return content.map(item => {
    const role =
      translation[item.role] || fallbackTranslation[item.role] || item.role
    return {
      ...item,
      role
    }
  })
}

export default getContentByLanguage
