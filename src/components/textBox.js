import React, { useState } from 'react'

export default function TextBox(props){
    const [text, setText] = useState()

    return(
        <div hidden={props.hidden}>
            <label>{props.label}</label>
            <input type="text" value={text} onChange={(event)=>{setText(event.target.value)}}></input>
        </div>
    );
}

