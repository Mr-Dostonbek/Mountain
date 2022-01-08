import React from 'react';
import Counter from './counter';
import Main from './main';
import Portfolio from './portfolio';
import Services from './services';
import Clients from './clients';
import Contact from './contact';

const Home = () => {
    return (
        <div className='home'>
            <Main />
            <Counter />
            <Portfolio />
            <Services />
            <Clients />
            <Contact title="Keling, loyihangiz haqida gaplashamiz" />
        </div>
    );
}

export default Home;
