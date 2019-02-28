const markup = `
  <div class="slider">
    <slot name="slide">
      <div class="slider__header">
        <slot name="header"></slot>
      </div>
      <div class="slider__body">
        <slot name="body"></slot>
      </div>
    </slot>
    <header class="slider__navigation">
      <div class="slider__progress-wrapper">
        <div class="slider__progress"></div>
      </div>
      <div class="slider__arrows">
        <slot name="prev">
          <div class="slider__arrow-prev"></div>
        </slot>
        <slot name="next">
          <div class="slider__arrow-next"></div>
        </slot>
      </div>
    </header>
  </div>
`

export default markup
