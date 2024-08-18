let results = document.getElementById("qt-random");
let auther = document.getElementById("auther");
function generateQuote(){
fetch('https://type.fit/api/quotes/')
  .then(response => response.json())
  .then(data => {
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    results.innerHTML = `&ldquo; ${randomQuote.text}&quot;`;
    auther.innerHTML = `--- &star; ${randomQuote.author}`;
})
  .catch(error => console.error('Error:', error));
}