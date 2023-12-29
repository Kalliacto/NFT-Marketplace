import React, { useEffect, useState } from 'react';
import s from './Timer.module.css';
import cn from 'classnames';
import Button from '../Button/Button';

const Timer = ({ btn = false }) => {
    const currentDate = new Date();
    const targetDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1
    );
    const [timeRemaining, setTimeRemaining] = useState((targetDate - currentDate) / 1000);
    const seconds = Math.floor(timeRemaining % 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeRemaining]);

    return (
        <div className={s.timer__wrap}>
            <div className={s.timer_title}>Auction ends in:</div>
            <div className={s.timer_block}>
                <span className={cn(s.timer, s.timer_hours)}>
                    <span className={s.timer_num}>{hours < 10 ? '0' + hours : hours}</span>
                    <span className={s.timer_text}>Hours</span>
                </span>
                <span>:</span>
                <span className={cn(s.timer, s.timer_minutes)}>
                    <span className={s.timer_num}>{minutes < 10 ? '0' + minutes : minutes}</span>
                    <span className={s.timer_text}>Minutes</span>
                </span>
                <span>:</span>
                <span className={cn(s.timer, s.timer_seconds)}>
                    <span className={s.timer_num}>{seconds < 10 ? '0' + seconds : seconds}</span>
                    <span className={s.timer_text}>Seconds</span>
                </span>
            </div>

            {btn && (
                <div className={s.timer_btn}>
                    <Button title={'Place Bid'} />
                </div>
            )}
        </div>
    );
};

export default Timer;
