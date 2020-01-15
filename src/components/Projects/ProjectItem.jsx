import React from 'react';
import styles from './Projects.module.css';

const ProjectItem = props => {
    return (
        <div className={styles.photosBlocks}>
            <img src={props.imgSrc}/>
            <span className={styles.descPhotos}>{props.title}</span>
        </div>
    )
}

export default ProjectItem;
