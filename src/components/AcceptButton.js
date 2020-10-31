import React from 'react';

function AcceptButton (props){

    return(
        <div>
            <button onClick={props.onClick}> {props.text} </button>
        </div>
    )
}
export { AcceptButton }