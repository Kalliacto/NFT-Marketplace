import React from 'react';
import s from './Account.module.css';
import img from '../../assets/img/Connect.jpg';
import imgCoinbase from '../../assets/img/icon/Coinbase.png';
import imgMetamask from '../../assets/img/icon/Metamask.png';
import imgWalletConnect from '../../assets/img/icon/WalletConnect.png';

const ConnectWalletComponent = ({ setUser }) => {
    return (
        <div className={s.account__container}>
            <img src={img} alt='img' className={s.account__img} />
            <div className={s.account__info}>
                <h2 className={s.info__title}>Connect wallet</h2>
                <p className={s.info__subTitle}>
                    Choose a wallet you want to connect. There are several wallet providers.
                </p>
                <div className={s.info__form}>
                    <button className={s.info__btn}>
                        <img src={imgMetamask} alt='Metamask' className={s.btn_img} />
                        <span className={s.btn_txt}>Metamask</span>
                    </button>
                    <button className={s.info__btn} onClick={() => setUser((s) => !s)}>
                        <img src={imgWalletConnect} alt='imgWalletConnect' className={s.btn_img} />
                        <span className={s.btn_txt}>Wallet Connect</span>
                    </button>
                    <button className={s.info__btn}>
                        <img src={imgCoinbase} alt='imgCoinbase' className={s.btn_img} />
                        <span className={s.btn_txt}>Coinbase</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConnectWalletComponent;
