import React from 'react';
import styles from './Contacts.module.css';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor'
import * as axios from "axios/index";
let nodemailer = require('nodemailer');


const Contacts = () => {
    let sendForm = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('text').value;
        axios.post(`https://app-send.herokuapp.com/send`,{name: name, email: email, message: message}
        ).then(() => {
                alert("Message Sent.");
        }).catch(e=>{
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
                            <div className={styles.inputs}><input placeholder={"Имя"} id="name" type="text"/></div>
                            <div className={styles.inputs}><input placeholder={"Email"} id="email" type="text"/></div>
                            <div className={styles.inputs}><textarea placeholder={"Сообщение..."} id="text"
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
