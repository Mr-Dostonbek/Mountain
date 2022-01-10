import React from 'react';
import './style.scss';
import Contacts from '../home/contact';
import YandexMap from './yandexMap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    AOS.init();
    return (
        <div className='contact-page'>
            <h1 data-aos="fade-right" data-aos-duration="2000" className='services-page-h1'>Manzilimiz</h1>
            <YandexMap />
            <Contacts title="Masofa muammo emas!" />
        </div>
    );
}

export default Contact;
