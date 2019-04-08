const style = `
  <style>  
    .articles {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    
    .articles .article {
      margin: 2.5em 1.5em;
    }
    
    .article {
      padding: 3.6em 2.6em 2.3em 3.3em;
      min-width: 30em;
      max-width: 90vw;
      width: calc(33% - 9em);
      background: #ffffff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
      border-radius: 34px;
      transition: border-color 0.3s, transform 0.3s;
    }

    .article:hover {
      border: 1px solid #ff6932;
      transform: scale(1.01);
    }
  
    .article__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3.8em;
      width: 100%;
    }
  
    .article__header-image {
      max-height: 3.4em;
    }
  
    .article__header-text {
      font-size: 1.3em;
      font-family: 'Poppins', inherit, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #354158;
    }
  
    .article__main {
      display: flex;
      flex-direction: column;
      margin-bottom: 2.7em;
      height: 20.2em;
    }
  
    .article__main-title {
      margin-top: 0;
      margin-bottom: 0.6em;
      max-width: 90%;
      font-size: 2.1em;
      font-family: 'Ubuntu', inherit, sans-serif;
      font-weight: 400;
      line-height: normal;
      color: #354158;
    }
  
    .article__main-text {
      margin-top: 0;
      margin-bottom: auto;
      max-width: 90%;
      font-family: 'Poppins', inherit, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      font-size: 1.3em;
      color: #354158;
    }
  
    .article__main-link {
      margin-bottom: 0;
      margin-top: 0.666em;
      text-decoration: none;
      font-size: 1.5em;
      font-family: 'Poppins', inherit, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #ff6932;
    }
  
    .article__footer {
      display: flex;
      align-items: center;
    }
  
    .article__footer-image {
      margin-right: 1.3em;
    }
  
    .article__footer-link {
      font-size: 1.1em;
      font-family: 'Poppins', inherit, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
    }
  </style>
`

export default style
