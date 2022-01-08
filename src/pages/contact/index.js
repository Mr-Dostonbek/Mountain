import React from 'react';
import './style.scss';
import Contacts from '../home/contact';
import YandexMap from './yandexMap';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1 className='services-page-h1'>Manzilimiz</h1>
            <YandexMap />
            <Contacts title="Masofa muammo emas!" />
        </div>
    );
}

export default Contact;
