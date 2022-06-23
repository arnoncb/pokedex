import { Routes } from "../Routes"
import { useHistory } from "react-router-dom"

import "./pokedex.css"

import pokeLogo from "../../assets/poke-logo.png"
import pokeColors from "../../assets/poke-colors.png"
import pokeSeta from "../../assets/poke-seta.png"
import { CatIcon } from "../Icons/CatIcon"
import { FavIcon } from "../Icons/FavIcon"
import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { savePokemons } from "../../redux/pokemons.reducer"
import { InfoModal } from "../InfoModal/InfoModal"

export function Pokedex() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      )

      const pokemonRequestList = data.results.map(pokemon =>
        axios.get(pokemon.url)
      )

      const pokemons = (await Promise.all(pokemonRequestList)).map(pokemon => ({
        ...pokemon.data,
        image: `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/imagesHQ/${pokemon.data.id
          .toString()
          .padStart(3, "0")}.png`,
      }))

      dispatch(savePokemons(pokemons))
    }
    fetchPokemons()
  }, [dispatch])

  function navigateToFavorites() {
    history.push("/favoritos")
  }

  function navigateToPokemonList() {
    history.push("/")
  }

  function searchPokemon(value) {
    setSearchValue(value)
  }

  return (
    <div id="pokedex">
      <header>
        <img id="poke-logo" src={pokeLogo} alt="Logo" />
        <img id="poke-colors" src={pokeColors} alt="Cores" />
        <input
          className="search"
          onChange={event => searchPokemon(event.target.value)}
          value={searchValue}
          placeholder="Buscar"
        />
      </header>
      <main>
        <aside className="menu">
          <div>
            <button
              type="button"
              className="pokemons"
              onClick={navigateToPokemonList}
            >
              <CatIcon color="#DF4760" />
              Pokémons
            </button>
            <button
              type="button"
              className="favorites"
              onClick={navigateToFavorites}
            >
              <FavIcon color="#DF4760" />
              Favoritos
            </button>
          </div>
          <img id="poke-seta" src={pokeSeta} alt="Seta" />
        </aside>
        <Routes id="main-page" searchValue={searchValue} />
        <div id="border-right" />
        <InfoModal />
      </main>
    </div>
  )
}
