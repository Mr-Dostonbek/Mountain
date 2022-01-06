import React from 'react';

const Button = ({bg, text}) => {
// const {bg, text} = props;
    return (
        <button className={`btn btn-${bg}`}>{text} <span className='arrow-right'>⟶</span></button>
    );
}

export default Button;
