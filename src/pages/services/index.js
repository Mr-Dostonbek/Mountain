import React from 'react';
import './style.scss';
import Servicess from "../home/services";
import Contact from '../home/contact';

const Services = () => {
    return (
        <div className='services-page'>
            <h1 className='services-page-h1'>Xizmatlar</h1>
            <Servicess />
            <Contact title="Biznesingizga yangi nom kerakmi?" />
        </div>
    );
}

export default Services;
