const markup = `
  <div class="container">
    <slot name="preview"></slot>
    <slot name="rest"></slot>
    <slot name="toggle">
      <div class="container__button">
        see more
      </div>
    </slot>
  </div>
`

export default markup
