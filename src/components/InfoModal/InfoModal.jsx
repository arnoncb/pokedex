import { ModalContainer } from "../Modal/Modal"
import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "../../redux/modal.reducer"
import { PokeTypes } from "../PokeTypes/PokeTypes"

import "./infoModal.css"

// const pokemonsURL = "https://pokeapi.co/api/v2/pokemon"
// const pokemonsImage = "https://pokeres.bastionbot.org/images/pokemon"

export function InfoModal() {
  const dispatch = useDispatch()
  const { modalOpen, pokeInfo } = useSelector(state => state.modal)
  const { pokemons } = useSelector(state => state.pokemon)

  const displayedPokemon = pokemons.find(pokemon => pokemon.id === pokeInfo)

  if (!displayedPokemon) return null

  const pokemonAbilities = displayedPokemon.abilities.map(
    index => index.ability.name
  )

  return (
    <div>
      <ModalContainer
        open={modalOpen}
        handleClose={() => dispatch(toggleModal())}
      >
        <div className="pokemon-info">
          <div className="text">
            <h1>{displayedPokemon.name}</h1>
            <ul id="abilities">
              <h3>Habilidades</h3>
              {pokemonAbilities.map(ability => {
                return <li key={ability.slot}>{ability}</li>
              })}
            </ul>
            <h3>Tipos</h3>
            <PokeTypes pokemonTypes={displayedPokemon.types} />
          </div>
          <img
            className="poke-sprite"
            src={displayedPokemon.image}
            alt="Imagem do Pokémon"
          />
        </div>
      </ModalContainer>
    </div>
  )
}
