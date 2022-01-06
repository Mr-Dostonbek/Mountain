import React from 'react';
import './style.scss';


const SmallImg = ({ img, title, text }) => {
    return (
        <div className='col-6 mb-4'>
            <div className='small_img'>
                <img className='portfolio_img_small' src={img} alt='image' />
                <div className='portfolio_content_small'>
                    <div className='content_text'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallImg;
