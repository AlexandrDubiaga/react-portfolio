import React from 'react';
import styles from './Skills.module.css';

const SkillsItem = props => {
    return (
        <div className={styles.photosBlocks}>
            <div>
                <img src={props.imgSrc}/>
            </div>
            <div>
                <span className={styles.descPhotos}>{props.title}</span>
            </div>
        </div>
    )
}

export default SkillsItem;
