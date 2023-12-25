import React from 'react';
import s from './GoPoTopBtn.module.css';
import cn from 'classnames';
import btnToUp from '../../assets/img/icon/upArrow.svg';

const GoToTopBtn = ({ top }) => {
    const scrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <button className={cn(s.goTop, top && s.goTop_show)} onClick={scrollToTop}>
                <img src={btnToUp} alt='btnToUp' />
            </button>
        </>
    );
};

export default GoToTopBtn;
