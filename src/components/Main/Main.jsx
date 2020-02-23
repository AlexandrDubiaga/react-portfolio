import React from 'react';
import styles from './Main.module.css';
import MyFoto from '../../pic/My.jpg'
import ScrollableAnchor from 'react-scrollable-anchor'


const Main = () => {
    return (
        <ScrollableAnchor id={'main'}>
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Добрый день</span>
                    <span>Я <span>Александр! </span>   </span>
                    <h1>React Redux разработчик</h1>
                </div>
                <div className={styles.photo}>
                    <img src={MyFoto} alt=""/>
                </div>
            </div>
        </div>
        </ScrollableAnchor>
    );
}

export default Main;
