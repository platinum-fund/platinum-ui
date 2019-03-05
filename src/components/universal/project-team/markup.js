import teamList from './content'
import socialIcons from './icons/socials'
import flagIcons from './icons/flags'

import examplePhoto from './content/photos/example.jpg'

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
    <img class="member__photo" src=${examplePhoto} alt="member photo">
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

const markup = `
  ${team(teamList)}
`

export default markup
