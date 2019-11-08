import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Александр Дубяга</span>
                </div>
                <div className={styles.main}>
                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Vk</div>
                    <div>Instagram</div>
                </div>
                <div className={styles.acsess}>
                    <span>2019 Все права защищены</span>
                </div>

            </div>

        </div>
    );
}

export default Footer;
