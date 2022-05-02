import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response=>{
        console.log(response.data);
        setPokemonList(response.data.results);
        console.log(pokemonList);
      })
  }, [])
  return (
    <div className="App">
      <ul>
      {
        pokemonList.map( (pokemon,index) =>
          <li key={index}>
            {pokemon.name}
          </li>
        )
      }
      </ul>
    </div>
  );
}

export default App;