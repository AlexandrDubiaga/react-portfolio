import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";
import social from "../img/social.jpg"
import todolist from "../img/todolist.png"

const Projects = () => {
    let obj = {
        network: {
            link: 'https://www.google.com.ua/?hl=ru',
            imgSrc: social,
            title: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
        },
        todolist: {
            link: 'https://www.youtube.com/',
            imgSrc: todolist,
            title: 'Space'
        },
        calculator: {
            link: 'https://www.rambler.ru/',
            imgSrc: 'https://oboi-3d.ru/image//data/wallpapers/abstrakcii/ABS038.jpg',
            title: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled'
        },


    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <h2>My Works</h2>
                    <div className={styles.line}></div>
                    <div className={styles.navigation}>
                        <a href="" className={styles.link}>All</a>
                        <a href="" className={styles.link}>Slideshow</a>
                        <a href="" className={styles.link}>Video</a>
                        <a href="" className={styles.link}>Images</a>
                    </div>
                </div>
                <div className={styles.projects}>
                    <ProjectItem {...obj.network}/>
                    <ProjectItem  {...obj.todolist}/>
                    <ProjectItem {...obj.calculator}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
