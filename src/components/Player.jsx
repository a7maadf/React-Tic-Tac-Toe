import {useState} from "react";


export default function Player({intialName, symbol, activePlayer}) {
    const [isEditing, setIsEditing] = useState(false);
    const [theName, setName] = useState(intialName);


    function handleChamge() {

    }


    return (<li className={activePlayer ? 'active' : undefined}>
                        <span className="player">
                            {!isEditing ? <span className="player-name">{theName}</span> :
                                <input type="text" required value={theName}
                                       onChange={(event) => setName(event.target.value)}>

                                </input>}
                            <span className="player-symbol">{symbol}</span>
                            </span>
        <button onClick={() => setIsEditing(() => !isEditing)}>{!isEditing ? "Edit" : "Save"}</button>
    </li>)
}