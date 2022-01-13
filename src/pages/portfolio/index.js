import React from 'react';
import './style.scss';
import PortfolioHome from '../home/portfolio';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div class="main-container">
                <div className='row title'>
                    <div className='col d-flex justify-content-between'>
                        <h2>Portfolio</h2>
                        <div className='client_calculate'>
                            <ul>
                                <li>302 ta loyiha</li>
                                <li>212 ta rozi mijoz</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioHome />
        </div>
    );
}

export default Portfolio;
