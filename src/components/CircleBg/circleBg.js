import React from 'react';
import './style.scss'

const CircleBg = ( props ) => {
    const { bg, wt, ht, top, right, left, dur } = props
    return (
        <div style={{ width: wt, height: ht, backgroundColor: bg, top: top, right: right, left: left, animationDuration: dur }} className='circle'>
            
        </div>
    );
}

export default CircleBg;
