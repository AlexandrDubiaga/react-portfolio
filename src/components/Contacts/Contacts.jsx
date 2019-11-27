import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.formContent}>
                <div className={styles.titleContacts}>Контакты</div>
                <div className={styles.form}>
                    <form>
                        <div className={styles.inputs}><input type="text"/></div>
                        <div className={styles.inputs}><input type="text"/></div>
                        <div className={styles.inputs}><textarea type="text"/></div>
                        <div><button>Отправить</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;