import React, { useState } from 'react';
import s from './Burger.module.css';
import burger from '../../../assets/img/icon/BurgerMenu.svg';
import cross from '../../../assets/img/icon/cross.svg';
import user from '../../../assets/img/icon/User.svg';
import menu from '../../../assets/data/menu.json';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';

const Burger = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
        setShowMenu(false);
    };

    return (
        <div className={showMenu ? s.burger + ' ' + s.burger_active : s.burger}>
            {showMenu ? (
                <img
                    src={cross}
                    alt='burger'
                    onClick={() => setShowMenu(!showMenu)}
                    className={s.burger_img}
                />
            ) : (
                <img
                    src={burger}
                    alt='burger'
                    onClick={() => setShowMenu(!showMenu)}
                    className={s.burger_img}
                />
            )}

            <div
                className={
                    showMenu
                        ? s.burger__navigation_wrap + ' ' + s.active
                        : s.burger__navigation_wrap
                }
            >
                <nav className={s.burger__navigation}>
                    <ul className={s.burger__navigation_list}>
                        {menu.header.map((el, i) => (
                            <li
                                key={i}
                                className={s.burger__navigation_li}
                                onClick={() => goTo(el.path)}
                            >
                                {el.title}
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button title={'Sign Up'} icon={user} pdn={true} />
            </div>
        </div>
    );
};

export default Burger;
// TODO: поправить анимацию при изменении экрана чтобы ничего не вываливалось(появляется скролл)
