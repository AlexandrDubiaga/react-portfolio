import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";
import social from "../img/social.jpg"
import todolist from "../img/todolist.png"
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor'
import counter from '../../pic/counter.png'

const Projects = () => {
    let obj = {
        network: {
            link: 'https://github.com/AlexandrDubiaga/Network',
            imgSrc: social,
            title: 'Социальная сеть(Beta).Разрабатывается с использование следующих технологий: ' +
            'JavaScript  ES6, \n' +
            'React Redux, ReduxThunk, Redux Form, Reselect, connect, compose, context,\n' +
            'Flux\n' +
            'HOC\n' +
            'CSS3, HTML5, сss-modules\n' +
            'Node.js\n'+
            'В этом проекте разработана авторизация, работа с пользователями(удаление, добавление, редактирование). REST APIs,Fetch, Axios, Promises'
        },
        todolist: {
            link: 'https://github.com/AlexandrDubiaga/TypeScript',
            imgSrc: todolist,
            title: 'Лист заданий. Был разработан с использование следующих технологий: ' +
            'JavaScript  ES6, \n' +
            'React Redux, ReduxThunk, Redux Form\n' +
            'Fetch, Axios, Promises\n' +
            'TypeScript\n' +
            'Flux\n' +
            'HOC\n' +
            'CSS3, HTML5, modules, flex-box, adaptive\n' +
            'REST APIs, Node.js\n'
        },
        counter: {
            link: 'https://github.com/AlexandrDubiaga/new_counter',
            imgSrc: counter,
            title: 'Счётчик.Используемые технологии:' +
            'React, localstorage, state, json'
        },


    }
    return (
        <div className={styles.wrapper}>
            <Fade clear>
                <div className={styles.container}>
                    <div className={styles.titleBlock}>
                        <ScrollableAnchor id={'projects'}>
                            <h2>Мои работы</h2>
                        </ScrollableAnchor>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.projects}>
                        <ProjectItem {...obj.network}/>
                        <ProjectItem  {...obj.todolist}/>
                        <ProjectItem {...obj.counter}/>
                    </div>
                </div>

            </Fade>

        </div>
    );
}

export default Projects;
