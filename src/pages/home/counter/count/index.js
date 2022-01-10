import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './style.scss';

const CountOne = ({number, text}) => {
    return (
        <div className='col-12 col-sm-6 col-lg-3 mb-4'>
            <div className='count_item' data-aos="fade-right" data-aos-duration="2000">
                <div className='count_number'>
                <CountUp start={0} end={`${number}`} duration={2} suffix=' +'>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall="true">
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                </CountUp>
                </div>
                <div className='count_text'>
                        <h4>{text}</h4>
                </div>
            </div>
        </div>
    )
}

export default CountOne;
