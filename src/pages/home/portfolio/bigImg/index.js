import React from 'react';
import './style.scss';

const BigImg = ({ img, title, text }) => {
    return (
        <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
            <div className='big_img'>
                <img data-aos="fade-right" data-aos-duration="2000" className='portfolio_img_big' src={img} alt='image' />
                <div className='portfolio_content_big'>
                    <div className='content_text'>
                        <h1 data-aos="fade-right" data-aos-duration="2000">{title}</h1>
                        <p data-aos="fade-right" data-aos-duration="2000">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigImg;
