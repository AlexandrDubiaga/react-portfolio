import React from 'react';
import styles from './Slogan.module.css';
import Fade from 'react-reveal/Fade';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <Fade big>
            <div className={styles.contacts}>
                <div className={styles.sloganTitle}><span>Рассматриваю Bарианты Удаленной Работы</span></div>
                <div className={styles.button}>
                    <span><a className={styles.buttonShow} href=""> Нанять меня </a></span>
                </div>
            </div>
        </Fade>
        </div>
    );
}

export default Slogan;
