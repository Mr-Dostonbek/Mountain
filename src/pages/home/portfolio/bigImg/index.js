import React from 'react';
import './style.scss';

const BigImg = ({ img, title, text }) => {
    return (
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
            <div className='big_img'>
                <img className='portfolio_img_big' src={img} alt='image' />
                <div className='portfolio_content_big'>
                    <div className='content_text'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigImg;
