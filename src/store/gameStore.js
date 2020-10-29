import { createStore } from 'redux'

function dispatchProps(player) {
    store.dispatch(
        {
            type: "",
            player: player
        }
    )
}

/**
 * Estado inicial del store.
 * Como todo es undefined inicialmente en esta app, puedo obviarlo.
 */

const initialState={
    currentPlayer: '',
    currentMark: 'X'
}


function propsReducer(state, action) {

    return Object.assign({}, state=initialState, {
        currentPlayer: (action.player !== undefined)? action.player : state.currentPlayer,
        currentMark: (action.mark !== undefined)? action.mark : state.currentMark
    })
}



const store = createStore(propsReducer);
export { store, dispatchProps }