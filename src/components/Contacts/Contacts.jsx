import React, {useState, useEffect} from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor'
import * as axios from "axios/index";
let nodemailer = require('nodemailer');


const Contacts = () => {
    const [message, sendMessage] = useState(false);
    const [disabledButton, setDisabled] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    useEffect(() => {
        if (name.length && email.length && text.length) {
            setDisabled(false)
        }
    });
    let validator = (func, currentValue, value, lenght) => {
        if (currentValue.length === 0) {
            func('');
            sendMessage(`Поле ${value} не должно быть пустым`);
            setDisabled(true)
        } else if (currentValue.length > lenght) {
            sendMessage(`Доступно ${lenght} символов`);
            setDisabled(true)
        } else {
            sendMessage('');
            func(currentValue);
        }
    }
    let changeName = (e) => {
        validator(setName, e.currentTarget.value, 'имя', 40);
    }
    let changeEmail = (e) => {
      /*  /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i*/
        validator(setEmail, e.currentTarget.value, 'email', 25);
    }
    let changeText = (e) => {
        validator(setText, e.currentTarget.value, 'text', 50);
    }
    let sendForm = (e) => {
        e.preventDefault();
        axios.post(`https://app-send.herokuapp.com/send`, {name: name, email: email, message: text}
        ).then(() => {
            sendMessage('Сообщение отправленно');
            setName('');
            setEmail('');
            setText('');
            setDisabled(true)
        }).catch(e => {
            sendMessage('Ошибка' + e);
        })
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
                            <div className={styles.errorMessage}>{message}</div>
                            <div className={styles.inputs}><input value={name}
                                                                  onChange={changeName}
                                                                  placeholder={"Имя"} id="name" type="text"/></div>
                            <div className={styles.inputs}><input value={email} placeholder={"Email"}
                                                                  onChange={changeEmail}
                                                                  id="email" type="text"/></div>
                            <div className={styles.inputs}><textarea value={text}
                                                                     onChange={changeText}
                                                                     placeholder={"Сообщение..."} id="text"
                                                                     type="text"/>
                            </div>
                            <div>
                                <button disabled={disabledButton} onClick={sendForm} className={styles.buttonSubmit}>
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fade>

        </div>
    );
}

export default Contacts;
