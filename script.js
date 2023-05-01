const btnEl = document.getElementById('btn')
const apiKey = "RPynraXAurVeqSiZYd7IEw==DpAlonIvS5FV0Nm7";
const jokeEl = document.getElementById('joke');

const options = {
  method: 'GET',
  headers: {
    "X-Api-Key": apiKey,
  },
}

const baseUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'


const getJoke = async () => {
  try {
      jokeEl.innerText = "Updating....";
      btnEl.disabled = true;
      btnEl.innerText = "Loading....";
      const response = await fetch(baseUrl, options);
      const data = await response.json();
      btnEl.disabled = false;
      btnEl.innerText = "Tell me a joke";
      jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = 'An error occured, try again later';
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
}

}

btnEl.addEventListener('click', getJoke)
