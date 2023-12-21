import React from 'react';
import SubscribeWidget from '../components/SubscribeWidget/SubscribeWidget';
import mail from '../assets/img/icon/EnvelopeSimple.svg';
import HowItWorks from '../components/HowItWorks/HowItWorks';

const Homepage = (props) => {
    return (
        <div>
            <HowItWorks />
            <SubscribeWidget icon={mail} />
        </div>
    );
};

export default Homepage;
