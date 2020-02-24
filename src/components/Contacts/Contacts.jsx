import React, {useState} from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor'
import * as axios from "axios/index";
let nodemailer = require('nodemailer');


const Contacts = () => {
    const [message, sendMessage] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    let sendForm = (e) => {
        e.preventDefault();
        if (!name) {
            sendMessage('Полe имя должно быть заполнено');
        }else if (!email) {
            sendMessage('Полe email должно быть заполнено');
        } else if (!text) {
            sendMessage('Полe text должно быть заполнено');
        } else {
            axios.post(`https://app-send.herokuapp.com/send`, {name: name, email: email, message: text}
            ).then(() => {
                sendMessage('Сообщение отправленно');
                setName('');
                setEmail('');
                setText('');
            }).catch(e => {
                sendMessage('Ошибка' + e);
            })
        }
    }
    return (
        <div className={styles.contacts}>
            <Fade right>
                <div className={styles.formContent}>
                    <ScrollableAnchor id={'contacts'}>
                        <div className={styles.titleContacts}>Контакты</div>
                    </ScrollableAnchor>
                    <div className={styles.form}>
                        <form>
                            <div className={styles.inputs}>{message}</div>
                            <div className={styles.inputs}><input value={name}
                                                                  onChange={(e) => setName(e.currentTarget.value)}
                                                                  placeholder={"Имя"} id="name" type="text"/></div>
                            <div className={styles.inputs}><input value={email} placeholder={"Email"}
                                                                  onChange={(e) => setEmail(e.currentTarget.value)}
                                                                  id="email" type="text"/></div>
                            <div className={styles.inputs}><textarea value={text}
                                                                     onChange={(e) => setText(e.currentTarget.value)}
                                                                     placeholder={"Сообщение..."} id="text"
                                                                     type="text"/>
                            </div>
                            <div>
                                <button onClick={sendForm} className={styles.buttonSubmit}>Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fade>

        </div>
    );
}

export default Contacts;
