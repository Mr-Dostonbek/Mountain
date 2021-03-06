import React from 'react';
import "./style.scss";
import Button from '../../main/button';
import { FaCheckSquare } from 'react-icons/fa';

const ServicesItem1 = ({ src, title, checked, checked1, checked2, checked3, checked4, checkBalans, firstText, secondText, thirdText, fourText }) => {
    return (
        <div className='services_item'>
            <div className='row d-flex align-items-center'>
                <div className='col-12 col-lg-6'>
                    <img className='services_img w-100' src={src} alt='image' />
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='row'>
                        <div className='col'>
                            <h1 data-aos="fade-right" data-aos-duration="2000">{title}</h1>
                            <div className='title_line'>
                                <img data-aos="fade-right" data-aos-duration="2000" src='/assets/img/form-line-img.svg' />
                            </div>
                            <p data-aos="fade-right" data-aos-duration="2000">{firstText}</p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{ color: '#16C60C', fontSize: '25px', display: "none", display: `${checkBalans} !important` }} />
                                {checked}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{ color: '#16C60C', fontSize: '25px' }} />
                                {checked1}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{ color: '#16C60C', fontSize: '25px' }} />
                                {checked2}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{ color: '#16C60C', fontSize: '25px' }} />
                                {checked3}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">
                                <FaCheckSquare style={{ color: '#16C60C', fontSize: '25px' }} />
                                {checked4}
                            </p>
                            <p data-aos="fade-right" data-aos-duration="2000">{secondText}</p>
                            <p data-aos="fade-right" data-aos-duration="2000">{thirdText}</p>
                            <p data-aos="fade-right" data-aos-duration="2000">{fourText}</p>
                            <Button text="Portfolio " bg="services-btn" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesItem1;
