import React from 'react';
import s from './BannerImg.module.css';

const BannerImg = ({ img }) => {
    return (
        <div className={s.banner_wrap}>
            <img src={img} alt='banner_img' className={s.banner_img} />
        </div>
    );
};

export default BannerImg;
