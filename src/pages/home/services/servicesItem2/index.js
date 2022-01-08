import React from 'react';
// import "./style.scss";
import Button from '../../main/button';

const ServicesItem2 = ({src, title, firstText, secondText, thirdText, fourText}) => {
    return (
        <div className='services_item'>
            <div className='row d-flex align-items-center'>
                <div className='col-12 col-lg-6'>
                    <img className='services_img w-100' src={src} alt='image' />
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='row'>
                        <div className='col'>
                            <h1>{title}</h1>
                            <div className='title_line'></div>
                            <p>{firstText}</p>
                            <p>{secondText}</p>
                            <p>{thirdText}</p>
                            <p>{fourText}</p>
                            <Button text="Portfolio" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesItem2;