   
const api_url = 'http://api.quotable.io/random';
const  quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.querySelector('button');
 
  async function getquote (url){
    let response = await  fetch(url)
    let data = await response.json()
    console.log (data)
    quote.innerHTML=(data.content)
    author.innerHTML=( ' —' + '  '+data.author)

 }
 getquote(api_url)
 
