import websiteIcon from '../icons/website.svg'

const articleMarkup = ({ date, image, title, text, source, sourcePage }) => `
   <div class="article">
    <div class="article__header">
      <img class="article__header-image" src="${image}" />
      <p class="article__header-text">${date}</p>
    </div>
    <div class="article__main">
      <h4 class="article__main-title">${title}</h4>
      <p class="article__main-text">${text}</p>
      <a class="article__main-link" href=${sourcePage} target="_blank">
        Read more &#x203A;
      </a>
    </div>
    <div class="article__footer">
      <img
        class="article__footer-image"
        src="${websiteIcon}"
        alt="website link"
      />
      <a class="article__footer-link" href=${source} target="_blank">
        ${source}
      </a>
    </div>
  </div>
`

export default articleMarkup
