import React, { useEffect, useState } from 'react';
import s from './NFTPage.module.css';
import img from '../../assets/img/NFT_page.jpg';
import BannerImg from '../../components/BannerImg/BannerImg';
import cardsInfo from '../../assets/data/cardsMarketplace.json';
import { useNavigate, useParams } from 'react-router';
import cn from 'classnames';
import Timer from '../../components/Timer/Timer';
import avatars from '../../assets/img/avatar/index';
import iconGlobe from '../../assets/img/icon/Globe.svg';
import Button from '../../components/Button/Button';
import arrowRight from '../../assets/img/icon/ArrowRight.svg';
import cardsNFTPage from '../../assets/data/cardsNFTPage.json';
import useResize from '../../hooks/useResize';
import imgCards from '../../assets/img/cardsMarketplace';

const NFTPage = () => {
    const { id } = useParams();
    const artist = cardsInfo.find((el) => el.id == id);
    const date = new Date().toDateString();
    const navigate = useNavigate();
    const width = useResize();
    const [cards, setCards] = useState(cardsNFTPage);

    useEffect(() => {
        if (width > 960) {
            setCards(cardsNFTPage);
        }
        if (width > 580 && width < 960) {
            setCards(cardsNFTPage.slice(0, 6));
        }
        if (width < 580) {
            setCards(cardsNFTPage.slice(0, 2));
        }
    }, [width]);

    return (
        <div>
            <BannerImg img={img} />
            <div className={cn('container', s.NFTP__container)}>
                <div className={s.NFTP__content}>
                    <div className={s.NFTP__content_title}>
                        <h2 className={s.content_title}>The Orbitians</h2>
                        <p className={s.content_subtitle}>Minted on {date}</p>
                    </div>
                    <div className={s.NFTP__content_timer}>
                        <Timer btn={true} />
                    </div>
                    <div className={s.NFTP__content_info}>
                        <div className={s.created__wrap}>
                            <p className={s.created__title}>Created By</p>
                            <p className={s.created__text}>
                                <span className={s.created__text_img}>
                                    <img src={avatars[artist.avatar]} alt='' />
                                </span>
                                <span>{artist.nickname}</span>
                            </p>
                        </div>
                        <div className={s.description__wrap}>
                            <p className={s.description_title}>Description</p>
                            <p className={s.description_text}>
                                The Orbitians
                                <br />
                                is a collection of 10,000 unique NFTs on the Ethereum blockchain,
                                <br />
                                <br />
                                There are all sorts of beings in the NFT Universe. The most advanced
                                and friendly of the bunch are Orbitians.
                                <br />
                                <br /> They live in a metal space machines, high up in the sky and
                                only have one foot on Earth.
                                <br /> These Orbitians are a peaceful race, but they have been at
                                war with a group of invaders for many generations.
                                <br /> The invaders are called Upside-Downs, because of their
                                inverted bodies that live on the ground, yet do not know any other
                                way to be. Upside-Downs believe that they will be able to win this
                                war if they could only get an eye into Orbitian territory, so
                                they've taken to make human beings their target.
                            </p>
                        </div>
                        <div className={s.details__wrap}>
                            <p className={s.details_title}>Details</p>
                            <ul className={s.details_links}>
                                <li className={s.details_link}>
                                    <img src={iconGlobe} alt='iconGlobe' className={s.link_icon} />
                                    <span className={s.link_text}>View on Etherscan</span>
                                </li>
                                <li className={s.details_link}>
                                    <img src={iconGlobe} alt='iconGlobe' className={s.link_icon} />
                                    <span className={s.link_text}>View Original</span>
                                </li>
                            </ul>
                        </div>
                        <div className={s.tags__wrap}>
                            <p className={s.tags_title}>Tags</p>
                            <ul className={s.tags__list}>
                                <li className={s.tags__item}>Animation</li>
                                <li className={s.tags__item}>illustration</li>
                                <li className={s.tags__item}>moon</li>
                                <li className={s.tags__item}>moon</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.NFTP__cards}>
                    <h2 className={s.cards_title}>More from this artist</h2>
                    <div
                        className={s.cards_btn}
                        onClick={() => navigate(`/artistPage/${artist.id}`)}
                    >
                        <Button title={'Go To Artist Page'} icon={arrowRight} bg={'transparent'} />
                    </div>
                    {cards.map((el, i) => (
                        <div className={s.card__wrap} key={i}>
                            <div className={s.img__wrap}>
                                <img src={imgCards[el.img]} alt='img' className={s.card__img} />
                            </div>
                            <div className={s.card__info}>
                                <h4 className={s.card__title}>{el.title}</h4>
                                <div className={s.card__user}>
                                    <span className={s.card__avatar}>
                                        <img src={avatars[artist.avatar]} alt='avatar' />
                                    </span>
                                    <span className={s.card__name}>{artist.nickname}</span>
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

export default NFTPage;
