
import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board.js'
import { Provider } from 'react-redux'
import { store } from './store/gameStore.js'
import { Game } from './components/game.js'
function App(){
    return(
        <div>
            <Game/>
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')

);