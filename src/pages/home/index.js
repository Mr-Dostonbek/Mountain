import React from 'react';
import Counter from './counter';
import Main from './main';
import Portfolio from './portfolio';
import Services from './services';
import Clients from './clients';
import Contact from './contact';
import './style.scss';

const Home = () => {

    function ModalShow() {
        document.body.style.overflow = 'hidden';
        const focus = document.querySelector('.modal-focus');
        focus.classList.add('display-block-m')
    }

    return (
        <>
            <div className='home'>
                <div onClick={ModalShow} className='call-phone'>
                    <img src='../assets/img/call.svg' alt='call-phone' />
                </div>
                <Main />
                <Counter />
                <Portfolio />
                <Services />
                <Clients />
                <Contact title="Keling, loyihangiz haqida gaplashamiz" />
            </div>
        </>
    );
}

export default Home;
