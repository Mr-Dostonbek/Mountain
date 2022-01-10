import React from 'react';
import './style.scss'

const Client = ({img}) => {
    return (
        <div className='client'>
            <img data-aos="fade-right" data-aos-duration="2000" className='client_img' src={img} alt='client-img' />
        </div>
    );
}

export default Client;
