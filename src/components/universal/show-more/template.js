import style from './style'

const markup = `
  <slot name="preview"></slot>
  <slot name="rest"></slot>
  <slot name="toggle">
    <div class="toggle-button" id="updateable">
    </div>
  </slot>
`

let template = document.createElement('template')
template.innerHTML = style + markup

export default template
