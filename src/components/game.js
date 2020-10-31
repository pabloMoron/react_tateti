import React from "react";
import { Board } from "./board";
import Login from "./login";

function Game() {
    return (
        <div>
            <Login></Login>
            <br></br>
            <Board isMyTurn={false}
             //hidden={true}
             ></Board>
        </div>
    );
}
export { Game }