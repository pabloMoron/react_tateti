import React, { useState } from "react"
import { useSelector } from 'react-redux';
import style from '../styles.module.css'


function Cell(props) {
    const [isMarked, setIsMarked] = useState(false);
    const mark = useSelector(state => state.currentMark)
    
    return (
        <div>
            < button className={style.cell} onClick={() => {
                !isMarked 
                ? setIsMarked(true)
                : alert("Movimiento no válido");
                console.log(props.id)
            }}>
                {isMarked ? mark : ''}
            </button>
        </div>
    );
}

export { Cell };