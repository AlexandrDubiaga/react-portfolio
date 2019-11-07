import React from 'react';
import styles from './Main.module.css';

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет</span>
                    <span>Меня зовут,Александр </span>
                    <span>Я React разработчик</span>
                </div>
                <div className={styles.photo}>
                    <img src="https://www.beingeorge.com/jeffrey/assets/images/about.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
