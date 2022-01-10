import React from 'react';
import CountOne from './count';
import './style.scss';

const Counter = () => {
    return (
        <div className='counter'>
            <div className='main-container'>
                <div className='row'>
                    <div className='col text-center mb-4'>
                        <h1 data-aos="fade-right" data-aos-duration="2000">Ko'rsatkichlar</h1>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000" className='row d-flex justify-content-between'>
                    <CountOne number={401} text={'MUVAFFAQIYATLI LOYIHALAR'} />
                    <CountOne number={201} text={'MAMNUN MIJOZLAR'} />
                    <CountOne number={12} text={'XIZMAT TURLARI'} />
                    <CountOne number={26} text={'ALPINISTLAR'} />
                </div>
            </div>
        </div>
    );
}

export default Counter;
