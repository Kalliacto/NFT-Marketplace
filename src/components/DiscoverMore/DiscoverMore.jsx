import React, { useEffect, useState } from 'react';
import s from './DiscoverMore.module.css';
import Button from '../Button/Button';
import eye from '../../assets/img/icon/Eye.svg';
import discoverCards from '../../assets/data/discoverCards.json';
import avatars from '../../assets/img/avatar';
import useResize from '../../hooks/useResize';
import imgCards from '../../assets/img/cardsMarketplace';

const DiscoverMore = () => {
    const width = useResize();
    const [cards, setCards] = useState(discoverCards);

    useEffect(() => {
        if (width > 960 || width < 580) {
            setCards(discoverCards);
        } else {
            setCards(discoverCards.slice(0, 2));
        }
    }, [width]);

    return (
        <div className='container'>
            <div className={s.container__discover}>
                <div className={s.discover__title_wrap}>
                    <h2 className={s.discover__title}>Discover More NFTs</h2>
                    <p className={s.discover__subTitle}>Explore new trending NFTs</p>
                </div>
                <div className={s.discover__btn}>
                    <Button bg={'transparent'} title={'See All'} icon={eye} />
                </div>
                <div className={s.discover__cards}>
                    {cards.map((el, i) => (
                        <div className={s.card__wrap} key={i}>
                            <div className={s.img__wrap}>
                                <img src={imgCards[el.img]} alt='img' className={s.card__img} />
                            </div>
                            <div className={s.card__info}>
                                <h4 className={s.card__title}></h4>
                                <div className={s.card__user}>
                                    <span className={s.card__avatar}>
                                        <img src={avatars[el.avatar]} alt='avatar' />
                                    </span>
                                    <span className={s.card__name}>{el.name}</span>
                                </div>
                                <div className={s.card__additional}>
                                    <div className={s.additional__block_1}>
                                        <span className={s.block_title}>Price</span>
                                        <span className={s.block_info}>{el.price}</span>
                                    </div>
                                    <div className={s.additional__block_2}>
                                        <span className={s.block_title}>Highest Bid</span>
                                        <span className={s.block_info}>{el.bid}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
