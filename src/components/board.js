import React, { useState } from 'react'
import { Cell } from './cell.js'
import style from '../styles.module.css'

function Board(props) {
    let [myMoves, setMyMoves] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let [rivalMoves, setRivalMoves] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let [isMyTurn, setIsMyTurn] = useState(false);

    function handleCellClick(id, isMarked, setIsMarked) {


        if (isMyTurn) {
            alert('No es tu turno');
            return
        }
        myMoves[id] = 1;
        let newMoves = [1, 1, 1, 1, 1, 1, 1, 1, 1] && myMoves
        setMyMoves(newMoves)
        console.log(myMoves);
        setIsMyTurn(!isMyTurn)
        setIsMarked(!isMarked)
    }

    return (
        <div hidden={props.hidden}>
            <div className={style.row}>
                <Cell id='0' onClick={handleCellClick}></Cell>
                <Cell id='1' onClick={handleCellClick}></Cell>
                <Cell id='2' onClick={handleCellClick}></Cell>
            </div>
            <div className={style.row}>
                <Cell id='3' onClick={handleCellClick}></Cell>
                <Cell id='4' onClick={handleCellClick}></Cell>
                <Cell id='5' onClick={handleCellClick}></Cell>
            </div>
            <div className={style.row}>
                <Cell id='6' onClick={handleCellClick}></Cell>
                <Cell id='7' onClick={handleCellClick}></Cell>
                <Cell id='8' onClick={handleCellClick}></Cell>
            </div>
        </div>
    );
}
export { Board }