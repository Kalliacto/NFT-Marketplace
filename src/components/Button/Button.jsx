import React from 'react';
import s from './Button.module.css';
import cn from 'classnames';

const Button = ({ title, icon = false, pdn = false, bg = false }) => {
    return (
        <button
            className={cn(
                pdn ? s.btn + ' ' + s.btn_mini : s.btn,
                bg ? (bg === 'grd' ? s.btn_grd : s.btn_transparent) : s.btn
            )}
        >
            <img src={icon} alt='user' className={s.btn_icon} />
            <span>{title}</span>
        </button>
    );
};

export default Button;
