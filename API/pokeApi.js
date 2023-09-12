const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const numberOfPokemons = 20;

async function getPokemons() {
    try {
        const response = await fetch(`${baseUrl}?limit=${numberOfPokemons}`);
        if (!response.ok) {
            throw new Error(`There was an error trying to get the Pokemon list: ${response.status}`);
        }
        const data = await response.json();

        const pokemonUrls = data.results.map(pokemon => pokemon.url);

        const responses = await Promise.all(pokemonUrls.map(url => fetch(url)));
        const pokemonData = await Promise.all(responses.map(response => response.json()));

        console.log(pokemonData);
    } catch (err) {
        console.error(err);
    }
}

getPokemons();