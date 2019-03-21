const supportedLanguages = ['en', 'ja', 'ko', 'zh']

function getBySearchParam(url) {
  return url.searchParams.get('lang')
}

function getByPathname(url) {
  const paths = url.pathname.split('/')
  return paths.find(path => supportedLanguages.includes(path))
}

function getLanguageByUrl() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const urlString = window.location.href
  const url = new URL(urlString)

  const language = getBySearchParam(url) || getByPathname(url) || 'en'
  return language.toLowerCase()
}

export default getLanguageByUrl
