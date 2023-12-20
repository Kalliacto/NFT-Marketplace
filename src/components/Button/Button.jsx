import React, { useState } from 'react';
import s from './Button.module.css';

const Button = ({ title, icon = false, pdn = false }) => {
    return (
        <button className={pdn ? s.btn + ' ' + s.btn_mini : s.btn}>
            <img src={icon} alt='user' className={s.btn_icon} />
            <span>{title}</span>
        </button>
    );
};

export default Button;
