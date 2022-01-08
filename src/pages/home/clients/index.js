import React from 'react';
import Client from './client';
import './client/style.scss';

const Clients = () => {
    return (
        <div className='clients_section'>
            <div class="main-container">
                <div className='row'>
                    <div className='col'>
                        <h1>Mijozlarimiz</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 col-lg-3 mb-4'>
                        <Client img="./assets/img/Clients/client-1.png" />
                    </div>
                    <div className='col-6 col-lg-3 mb-4'>
                        <Client img="./assets/img/Clients/client-2.png" />
                    </div>
                    <div className='col-6 col-lg-3 mb-4'>
                        <Client img="./assets/img/Clients/client-3.png" />
                    </div>
                    <div className='col-6 col-lg-3 mb-4'>
                        <Client img="./assets/img/Clients/client-4.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
