import React from 'react';
// import "./style.scss";
import Button from '../../main/button';
import { FaCheckSquare } from 'react-icons/fa';

const ServicesItem3 = ({src, title, checked,checked1,checked2, firstText, secondText, thirdText}) => {
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
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{color: '#16C60C', fontSize: '25px'}}/>
                                {checked}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{color: '#16C60C', fontSize: '25px'}}/>
                                {checked1}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{color: '#16C60C', fontSize: '25px'}}/>
                                {checked2}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">{secondText}</p>
                            <p data-aos="fade-right" data-aos-duration="2000">{thirdText}</p>
                            <Button text="Portfolio" bg="services-btn" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesItem3;
