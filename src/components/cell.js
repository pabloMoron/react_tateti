import React, { useState } from "react"
import { useSelector } from 'react-redux';
import style from '../styles.module.css'


function Cell(props) {
    const [isMarked, setIsMarked] = useState(false);
    const mark = useSelector(state => state.currentMark)
    const rivalMark = useSelector(state=>state.currentRivalMark)
    return (
        <div>
            < button className={style.cell} onClick={() => { //Hay otra manera de hacer esto? -- es correcto pasar variables y funciones de este componente
                if(isMarked){
                    alert("Movimiento no válido!")
                    return
                }
                else{
                    props.onClick(props.id, isMarked, setIsMarked)
                }
            }}>
                {isMarked ? mark : ''}
            </button>
        </div>
    );
}

export { Cell };