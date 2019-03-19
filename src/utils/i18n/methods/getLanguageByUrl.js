function getLanguageByUrl() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const urlString = window.location.href
  const url = new URL(urlString)
  const language = url.searchParams.get('lang') || 'en'

  return language
    .split('-')
    .map((word, index) =>
      index > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join('')
}

export default getLanguageByUrl
