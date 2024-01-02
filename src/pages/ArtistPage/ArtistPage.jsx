import React, { useEffect, useState } from 'react';
import s from './ArtistPage.module.css';
import imgBanner from '../../assets/img/Image.jpg';
import { useParams } from 'react-router';
import topCreators from '../../assets/data/topCreators.json';
import icons from '../../assets/img/icon';
import Copy from '../../assets/img/icon/Copy.svg';
import Plus from '../../assets/img/icon/Plus.svg';
import cn from 'classnames';
import avatar from '../../assets/img/avatar/index';
import Button from '../../components/Button/Button';
import useResize from '../../hooks/useResize';
import cardsImg from '../../assets/img/cardsMarketplace';
import BannerImg from '../../components/BannerImg/BannerImg';

const ArtistPage = (props) => {
    const { id } = useParams();
    const artist = topCreators.find((el) => el.id == id);
    const [filterToggle, setFilterToggle] = useState(1);
    const width = useResize();

    const [cards, setCards] = useState(topCreators.slice(0, 9));

    useEffect(() => {
        if (width > 960) {
            setCards(topCreators.slice(0, 9));
        }
        if (width > 580 && width < 960) {
            setCards(topCreators.slice(0, 6));
        }
        if (width < 580) {
            setCards(topCreators.slice(0, 3));
        }
    }, [width]);

    return (
        <div>
            <BannerImg img={imgBanner} />
            <div className={cn(s.artist__info, 'container')}>
                <div className={s.artist__avatar}>
                    <img src={avatar[artist.avatar]} alt='artist_avatar' className={s.avatar} />
                </div>
                <div className={s.artist__info_block}>
                    <div className={s.artist__title_wrap}>
                        <h2 className={s.artist__title}>{artist.name}</h2>
                        <div className={s.title_btns}>
                            <Button title={'0xc0E3...B79C'} pdn={true} icon={Copy} />
                            <Button title={'Follow'} bg={'transparent'} pdn={true} icon={Plus} />
                        </div>
                    </div>
                    <div className={s.artist__stats}>
                        <div className={s.artist__stats_wrap}>
                            <div className={s.artist__stat}>
                                <span className={s.stat_num}>250k+</span>
                                <span className={s.stat_txt}>Volume</span>
                            </div>
                            <div className={s.artist__stat}>
                                <span className={s.stat_num}>50+</span>
                                <span className={s.stat_txt}>NFTs Sold</span>
                            </div>
                            <div className={s.artist__stat}>
                                <span className={s.stat_num}>3000+</span>
                                <span className={s.stat_txt}>Followers</span>
                            </div>
                        </div>
                        <div className={s.artist__bio}>
                            <span className={s.bio}>Bio</span>
                            <span className={s.bio_text}>
                                The internet's friendliest designer kid.
                            </span>
                        </div>
                        <div className={s.artist__links}>
                            <span className={s.links}>Links</span>
                            <span className={s.links__wrap}>
                                {artist.links.map((el, i) => (
                                    <img src={icons[el.icon]} alt='icon' className={s.link_icon} />
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
                <ul className={s.artist__filter_list}>
                    <li
                        className={cn(
                            s.artist__filter_item,
                            filterToggle === 1 ? s.filter_item_active : ''
                        )}
                        onClick={() => setFilterToggle(1)}
                    >
                        <span className={s.filter_item_span}>Created</span>
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
                            s.artist__filter_item,
                            filterToggle === 2 ? s.filter_item_active : ''
                        )}
                        onClick={() => setFilterToggle(2)}
                    >
                        <span className={s.filter_item_span}>Owned</span>
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
                    <li
                        className={cn(
                            s.artist__filter_item,
                            filterToggle === 3 ? s.filter_item_active : ''
                        )}
                        onClick={() => setFilterToggle(3)}
                    >
                        <span className={s.filter_item_span}>Collection</span>
                        {width > 580 && (
                            <span
                                className={cn(
                                    s.filter_item_buble,
                                    filterToggle === 3 ? s.filter_item_buble_active : ''
                                )}
                            >
                                4
                            </span>
                        )}
                    </li>
                </ul>
            </div>
            <div className={s.artist__cards}>
                <div className={cn('container', s.card__list)}>
                    {cards.slice(0, 9).map((el, i) => (
                        <div className={s.card__wrap} key={i}>
                            <div className={s.img__wrap}>
                                <img
                                    src={cardsImg[`pic${i + 1}`]}
                                    alt='img'
                                    className={s.card__img}
                                />
                            </div>
                            <div className={s.card__info}>
                                <h4 className={s.card__title}>{el.title}</h4>
                                <div className={s.card__user}>
                                    <span className={s.card__avatar}>
                                        <img src={avatar[artist.avatar]} alt='avatar' />
                                    </span>
                                    <span className={s.card__name}>{artist.name}</span>
                                </div>
                                <div className={s.card__additional}>
                                    <div className={s.additional__block_1}>
                                        <span className={s.block_title}>Price</span>
                                        <span className={s.block_info}>{el.volume}</span>
                                    </div>
                                    <div className={s.additional__block_2}>
                                        <span className={s.block_title}>Highest Bid</span>
                                        <span className={s.block_info}>{el.sold}</span>
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

export default ArtistPage;

// TODO: поправить баг и изменением экрана на 580- появляется нижний скролл
