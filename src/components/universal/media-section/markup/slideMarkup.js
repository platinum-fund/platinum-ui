import articlesMarkup from './articlesMarkup'

const slideMarkup = list => `
  <div slot="slide">
    <div slot="body">
      <div class="articles">
        ${articlesMarkup(list)}
      </div>
    </div>
  </div>
`

export default slideMarkup
