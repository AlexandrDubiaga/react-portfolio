import React from 'react';
import styles from './Footer.module.css';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Fade left>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Александр Дубяга</span>
                </div>
                <div className={styles.main}>
                    <a href="https://www.facebook.com/profile.php?id=100002788131536"> <div className={styles.facebook}></div></a>
                    <a href="https://twitter.com/Solmir16"> <div className={styles.twitter}></div></a>
                    <a href="https://vk/alexcardo"> <div className={styles.vk}></div></a>
                    <a href="https://www.instagram.com/solmir__/?hl=ru"> <div className={styles.instagram}></div></a>
                </div>
                <div className={styles.acsess}>
                    <span>2019 Все права защищены</span>
                </div>

            </div>
        </Fade>
        </div>
    );
}

export default Footer;
