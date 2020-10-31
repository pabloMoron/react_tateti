import React, { useState } from 'react'
import TextBox from './textBox'
import {AcceptButton} from './AcceptButton'
export default function Login(){
    const handleAccept=()=>{
        console.log("asd")
    
    }

    return(
        <div>
            <TextBox
                label="Jugador 1"></TextBox>
            <br></br>
            
            <AcceptButton text="Jugar!" onClick={handleAccept}></AcceptButton>

            <TextBox
                hidden={true}
                label="Jugador 2"></TextBox>
        </div>
    );
}