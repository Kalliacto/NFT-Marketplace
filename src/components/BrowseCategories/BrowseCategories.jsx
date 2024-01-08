import React from 'react';
import s from './BrowseCategories.module.css';
import browseImg from '../../assets/img/Browse Categories';
import browseCards from '../../assets/data/browseCategoriesCards.json';

const BrowseCategories = (props) => {
    return (
        <div className='container'>
            <div className={s.categories}>
                <h2 className={s.categories__title}>Browse Categories</h2>
                <div className={s.categories__list}>
                    {browseCards.map((el, i) => (
                        <div key={i} className={s.card}>
                            <div className={s.card__img_wrap}>
                                <img
                                    src={browseImg[el.img]}
                                    alt={`Картинка описывающая ${el.title}`}
                                    className={s.card__img}
                                />
                                <div className={s.icon__wrap}>
                                    <img
                                        className={s.icon}
                                        src={browseImg[el.icon]}
                                        alt={`Иконка описывающая ${el.title}`}
                                    />
                                </div>
                            </div>
                            <p className={s.card__categories}>{el.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseCategories;
