import typeColors from "./poketypes.json"
import "./pokeTypes.css"

export function PokeTypes(props) {
  return (
    <ul id="type-list">
      {props.pokemonTypes.map(index => {
        const color = typeColors.find(type => type.name === index.type.name)
        return (
          <li
            key={props.pokemonTypes.slot}
            className="type"
            style={{ backgroundColor: color.backgroundColor }}
          >
            {index.type.name}
          </li>
        )
      })}
    </ul>
  )
}
