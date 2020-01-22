import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";

const Projects = () => {
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
                    <ProjectItem imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-iV0IF23D6sDiBVJuUeleIoslsQbQE1efME0S8pQ6uDV8v_L&s" title="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."/>
                    <ProjectItem imgSrc="http://fanoboi.com/3D/193/abstract-green-background-wallpaper-1366x768.jpg" title="Space"/>
                    <ProjectItem imgSrc="https://oboi-3d.ru/image//data/wallpapers/abstrakcii/ABS038.jpg" title="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled"/>
                    <ProjectItem imgSrc="https://fotooboi.org.ua/images/product_images/info_images/fotooboi-pastelnaya-abstrakciya-1057.jpg" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
