import React from 'react'
import { useState } from 'react';
import "./dropdown.scss"

const Dropdown = ({drInfo,setDrInfo,placeHolder,drIcon}) => {
    const [isOpenDest, setIsOpenDest] = useState(false);
    
    const destinationClick = () => setIsOpenDest(!isOpenDest);
    const destinationChange = (e,skill) => {
        const itemsCopy = [...drInfo];
        const foundItem = drInfo?.find((s) => s.name === skill);
        if(!foundItem) { return; }
        foundItem.isChecked = e.currentTarget.checked;
        setDrInfo(itemsCopy);
        
    };
    return (
        <div className="dropdown">
            <button onClick={destinationClick}>
                {drIcon}
                {drInfo.some((s) => s.isChecked) ? (
                    drInfo.filter((s) => s.isChecked).map((s, i) => (
                        <span key={i}>{i !== 0 && ","}{s.name}</span>
                    ))
                ) : (
                    <span className="placeholder">
                        {placeHolder}
                    </span>
                )}
            </button>
            <div className={`menu ${isOpenDest ? "open" : ""}`}>
                {drInfo.map((item) => (
                    <label key={item.name}>
                        <input
                            type="checkbox"
                            onClick={(e) => destinationChange(e, item.name)}
                        />
                        <span>{item.name}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default Dropdown