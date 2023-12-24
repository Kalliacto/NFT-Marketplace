import React from 'react';
import s from './Input.module.css';
import Button from '../Button/Button';
import mail from '../../assets/img/icon/EnvelopeSimple.svg';
import cn from 'classnames';

const SubscribeInput = ({ mobile = false, icon = false }) => {
    return (
        <div className={cn(s.input__wrap, mobile && s.input__wrap_mobile)}>
            <input
                type='text'
                className={cn(s.input, mobile && s.input_mobile)}
                placeholder='Enter your email here'
            />
            <div className={cn(s.input__btn, mobile && s.input__btn_mobile)}>
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
