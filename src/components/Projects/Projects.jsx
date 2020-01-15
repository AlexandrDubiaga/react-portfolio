import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2>My Works</h2>
                <div className={styles.line}></div>
                <div className={styles.navigation}>
                    <a href="" className={styles.link}>All</a>
                    <a href="" className={styles.link}>Slideshow</a>
                    <a href="" className={styles.link}>Video</a>
                    <a href="" className={styles.link}>Images</a>
                </div>
                <div className={styles.projects}>
                    <ProjectItem imgSrc="https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg" title="My resume"/>
                    <ProjectItem imgSrc="https://www.beingeorge.com/jeffrey/assets/images/p2-2.jpg" title="Space"/>
                    <ProjectItem imgSrc="https://www.beingeorge.com/jeffrey/assets/images/p5-5.jpg" title="PopCorn"/>
                    <ProjectItem imgSrc="https://www.beingeorge.com/jeffrey/assets/images/p7-7.jpg" title="Cup"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
