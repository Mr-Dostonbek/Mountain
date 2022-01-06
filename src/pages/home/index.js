import React from 'react';
import Counter from './counter';
import Main from './main';
import Portfolio from './portfolio';
import Services from './services';

const Home = () => {
    return (
        <div className='home'>
            <Main />
            <Counter />
            <Portfolio />
            <Services />
        </div>
    );
}

export default Home;
