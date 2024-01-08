import React from 'react';
import s from './Collection.module.css';
import CollectionCard from './CollectionCard';
import useResize from '../../hooks/useResize';
import avatar from '../../assets/img/avatar';
import img from '../../assets/img/cardsMarketplace';

const CollectionBlock = (props) => {
    const width = useResize();

    return (
        <div className='container'>
            <div className={s.collection__block}>
                <h2 className={s.collection__title}>Trending Collection</h2>
                <p className={s.collection__subTitle}>
                    Checkout our weekly updated trending collection.
                </p>
                <div className={s.collection__cards}>
                    {width > 960 && (
                        <>
                            <CollectionCard
                                title={'DSGN Animals'}
                                name={'MrFox'}
                                avatar={avatar['avatar9']}
                                img={[img['pic15'], img['pic14'], img['pic16']]}
                            />
                            <CollectionCard
                                title={'Magic Mushrooms'}
                                name={'Shroomie'}
                                avatar={avatar['avatar12']}
                                img={[img['pic25'], img['pic26'], img['pic27']]}
                            />
                            <CollectionCard
                                title={'Disco Machines'}
                                name={'BeKind2Robots'}
                                avatar={avatar['avatar16']}
                                img={[img['pic28'], img['pic29'], img['pic30']]}
                            />
                        </>
                    )}
                    {width < 960 && width > 680 && (
                        <>
                            <CollectionCard
                                title={'DSGN Animals'}
                                name={'MrFox'}
                                avatar={avatar['avatar9']}
                                img={[img['pic15'], img['pic14'], img['pic16']]}
                            />
                            <CollectionCard
                                title={'Magic Mushrooms'}
                                name={'Shroomie'}
                                avatar={avatar['avatar12']}
                                img={[img['pic25'], img['pic26'], img['pic27']]}
                            />
                        </>
                    )}
                    {width < 680 && (
                        <>
                            <CollectionCard
                                title={'DSGN Animals'}
                                name={'MrFox'}
                                avatar={avatar['avatar9']}
                                img={[img['pic15'], img['pic14'], img['pic16']]}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CollectionBlock;
