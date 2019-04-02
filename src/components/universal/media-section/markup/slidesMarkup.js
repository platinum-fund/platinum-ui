import slideMarkup from './slideMarkup'

const slidesMarkup = (list, step) => {
  let markup = ''

  for (let i = 0; i < list.length; i += step) {
    markup += slideMarkup(list.slice(i, i + step))
  }

  return markup
}

export default slidesMarkup
