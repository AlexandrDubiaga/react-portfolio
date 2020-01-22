import React from 'react';
import styles from './Main.module.css';

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
                    <img src="https://movienews.film/wp-content/uploads/2018/10/4reit1-e1538650431340.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
