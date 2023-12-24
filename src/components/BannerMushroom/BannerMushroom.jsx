import React, { useEffect, useState } from 'react';
import s from './BannerMushroom.module.css';
import Button from '../Button/Button';
import eye from '../../assets/img/icon/Eye.svg';
import avatar from '../../assets/img/avatar/avatar12.png';
import cn from 'classnames';

const BannerMushroom = (props) => {
    // таймер отбратного отсчета
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
        <div className={s.banner__wrap}>
            <div className={s.banner__wrap_grd}></div>
            <div className={s.banner__content_wrap}>
                <div className={s.banner__content}>
                    <div className={s.banner__content_text}>
                        <div className={s.banner__content_avatar}>
                            <span className={s.banner__content_avatar_img}>
                                <img src={avatar} alt='avatar' />
                            </span>
                            <span className={s.banner__content_avatar_text}>Shroomie</span>
                        </div>
                        <h4 className={s.banner__content_title}>Magic Mashrooms</h4>
                    </div>
                    <div className={s.banner__content_timer}>
                        <div className={s.timer__wrap}>
                            <div className={s.timer_title}>Auction ends in:</div>
                            <div className={s.timer_block}>
                                <span className={cn(s.timer, s.timer_hours)}>
                                    <span className={s.timer_num}>
                                        {hours < 10 ? '0' + hours : hours}
                                    </span>
                                    <span className={s.timer_text}>Hours</span>
                                </span>
                                <span>:</span>
                                <span className={cn(s.timer, s.timer_minutes)}>
                                    <span className={s.timer_num}>
                                        {minutes < 10 ? '0' + minutes : minutes}
                                    </span>
                                    <span className={s.timer_text}>Minutes</span>
                                </span>
                                <span>:</span>
                                <span className={cn(s.timer, s.timer_seconds)}>
                                    <span className={s.timer_num}>
                                        {seconds < 10 ? '0' + seconds : seconds}
                                    </span>
                                    <span className={s.timer_text}>Seconds</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={s.banner__content_btn}>
                        <Button title={'See NFT'} icon={eye} bg={'white'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerMushroom;
