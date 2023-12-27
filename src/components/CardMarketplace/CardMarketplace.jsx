import React from 'react';
import s from './CardMarketplace.module.css';
import avatars from '../../assets/img/avatar';
import cards from '../../assets/img/cardsMarketplace';

const CardMarketplace = ({ ...props }) => {
    return (
        <div className={s.card__wrap}>
            <div className={s.img__wrap}>
                <img src={cards[props.img]} alt='img' className={s.card__img} />
            </div>
            <div className={s.card__info}>
                <h4 className={s.card__title}>{props.title}</h4>
                <div className={s.card__user}>
                    <span className={s.card__avatar}>
                        <img src={avatars[props.avatar]} alt='avatar' />
                    </span>
                    <span className={s.card__name}>{props.nickname}</span>
                </div>
                <div className={s.card__additional}>
                    <div className={s.additional__block_1}>
                        <span className={s.block_title}>Price</span>
                        <span className={s.block_info}>{props.price}</span>
                    </div>
                    <div className={s.additional__block_2}>
                        <span className={s.block_title}>Highest Bid</span>
                        <span className={s.block_info}>{props.bid}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMarketplace;
