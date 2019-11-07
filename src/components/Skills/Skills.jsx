import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <span>Professional skills</span>
                </div>
                <div className={styles.imges}>
                    <div className={styles.imgJs}>
                        <div>
                            <img src="https://i.udemycdn.com/course/240x135/1411694_0862.jpg" />
                        </div>
                        <div>
                            <span>My Skills</span>
                        </div>
                    </div>

                    <div className={styles.imgHtml}>
                        <div>
                            <img
                                src="data:image/jpeg;base64,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"/>
                        </div>
                        <div>
                            <span>Skills descriptions</span>
                        </div>
                    </div>
                    <div className={styles.descTitle}>
                        <span>Skills descriptions</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;
