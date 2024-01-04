import React from 'react';
import s from './Collection.module.css';
import cn from 'classnames';

const CollectionCard = ({ title, name, avatar, img }) => {
    let imgBig = img?.[0];
    let imgOne = img?.[1];
    let imgTwo = img?.[2];

    return (
        <div className={s.card__wrap}>
            <div className={s.card__img_big}>
                <img src={imgBig} alt='imgBig' />
            </div>
            <div className={s.card__img_tree}>
                <img src={imgOne} alt='imgOne' className={cn(s.img, s.img_one)} />
                <img src={imgTwo} alt='imgTwo' className={cn(s.img, s.img_two)} />
                <p className={cn(s.img, s.img_purple)}>1025+</p>
            </div>
            <div className={s.card__info}>
                <h4 className={s.card__title}>{title}</h4>
                <div className={s.card__author}>
                    <span className={s.author_avatar}>
                        <img src={avatar} alt='author avatar' />
                    </span>
                    <span className={s.author_name}>{name}</span>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
