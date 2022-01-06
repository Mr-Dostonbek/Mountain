import React from 'react';
import Counter from './counter';
import Main from './main';
import Portfolio from './portfolio';

const Home = () => {
    return (
        <div className='home'>
            <Main />
            <Counter />
            <Portfolio />
        </div>
    );
}

export default Home;
