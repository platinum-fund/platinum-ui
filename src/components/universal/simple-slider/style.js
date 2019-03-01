import arrow from './icons/arrow_black.svg'

const style = `
	<style>
    .slider {
      position: relative;
      width: 36.8rem;
      max-width: 90vw;
    }
  
    .slider__navigation {
      padding: 1rem;
      border-radius: 3px;
    }
  
    .slider__progress-wrapper {
      position: relative;
      margin-bottom: 1rem;
      width: 100%;
      height: 1px;
      background: rgba(0,0,0,0.25);
      border-radius: 0.5px;
    }
  
    .slider__progress {
      position: absolute;
      left: 0;
      height: 100%;
      width: 0;
      background: #000;
      border-radius: 0.5px;
      transition: width 0.2s;
    }
  
    .slider__arrows {
      display: flex;
      justify-content: flex-end;
    }
  
    .slider__arrow-prev,
    .slider__arrow-next {
      width: 2.9rem;
      height: 2.9rem;
      background: url(${arrow}) no-repeat center;
      background-size: contain;
      cursor: pointer;
    }
  
    .slider__arrow-prev {
      margin-right: 1.1rem;
    }
  
    .slider__arrow-next {
      transform: rotate(180deg);
    }
        
    slot[name=slide]::slotted([aria-hidden="true"]) {
      position: absolute;
      visibility: hidden;
    }
  </style>
`

export default style
