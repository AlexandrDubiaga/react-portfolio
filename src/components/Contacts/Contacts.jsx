import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <Fade right>

                <div className={styles.formContent}>
                    <ScrollableAnchor id={'contacts'}>
                        <div className={styles.titleContacts}>Контакты</div>
                    </ScrollableAnchor>
                        <div className={styles.form}>
                            <form>
                                <div className={styles.inputs}><input placeholder={"Имя"} type="text"/></div>
                                <div className={styles.inputs}><input placeholder={"Email"} type="text"/></div>
                                <div className={styles.inputs}><textarea placeholder={"Сообщение..."} type="text"/>
                                </div>
                                <div>
                                    <button className={styles.buttonSubmit}>Отправить</button>
                                </div>
                            </form>
                        </div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;
