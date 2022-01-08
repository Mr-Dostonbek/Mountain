import React from 'react';
import './style.scss'

const Client = ({img}) => {
    return (
        <div className='client'>
            <img className='client_img' src={img} alt='client-img' />
        </div>
    );
}

export default Client;
