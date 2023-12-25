import React from 'react';
import s from './TopCreators.module.css';
import Button from '../Button/Button';
import icon from '../../assets/img/icon/RocketLaunch.svg';
import cn from 'classnames';
import creators from '../../assets/data/topCreators.json';
import CardCreator from './CardCreator/CardCreator';
import useResize from '../../hooks/useResize';

const TopCreators = ({ hp = false }) => {
    const width = useResize();
    const cards = width > 1064 ? creators.slice(0, 12) : creators.slice(0, 6);

    return (
        <div className={s.creators}>
            <div className={cn('container', s.creators__wrap)}>
                <div
                    className={cn(
                        s.creators__title_container,
                        !!hp ? s.creators__title_container_flex : ''
                    )}
                >
                    <div className={s.creators__title_wrap}>
                        <h2 className={s.creators__title}>Top creators</h2>
                        <p className={s.creators__subTitle}>
                            Checkout Top Rated Creators on the NFT Marketplace
                        </p>
                    </div>
                </div>
                {!!hp && (
                    <div className={s.creators_btn}>
                        <Button bg={'transparent'} icon={icon} title={'View Rankings'} />
                    </div>
                )}
                <div
                    className={cn(
                        s.creators__cards,
                        width > 1064 ? s.desktop : width > 740 ? s.tablet : s.mobile
                    )}
                >
                    {cards.map((el, i) => (
                        <CardCreator key={i} props={el} width={width} {...el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCreators;
