import React from 'react'
import './ColorBox.scss'


export default function ColorBox() {
    
    const [color,setColor] = React.useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deep-pink';
        return initColor;
    });

    function getRandomColor() {
        const COLOR_LIST = ['deeppink','yellow','green','orange','red'];
        const randomIndex = Math.trunc(Math.random() * COLOR_LIST.length);
        return COLOR_LIST[randomIndex];
    }

    const handleBoxClick = React.useCallback((e) => {
        
        //get random color -> set color
        const newColor = getRandomColor();
        setColor(newColor);
        
    },[])

    return (
        <div className="color-box" style={{backgroundColor:color}} onClick={handleBoxClick}>
            COLOR BOX
        </div>
    )
}

