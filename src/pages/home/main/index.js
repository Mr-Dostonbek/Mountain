import React from 'react';
import Typewriter from 'typewriter-effect';
import './style.scss'
import Button from './button';
import CircleBg from '../../../components/CircleBg/circleBg';

const Main = () => {
    return (
        <div className='main_section'>
            <CircleBg bg="#E5E5E5" wt="100px" ht="100px" top="300px" left="-40px" />
            <CircleBg bg="#D6E2EC" wt="90px" ht="90px" top="200px" left="240px" />
            <CircleBg bg="#E4E0F05" wt="120px" ht="120px" top="200px" left="640px" dur="10s" />
            <CircleBg bg="#F3DDD8" wt="70px" ht="70px" top="230px" left="940px" />
            <CircleBg bg="#DAECF5" wt="100px" ht="100px" top="150px" right="-20px" dur="10s" />
            <CircleBg bg="#ECE7D6" wt="100px" ht="100px" top="550px" left="-45px" dur="10s" />
            <CircleBg bg="#ECE7D6" wt="70px" ht="70px" top="400px" right="500px" />
            <CircleBg bg="#DDE1F5" wt="100px" ht="100px" top="400px" left="350px" />
            <CircleBg bg="#EAE0F0" wt="200px" ht="200px" top="550px" right="-70px" />
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
