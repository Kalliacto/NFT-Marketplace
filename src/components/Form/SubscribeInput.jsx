import React from 'react';
import s from './Input.module.css';
import Button from '../Button/Button';
import mail from '../../assets/img/icon/EnvelopeSimple.svg';

const SubscribeInput = (icon = false) => {
    return (
        <div className={s.input__wrap}>
            <input type='text' className={s.input} placeholder='Enter your email here' />
            <div className={s.input__btn}>
                <Button
                    title={'Subscribe'}
                    icon={mail}
                    style={{ paddingTop: '16px', paddingBottom: '16px' }}
                />
            </div>
        </div>
    );
};

export default SubscribeInput;
