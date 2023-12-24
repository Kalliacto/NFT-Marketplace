import React from 'react';
import s from './BannerMushroom.module.css';
import Button from '../Button/Button';
import eye from '../../assets/img/icon/Eye.svg';
import avatar from '../../assets/img/avatar/avatar12.png';
import cn from 'classnames';

const BannerMushroom = (props) => {
    // TODO: сделать таймер отбратного отсчета

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
                    <div
                        className={s.banner__content_timer}
                        // style={{ gridColumn: '2/ 3', gridRow: '1/ 3' }}
                    >
                        <div className={s.timer__wrap}>
                            <div className={s.timer_title}>Auction ends in:</div>
                            <div className={s.timer_block}>
                                <span className={cn(s.timer, s.timer_hours)}>
                                    <span className={s.timer_num}>59</span>
                                    <span className={s.timer_text}>Hours</span>
                                </span>
                                <span>:</span>
                                <span className={cn(s.timer, s.timer_minutes)}>
                                    <span className={s.timer_num}>59</span>
                                    <span className={s.timer_text}>Minutes</span>
                                </span>
                                <span>:</span>
                                <span className={cn(s.timer, s.timer_seconds)}>
                                    <span className={s.timer_num}>59</span>
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
