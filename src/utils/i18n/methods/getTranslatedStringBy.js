function getTranslatedStringBy(key, defaultText, placeholders = {}) {
  const translations = this.translations[this.language] || {}
  let string = translations[key] || defaultText

  for (const placeholder of Object.keys(placeholders)) {
    string = string.replace(
      new RegExp('%' + placeholder + '%', 'g'),
      placeholders[placeholder]
    )
  }

  return string
}

export default getTranslatedStringBy
