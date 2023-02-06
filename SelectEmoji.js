import React, { useState } from "react";
import './SelectEmoji.css'

function Selectemoji () {

    const [emoji, setEmoji] = useState("😊️");

    const emojies = ["🙂️", "😊️","😎️","😵‍💫️"];
    const options = emojies.map((emo)=>{
        return <option key={emojies.indexOf(emo)} value={emo}>{emo}</option>
    })

    const handleEmoji= (event) => {
        setEmoji(event.target.value)
    }

    return (
        <div className="emoji__today">
            <select className="emoji__select" onChange={handleEmoji}>{options}{emoji}</select>
            {/* {emoji} 안넣어도 되는데 안쓰임 에러 떠서 넣어놓음(차이 없음) */}
        </div>
    )
}

export default Selectemoji;