import React from 'react';
import styles from './Projects.module.css';

const ProjectItem = props => {
    return (
        <div className={styles.photosBlocks}>
            <div className={styles.imgButton}>
                <button className={styles.button}>Смотреть</button>
                <img className={styles.mainPicture}   src={props.imgSrc}/>

                <span className={styles.descPhotos}>{props.title}</span>
            </div>

        </div>
    )
}

export default ProjectItem;
