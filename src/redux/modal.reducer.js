export const TOGGLE = "MODAL/TOGGLE"

export const toggleModal = (modalOpen, pokeInfo) => {
  return {
    type: TOGGLE,
    visibility: modalOpen,
    payload: pokeInfo,
  }
}

const INITIAL_STATE = {
  modalOpen: false,
  pokeInfo: "",
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        modalOpen: !state.modalOpen,
        pokeInfo: action.payload,
      }

    default:
      return state
  }
}

export default reducer
