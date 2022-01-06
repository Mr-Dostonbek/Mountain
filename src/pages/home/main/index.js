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
                        <h1 className='banner_text'>
                            <Typewriter
                                options={{
                                    strings: ['Biznesingiz uchun kuchli brend, sotuvchi sayt, CRM va ERP platformalar yaratamiz'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className='banner_description'>
                            Brend bu - hissiyot. Sayt - yirik hajmdagi ma'lumotlarni oson taqdim qilish vositasi. Avtomatizatsiyasiz esa biznesni kengaytirish ilojsiz.
                        </p>
                        <div className='main_btn'>
                            <Button bg="warning" text="portfolio" />
                            <Button bg="primary" text="xizmat turlari" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
