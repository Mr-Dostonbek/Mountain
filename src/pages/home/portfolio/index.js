import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import BigImg from './bigImg';
import SmallImg from './smallImg';
import Button from '../main/button'

const Portfolio = () => {
    
    return (
        <div className='portfolio_section'>
            <div className='main-container'>

                <div className='row portfolio-title'>
                    <div className='col text-center m-4'>
                        <h1>Portfolio</h1>
                    </div>
                </div>

                <div className='row'>

                    <BigImg img={'./assets/img/row-1-big.png'} title={'Avida shifoxonasi ⟶'} text={'Logotip'} />

                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            <SmallImg img={'./assets/img/row-1-1.png'} title={'Baf ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-1-2.png'} title={'OMON MEAT ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-1-3.png'} title={'Barg ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-1-4.png'} title={'Liberty Energy ⟶'} text={'Logotip'} />
                        </div>
                    </div>

                </div>

                <div className='row'>

                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            <SmallImg img={'./assets/img/row-2-1.png'} title={'Krumchiki ⟶'} text={'Qadoq dizayn'} />
                            <SmallImg img={'./assets/img/row-2-2.png'} title={'Mezzi ⟶'} text={'Qadoq dizayn'} />
                            <SmallImg img={'./assets/img/row-2-3.png'} title={'Мой бургер ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-2-4.png'} title={'SkyLine ⟶'} text={'Websayt'} />
                        </div>
                    </div>

                    <BigImg img={'./assets/img/row-2-big.png'} title={'Hi Baby ⟶'} text={'Qadoq dizayni'} />

                </div>

                <div className='row'>

                    <BigImg img={'./assets/img/row-3-big.png'} title={'Elmart ⟶'} text={'Logotip'} />

                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            <SmallImg img={'./assets/img/row-3-1.png'} title={'Winner ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-3-2.png'} title={'Hediye ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-3-3.png'} title={'Edu-on ⟶'} text={'Logotip'} />
                            <SmallImg img={'./assets/img/row-3-4.png'} title={'Adi badi ⟶'} text={'Logotip'} />
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col text-center'>
                        <Link to="/portfolio">
                            <Button bg="portfolio" text={'Barchasi'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
