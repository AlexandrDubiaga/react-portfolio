import React from 'react';
import styles from './Skills.module.css';

const SkillsItem = props => {
    return (
        <div className={styles.photosBlocks}>
            <img src={props.imgSrc}/>
            <span className={styles.descPhotos}>{props.title}</span>
        </div>
    )
}

export default SkillsItem;
