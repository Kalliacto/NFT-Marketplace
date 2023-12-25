import React from 'react';
import SubscribeWidget from '../components/SubscribeWidget/SubscribeWidget';
import mail from '../assets/img/icon/EnvelopeSimple.svg';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import BannerMushroom from '../components/BannerMushroom/BannerMushroom';
import TopCreators from '../components/TopCreators/TopCreators';
import creators from '../assets/data/topCreators.json';

const Homepage = (props) => {
    return (
        <div>
            <TopCreators hp={true} />
            <BannerMushroom />
            <HowItWorks />
            <SubscribeWidget icon={mail} />
        </div>
    );
};

export default Homepage;
