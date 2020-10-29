
import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board.js'
import { Provider } from 'react-redux'
import { store } from './store/gameStore.js'
function App(){
    return(
        <div>
            <Board/>
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root')

);