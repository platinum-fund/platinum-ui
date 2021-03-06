import '../show-more'
import getContentByLanguage from './content/getContentByLanguage'
import socialIcons from './icons/socials'
import flagIcons from './icons/flags'

const contact = (name, link) => `
  <a
    class="member__contact"
    href=${link}
    target="_blank"
  >
    <img class="member__contact-icon" src=${socialIcons[name]} alt=${name}>
  </a>
`

const teamMember = ({ name, role, photo, contacts, country }) => `
  <div class="member">
    <img 
      class="member__photo js-lazy" 
      data-src=${photo} 
      alt="${name} photo"
    >
    <h6 class="member__name">${name}</h6>
    <p class="member__position">${role}</p>
    <div class="member__footer">
      <div class="member__contacts">
        ${Object.keys(contacts)
          .map(key => contact(key, contacts[key]))
          .join('')}
      </div>
      <div class="member__country-flag">
        <img 
          class="member__country-flag-icon" 
          src=${flagIcons[country.toLowerCase()]} 
          title=${country}
        />
      </div>
    </div>
  </div>
`

const team = list => `
  <div class="team">
    ${list.map(member => teamMember(member)).join('')}
  </div>
`

const getMarkupByLanguage = language => {
  const teamList = getContentByLanguage(language)
  return `
    <show-more language="${language}">
      <div slot="preview">
        ${team(teamList.slice(0, 12))}
      </div>
      <div slot="rest">
        ${team(teamList.slice(12))}
      </div>
    </show-more>
  `
}

export default getMarkupByLanguage
