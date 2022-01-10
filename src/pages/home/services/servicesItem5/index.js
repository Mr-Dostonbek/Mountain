import React from 'react';
// import "./style.scss";
import Button from '../../main/button';

const ServicesItem5 = ({src, title, firstText}) => {
    return (
        <div className='services_item'>
            <div className='row d-flex align-items-center'>
                <div className='col-12 col-lg-6'>
                    <img data-aos="fade-right" data-aos-duration="2000" className='services_img w-100' src={src} alt='image' />
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='row'>
                        <div className='col'>
                            <h1 data-aos="fade-right" data-aos-duration="2000">{title}</h1>
                            <div data-aos="fade-right" data-aos-duration="2000" className='title_line'></div>
                            <p data-aos="fade-right" data-aos-duration="2000">{firstText}</p>
                            <Button text="Portfolio" bg="services-btn" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesItem5;
