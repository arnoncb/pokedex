import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.css"

import { Pokedex } from "./components/Pokedex/Pokedex.jsx"

import { Provider } from "react-redux"

import store from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Pokedex />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
