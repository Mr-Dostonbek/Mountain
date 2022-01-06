import React from 'react';
import "./style.scss";
// import CheckBox from '@mui/icons-material/CheckBoxIcon';
import Button from '../../main/button';

const ServicesItem = ({src, title, checked, firstText, secondText, thirdText}) => {
    return (
        <div className='services_item'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img className='services_img' src={src} alt='image' />
                </div>
                <div className='col-12 col-lg-6'>
                    <div className='row'>
                        <div className='col'>
                            <h1>{title}</h1>
                            <div className='title_line'></div>
                            <p>{firstText}</p>
                            <span>
                                {/* <CheckBoxIcon /> */}
                                {checked}
                                </span>
                            <p>{secondText}</p>
                            <p>{thirdText}</p>
                            <Button text="Portfolio" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServicesItem;
