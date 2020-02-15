import React from 'react';
import styles from './Skills.module.css';
import ScrollableAnchor from 'react-scrollable-anchor'
const BlockTitle = props => {

    return(
        <div>
            <ScrollableAnchor id={'skills'}>
                <h1>{props.title}</h1>
            </ScrollableAnchor>
        </div>
        )

}

export default BlockTitle;
