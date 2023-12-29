import React, { useEffect, useState } from 'react';
import s from './BannerMushroom.module.css';
import Button from '../Button/Button';
import eye from '../../assets/img/icon/Eye.svg';
import avatar from '../../assets/img/avatar/avatar12.png';
import cn from 'classnames';
import Timer from '../Timer/Timer';

const BannerMushroom = (props) => {
    return (
        <div className={s.banner__wrap}>
            <div className={s.banner__wrap_grd}></div>
            <div className={s.banner__content_wrap}>
                <div className={cn(s.banner__content, 'container')}>
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
                        <Timer />
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
