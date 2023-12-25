import React from 'react';
import s from './CardCreator.module.css';
import cn from 'classnames';
import avatars from '../../../assets/img/avatar';

const CardCreator = ({ props, width }) => {
    return (
        <div
            className={cn(
                s.card,
                width > 1064 ? s.card_desktop : width > 740 ? s.card_tablet : s.card_mobile
            )}
        >
            <div className={s.card__avatar_wrap}>
                <p className={s.card__avatar_num}>{props.num}</p>
                <img src={avatars[props.avatar]} alt='avatar' className={s.card__avatar_img} />
            </div>
            <div className={s.card__info_wrap}>
                <p className={s.card__info_name}>{props.name}</p>
                <p className={s.card__info}>
                    Total Sales: <span className={s.card__info_span}>{props.volume}</span>{' '}
                </p>
            </div>
        </div>
    );
};

export default CardCreator;
