import React from 'react';
import menu from '../../assets/data/menu.json';
import logo from '../../assets/img/icon/logo.png';
import user from '../../assets/img/icon/User.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import useResize from '../../hooks/useResize';
import Burger from './Burger/Burger';

const Header = () => {
    const width = useResize();

    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__logo_wrap}>
                    <NavLink to={'/'}>
                        <img src={logo} className='header__logo' title='На главную' alt='logo' />
                    </NavLink>
                </div>

                {width < 1040 ? (
                    <Burger />
                ) : (
                    <div className={s.header__navigation_wrap}>
                        <nav className={s.header__navigation}>
                            <ul className={s.header__navigation_list}>
                                {menu.header.map((el, i) => (
                                    <li key={i} className={s.header__navigation_li}>
                                        <NavLink to={el.path}>{el.title}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Button title={'Sign Up'} icon={user} pdn={true} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
