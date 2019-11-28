import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <h1>My Works</h1>
            <div className={styles.navigation}>
                <a href="" className={styles.link}>All</a>
                <a href="" className={styles.link}>Slideshow</a>
                <a href="" className={styles.link}>Video</a>
                <a href="" className={styles.link}>Images</a>
            </div>
            <div className={styles.projects}>
            <div className={styles.photosBlocks}>
                <img src="https://www.beingeorge.com/jeffrey/assets/images/p1-1.jpg"/>
                <span className={styles.descPhotos}>My resume</span>
            </div>
            <div className={styles.photosBlocks}>
                <img src="https://www.beingeorge.com/jeffrey/assets/images/p2-2.jpg"/>
                <span className={styles.descPhotos}>Space</span>
            </div>
            <div className={styles.photosBlocks}>
                <img src="https://www.beingeorge.com/jeffrey/assets/images/p5-5.jpg"/>
                <span className={styles.descPhotos}>PopCorn</span>
            </div>
            <div className={styles.photosBlocks}>
                <img src="https://www.beingeorge.com/jeffrey/assets/images/p7-7.jpg"/>
                <span className={styles.descPhotos}>Cup</span>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Projects;
