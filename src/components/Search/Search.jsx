import React, { useState } from 'react';
import s from './Search.module.css';
import icon from '../../assets/img/icon/MagnifyingGlass.png';
import cross from '../../assets/img/icon/cross.svg';

const Search = (props) => {
    const [search, setSearch] = useState('');

    return (
        <div className={s.search}>
            <input
                className={s.search__input}
                placeholder='Search your favourite NFTs...'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            {search ? (
                <span className={s.search__icon} onClick={() => setSearch('')}>
                    <img src={cross} alt='icon' />
                </span>
            ) : (
                <span className={s.search__icon}>
                    <img src={icon} alt='icon' />
                </span>
            )}
        </div>
    );
};

export default Search;
