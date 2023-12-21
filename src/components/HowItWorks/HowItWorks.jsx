import React from 'react';
import s from './HowItWorks.module.css';
import worksPic from '../../assets/img/worksCard/index';
import cards from '../../assets/data/worksCards.json';

const HowItWorks = (props) => {
    return (
        <div className={s.works__wrap}>
            <div className='container'>
                <div className={s.works__info}>
                    <h3 className={s.works__title}>How It Works</h3>
                    <p className={s.works__subTitle}>Find out how to get started</p>
                </div>
                <ul className={s.works__list}>
                    {cards.map((el, i) => (
                        <li key={i} className={s.works__card}>
                            <img src={worksPic[el.pic]} alt='picture' className={s.card__pic} />
                            <div className={s.card__info}>
                                <h5 className={s.card__title}>{el.title}</h5>
                                <p className={s.card__text}>{el.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HowItWorks;
