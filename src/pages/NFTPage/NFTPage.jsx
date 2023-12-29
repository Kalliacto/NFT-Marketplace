import React from 'react';
import s from './NFTPage.module.css';
import img from '../../assets/img/NFT_page.jpg';
import BannerImg from '../../components/BannerImg/BannerImg';
import cardsInfo from '../../assets/data/cardsMarketplace.json';
import { useParams } from 'react-router';
import cn from 'classnames';
import Timer from '../../components/Timer/Timer';

const NFTPage = () => {
    const { id } = useParams();
    // console.log(console.log(cardsInfo.find((el) => el.id == id)));

    return (
        <div>
            <BannerImg img={img} />
            <div className={cn('container', s.NFTP__container)}>
                <div className={s.NFTP__content}>
                    <div className={s.NFTP__content_title}></div>
                    <div className={s.NFTP__content_timer}>
                        <Timer btn={true} />
                    </div>
                    <div className={s.NFTP__content_info}></div>
                </div>
                <div className={s.NFTP__cards}></div>
            </div>
        </div>
    );
};

export default NFTPage;
