import React from 'react';
import s from './Account.module.css';
import img from '../../assets/img/Create.jpg';
import Button from '../Button/Button';
import user from '../../assets/img/icon/User1.svg';
import massage from '../../assets/img/icon/EnvelopeSimple1.svg';
import pass from '../../assets/img/icon/LockKey.svg';
import passConfirm from '../../assets/img/icon/LockKey1.svg';

const CreateAccount = ({ setUser }) => {
    return (
        <div className={s.account__container}>
            <img src={img} alt='img' className={s.account__img} />
            <div className={s.account__info}>
                <h2 className={s.info__title}>Create account</h2>
                <p className={s.info__subTitle}>
                    Welcome! enter your details and start creating, collecting and selling NFTs.
                </p>
                <div className={s.info__form}>
                    <form className={s.form}>
                        <div className={s.input_wrap}>
                            <img src={user} alt='user' className={s.input_img} />
                            <input type='text' placeholder='Username' className={s.input} />
                        </div>
                        <div className={s.input_wrap}>
                            <img src={massage} alt='massage' className={s.input_img} />
                            <input type='email' placeholder='Email Address' className={s.input} />
                        </div>
                        <div className={s.input_wrap}>
                            <img src={pass} alt='pass' className={s.input_img} />
                            <input type='password' placeholder='Password' className={s.input} />
                        </div>
                        <div className={s.input_wrap}>
                            <img src={passConfirm} alt='passConfirm' className={s.input_img} />
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className={s.input}
                            />
                        </div>
                    </form>
                    <Button title={'Create account'} />
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
