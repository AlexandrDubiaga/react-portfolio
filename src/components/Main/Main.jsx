import React from 'react';
import styles from './Main.module.css';
import MyFoto from '../../pic/My.jpg'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Я <span>Александр! </span>   </span>
                    <h1>Я React разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <img src={MyFoto} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
