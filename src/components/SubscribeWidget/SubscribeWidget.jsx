import React from 'react';
import s from './SubscribeWidget.module.css';
import img from '../../assets/img/Photo.jpg';
import SubscribeInput from '../Form/SubscribeInput';
// import mail from '../../assets/img/EnvelopeSimple.svg';

const SubscribeWidget = ({ icon = false }) => {
    return (
        <div className={s.subscribe}>
            <div className='container'>
                <div className={s.subscribe__wrap}>
                    <div className={s.subscribe__img}>
                        <img src={img} alt='img' />
                    </div>
                    <div className={s.subscribe__info_wrap}>
                        <div className={s.subscribe__info}>
                            <h3 className={s.subscribe__title}>Join our weekly digest</h3>
                            <p className={s.subscribe__text}>
                                Get exclusive promotions & updates straight to your inbox.
                            </p>
                        </div>
                        <SubscribeInput icon={icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeWidget;
