import React, { useState } from 'react';
import s from './Rainkings.module.css';
import cn from 'classnames';
import creators from '../../assets/data/topCreators.json';
import avatars from '../../assets/img/avatar';
import useResize from '../../hooks/useResize';
import { Link } from 'react-router-dom';

const Rainkings = (props) => {
    const [filterToggle, setFilterToggle] = useState(1);
    const [creatorsInfo, setCreatorsInfo] = useState(creators);
    const width = useResize();

    return (
        <div className='container'>
            <div className={s.creators__title_wrap}>
                <h1 className={s.creators__title}>Top Creators</h1>
                <p className={s.creators__subTitle}>
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </div>
            <ul className={s.creators__filter_list}>
                <li
                    className={cn(
                        s.creators__filter_item,
                        filterToggle === 1 ? s.filter_item_active : ''
                    )}
                    onClick={() => setFilterToggle(1)}
                >
                    {width < 550 ? '1d' : 'Today'}
                </li>
                <li
                    className={cn(
                        s.creators__filter_item,
                        filterToggle === 2 ? s.filter_item_active : ''
                    )}
                    onClick={() => setFilterToggle(2)}
                >
                    {width < 550 ? '7d' : 'This Week'}
                </li>
                <li
                    className={cn(
                        s.creators__filter_item,
                        filterToggle === 3 ? s.filter_item_active : ''
                    )}
                    onClick={() => setFilterToggle(3)}
                >
                    {width < 550 ? '30d' : 'This Month'}
                </li>
                <li
                    className={cn(
                        s.creators__filter_item,
                        filterToggle === 4 ? s.filter_item_active : ''
                    )}
                    onClick={() => setFilterToggle(4)}
                >
                    All Time
                </li>
            </ul>
            <div className={s.container__creators}>
                <ul
                    className={cn(
                        s.filterCreators__list,
                        width > 960
                            ? s.filterCreators__list_desk
                            : width > 580
                            ? s.filterCreators__list_tabl
                            : s.filterCreators__list_mobil
                    )}
                >
                    <li className={s.filterCreators__list_item}>#</li>
                    <li style={{ textAlign: 'left' }}>Artist</li>
                    {width > 580 ? <li className={s.filterCreators__list_item}>Change</li> : ''}
                    {width > 960 ? <li className={s.filterCreators__list_item}>NFTs Sold</li> : ''}
                    <li className={s.filterCreators__list_item}>Volume</li>
                </ul>
                <ul className={s.creators__list}>
                    {creatorsInfo.map((el, i) => (
                        <li
                            key={i}
                            className={cn(
                                s.creators__list_item,
                                width > 960
                                    ? s.creators__list_item_desk
                                    : width > 580
                                    ? s.creators__list_item_tabl
                                    : s.creators__list_item_mobil
                            )}
                        >
                            <p
                                className={cn(
                                    s.creators__item_num,
                                    width > 960 ? s.item__num_desktop : ''
                                )}
                            >
                                {el.num}
                            </p>
                            <p className={s.creators__item_avatar_wrap}>
                                <img
                                    src={avatars[el.avatar]}
                                    alt='avatar'
                                    className={s.creators__item_avatar_img}
                                />
                                <Link to={`/artistPage/${el.id}`}>
                                    <span className={s.creators__item_avatar_name}>{el.name}</span>
                                </Link>
                            </p>
                            {width > 580 ? (
                                <p className={s.creators__item_change}>{el.change}</p>
                            ) : (
                                ''
                            )}
                            {width > 960 && <p className={s.creators__item_sold}>{el.sold}</p>}
                            <p className={s.creators__item_volume}>{el.volume}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Rainkings;
