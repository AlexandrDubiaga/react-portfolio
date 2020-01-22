import React from 'react';
import styles from './Projects.module.css';

const ProjectItem = props => {
    return (
        <div className={styles.photosBlocks}>
            <div className={styles.imgButton}>
                <img  className={styles.ddd} src={props.imgSrc}/>
                <button className={styles.button}>Смотреть</button>
                <span className={styles.descPhotos}>{props.title}</span>
            </div>

        </div>
    )
}

export default ProjectItem;
