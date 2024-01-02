import React, { useEffect, useState } from 'react';
import s from './Marketplace.module.css';
import Search from '../../components/Search/Search';
import cn from 'classnames';
import useResize from '../../hooks/useResize';
import CardMarketplace from '../../components/CardMarketplace/CardMarketplace';
import cardsInfo from '../../assets/data/cardsMarketplace.json';
import { Link } from 'react-router-dom';

const Marketplace = (props) => {
    const [filterToggle, setFilterToggle] = useState(1);
    const width = useResize();
    const [cards, setCards] = useState(cardsInfo);

    useEffect(() => {
        if (width > 960) {
            setCards(cardsInfo);
        }
        if (width > 580 && width < 960) {
            setCards(cardsInfo.slice(0, 8));
        }
        if (width < 580) {
            setCards(cardsInfo.slice(0, 5));
        }
    }, [width]);

    return (
        <>
            <div className='container'>
                <div className={s.marketplace__title_wrap}>
                    <h1 className={s.marketplace__title}>Browse Marketplace</h1>
                    <p className={s.marketplace__subTitle}>
                        Browse through more than 50k NFTs on the NFT Marketplace.
                    </p>
                    <Search />
                </div>
                <ul className={s.marketplace__filter_list}>
                    <li
                        className={cn(
                            s.marketplace__filter_item,
                            filterToggle === 1 ? s.filter_item_active : ''
                        )}
                        onClick={() => setFilterToggle(1)}
                    >
                        <span>NFTs</span>
                        {width > 580 && (
                            <span
                                className={cn(
                                    s.filter_item_buble,
                                    filterToggle === 1 ? s.filter_item_buble_active : ''
                                )}
                            >
                                302
                            </span>
                        )}
                    </li>
                    <li
                        className={cn(
                            s.marketplace__filter_item,
                            filterToggle === 2 ? s.filter_item_active : ''
                        )}
                        onClick={() => setFilterToggle(2)}
                    >
                        <span>Collections</span>
                        {width > 580 && (
                            <span
                                className={cn(
                                    s.filter_item_buble,
                                    filterToggle === 2 ? s.filter_item_buble_active : ''
                                )}
                            >
                                67
                            </span>
                        )}
                    </li>
                </ul>
            </div>
            <div className={s.marketplace__cards_wrap}>
                <div className={cn(s.marketplace__cards_list, 'container')}>
                    {cards.map((el, i) => (
                        <Link
                            to={`/nftProductPage/${el.id}`}
                            key={i}
                            className={s.marketplace__card_container}
                        >
                            <CardMarketplace {...el} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Marketplace;

// TODO: поправить баг и изменением экрана на 580- появляется нижний скролл
