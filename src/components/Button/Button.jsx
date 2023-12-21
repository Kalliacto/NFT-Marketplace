import React from 'react';
import s from './Button.module.css';

const Button = ({ title, icon = false, pdn = false }) => {
    // console.log(icon);
    return (
        <button className={pdn ? s.btn + ' ' + s.btn_mini : s.btn}>
            {/* {icon.length ||
                (Object.entries(icon).length ? (
                    <img src={icon} alt='user' className={s.btn_icon} />
                ) : (
                    ''
                ))} */}
            <img src={icon} alt='user' className={s.btn_icon} />
            <span>{title}</span>
        </button>
    );
};

export default Button;
