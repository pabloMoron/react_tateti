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
    currentRival: '',
    
    currentMark: 'X',
    currentRivalMark: 'O'
}


function propsReducer(state, action) {

    return Object.assign({}, state=initialState, {
        currentPlayer: (action.player !== undefined)? action.player : state.currentPlayer,
        currentRival: (action.rival !== undefined)? action.rival : state.currentRival,
        
        currentMark: (action.mark !== undefined)? action.mark : state.currentMark,
        currentRival: (action.rivalMark!==undefined)? action.rivalMark : state.currentRivalMark
    })
}



const store = createStore(propsReducer);
export { store, dispatchProps }