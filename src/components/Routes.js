import { Switch, Route } from "react-router-dom"

import { Content } from "./Content/Content.jsx"
import { Favorites } from "./Favorites/Favorites.jsx"

export function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Content searchValue={props.searchValue} />
      </Route>
      <Route path="/favoritos" component={Favorites} />
    </Switch>
  )
}
