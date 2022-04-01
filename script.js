//using icanhazdadjoke API serves Jason data
//always check documentation for specific formats, etc.
//getpostman.com might be helpful
//we're going to use fetch - check MDN, can be your own API or standard JSON files

//fetch is built into browser

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//using async/await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    
    jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }
    //first response gets json, second gets actual data
    
