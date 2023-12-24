import React from 'react';
import s from './Footer.module.css';
import menu from '../../assets/data/menu.json';
import { NavLink } from 'react-router-dom';
import icons from '../../assets/img/icon';
import SubscribeInput from '../Form/SubscribeInput';
import useResize from '../../hooks/useResize';

const Footer = () => {
    const width = useResize();

    return (
        <footer className={s.footer}>
            <div className='container'>
                <nav className={s.footer__menu}>
                    {menu.footer.map((el, i) => (
                        <div key={i} className={s.footer__menu_item}>
                            <h3 className={s.footer__menu_title}>
                                {el?.icon && (
                                    <img
                                        src={icons[el.icon]}
                                        className={s.footer__menu_icon}
                                        alt='icon'
                                    />
                                )}
                                {el.title}
                            </h3>
                            <ul className={s.footer__info}>
                                {el.info &&
                                    el.info.map((item, j) => (
                                        <li className={s.footer__info_item} key={j}>
                                            {item?.text ? (
                                                <p>{item.text}</p>
                                            ) : (
                                                <NavLink to={item.path}>{item.link}</NavLink>
                                            )}
                                        </li>
                                    ))}
                                {el.contacts && (
                                    <ol className={s.footer__info_contact}>
                                        {el.contacts.map((item, j) => (
                                            <li className={s.footer__info_item} key={j}>
                                                <img
                                                    src={icons[item.icon]}
                                                    className={s.footer__menu_icon}
                                                    alt='icon'
                                                />
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </ul>
                            {}
                            <div style={{ marginTop: '20px' }}>
                                {el.btn && <SubscribeInput mobile={width < 520} />}
                            </div>
                        </div>
                    ))}
                </nav>
                <ul className={s.footer__developer}>
                    <li className={s.footer__developer_item}>
                        Developer:
                        <a
                            href='https://github.com/Kalliacto'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            &nbsp;Kalliacto with Love&#129505;
                        </a>
                    </li>
                    <li className={s.footer__developer_item}>
                        Ⓒ NFT Market. Use this template freely.
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
