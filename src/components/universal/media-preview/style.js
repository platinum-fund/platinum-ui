const style = `
	<style>
		.card {
			display: flex;
		  flex-wrap: wrap;
		  justify-content: center;
		  align-items: center;
		  padding: 1.5em 0.7em;
		  font-size: 10px;
		  background: #fff;
		  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		  border-radius: 17px;
		}
		
		.card__item {
		  display: block;
		  padding: 1em 0.6em;
		  filter: grayscale(100%);
		  opacity: 0.48;
		  transition: filter 0.1s, opacity 0.1s;
		}
  
		.card__item:hover {
		  filter: unset;
		  opacity: 1;
		}
    
		.card__item-image {
		  display: block;
		  max-width: 11.6em;
		  max-height: 2.8em;
		}
  </style>
`

export default style
