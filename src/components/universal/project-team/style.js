const style = `
  <style>     
    .team {
      display: flex;
      flex-wrap: wrap;
    }
    
    .team .member {
      margin: 1.2em;
    }
    
    .member {
      display: flex;
      flex-direction: column;
      align-content: center;
      padding: 1.8em 2em 1em;
      width: 25em;
      height: 33em;
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 34px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  
    .member__photo {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2.9em;
      width: 17em;
      height: 17em;
      border-radius: 50%;
    }
    
    .member__name {
      margin: 0;
      margin-bottom: 0.33em;
      font-family: 'Ubuntu', inherit;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      font-size: 1.5em;
      text-align: center;
      color: #354158;
    }
    
    .member__position {
      margin: 0;
      margin-bottom: auto;
      font-family: 'Poppins', inherit;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      font-size: 1.5em;
      text-align: center;
      color: #000000;
      opacity: 0.4;
    }
    
    .member__footer {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .member__contacts {
      display: flex;
      align-content: center;
      justify-content: center;
    }
    
    .member__contact {
      margin: 1em;
      opacity: 0.4;
      transition: 0.2s;
    }
    
    .member:hover .member__contact {
      opacity: 1;
    }
    
    .member__contact-icon {
      height: 2.1em;
    }
    
    .member__country-flag {
      opacity: 0.4;
      transition: 0.2s;
    }
    
    .member:hover .member__country-flag {
      opacity: 1;
    }
       
    .member__country-flag-icon {
      margin: 1em;
      height: 2.1em;
      width: 3em;
      object-fit: contain;
      opacity: 1;
    }
  </style>
`

export default style
