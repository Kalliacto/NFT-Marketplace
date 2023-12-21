import React from 'react';
import s from './Hero.module.css';
import Button from '../Button/Button';
import rocket from '../../assets/img/icon/RocketLaunch_white.svg';
import useResize from '../../hooks/useResize';
import img from '../../assets/img/imgHomePage.svg';
import avatar from '../../assets/img/avatar/avatar1.png';

const Hero = (props) => {
    const width = useResize();

    // TODO: Сделать анимацию цифорок

    return (
        <div className={s.hero}>
            <div className='container'>
                <div className={s.hero__wrap}>
                    {/* <div className={s.hero__info}>
                        <h1 className={s.hero__info_title}>Discover digital art & Collect NFTs</h1>
                        <p className={s.hero__info_text}>
                            NFT marketplace UI created with Anima for Figma. Collect, buy and sell
                            art from more than 20k NFT artists.
                        </p>
                        <div style={{ maxWidth: '224px' }}>
                            {width < 960 ? (
                                <Button title={'Get Started'} icon={rocket} bg={'grd'} />
                            ) : (
                                <Button title={'Get Started'} icon={rocket} bg={false} />
                            )}
                        </div>
                        <ul className={s.hero__info_cards}>
                            <li className={s.hero__info_card}>
                                <span className={s.info__card_item1}>240k+ </span>
                                <span className={s.info__card_item2}>Total Sale</span>
                            </li>
                            <li className={s.hero__info_card}>
                                <span className={s.info__card_item1}>100k+</span>
                                <span className={s.info__card_item2}>Auctions</span>
                            </li>
                            <li className={s.hero__info_card}>
                                <span className={s.info__card_item1}>240k+</span>
                                <span className={s.info__card_item2}>Artists</span>
                            </li>
                        </ul>
                    </div>
                    <div className={s.hero__image}>
                        <div className={s.hero__image_card}>
                            <div className={s.hero__img_wrap}>
                                <img src={img} alt='img' className={s.hero__img} />{' '}
                            </div>
                            <div className={s.hero__image_info}>
                                <h5 className={s.hero__image_title}>Space Walking</h5>
                                <p className={s.hero__image_text}>
                                    <span className={s.hero__image_avatar}>
                                        <img
                                            src={avatar}
                                            alt='avatar'
                                            className={s.hero__image_nik}
                                        />
                                    </span>
                                    <span>Animakid</span>
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className={s.hero__info}>
                        <h1 className={s.hero__info_title}>Discover digital art & Collect NFTs</h1>
                        <p className={s.hero__info_text}>
                            NFT marketplace UI created with Anima for Figma. Collect, buy and sell
                            art from more than 20k NFT artists.
                        </p>
                    </div>
                    <div className={s.hero__info2}>
                        <div style={{ maxWidth: '224px' }}>
                            {width < 960 ? (
                                <Button title={'Get Started'} icon={rocket} bg={'grd'} />
                            ) : (
                                <Button title={'Get Started'} icon={rocket} bg={false} />
                            )}
                        </div>
                        <ul className={s.hero__info_cards}>
                            <li className={s.hero__info_card}>
                                <span className={s.info__card_item1}>240k+ </span>
                                <span className={s.info__card_item2}>Total Sale</span>
                            </li>
                            <li className={s.hero__info_card}>
                                <span className={s.info__card_item1}>100k+</span>
                                <span className={s.info__card_item2}>Auctions</span>
                            </li>
                            <li className={s.hero__info_card}>
                                <span className={s.info__card_item1}>240k+</span>
                                <span className={s.info__card_item2}>Artists</span>
                            </li>
                        </ul>
                    </div>
                    <div className={s.hero__image}>
                        <div className={s.hero__image_card}>
                            <div className={s.hero__img_wrap}>
                                <img src={img} alt='img' className={s.hero__img} />{' '}
                            </div>
                            <div className={s.hero__image_info}>
                                <h5 className={s.hero__image_title}>Space Walking</h5>
                                <p className={s.hero__image_text}>
                                    <span className={s.hero__image_avatar}>
                                        <img
                                            src={avatar}
                                            alt='avatar'
                                            className={s.hero__image_nik}
                                        />
                                    </span>
                                    <span>Animakid</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
