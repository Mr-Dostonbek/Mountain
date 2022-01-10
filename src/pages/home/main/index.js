import React from 'react';
import Typewriter from 'typewriter-effect';
import './style.scss'
import Button from './button';

const Main = () => {
    return (
        <div className='main_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1 data-aos="fade-right" data-aos-duration="2000" className='banner_text'>
                            <Typewriter
                                options={{
                                    strings: ['Biznesingiz uchun kuchli brend, sotuvchi sayt, CRM va ERP platformalar yaratamiz'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p data-aos="fade-right" data-aos-duration="2000" className='banner_description'>
                            Brend bu - hissiyot. Sayt - yirik hajmdagi ma'lumotlarni oson taqdim qilish vositasi. Avtomatizatsiyasiz esa biznesni kengaytirish ilojsiz.
                        </p>
                        <div className='main_btn'>
                            <Button data-aos="fade-right" data-aos-duration="2000" bg="warning" text="portfolio" />
                            <Button data-aos="fade-right" data-aos-duration="2000" bg="primary" text="xizmat turlari" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
