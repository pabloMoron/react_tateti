import React, { useState } from 'react'
import { Cell } from './cell.js'
import style from '../styles.module.css'

function Board() {
    let [moves, setMoves] = useState(0xb00000000);
    let [isMyTurn, setIsMuTurn] = useState(false);
    
    return (
            <div>
                <div className={style.row}>
                    <Cell id='0'></Cell>
                    <Cell id='1'></Cell>
                    <Cell id='2'></Cell>
                </div>
                <div className={style.row}>
                    <Cell id='3'></Cell>
                    <Cell id='4'></Cell>
                    <Cell id='5'></Cell>
                </div>
                <div className={style.row}>
                    <Cell id='6'></Cell>
                    <Cell id='7'></Cell>
                    <Cell id='8'></Cell>
                </div>
            </div>
    );
}
export { Board }