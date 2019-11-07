import React from 'react';
import styles from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <div className={styles.contacts}>
                <div className={styles.sloganTitle}><span>Рассматриваю варианты удаленной работы</span></div>
                <div>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
