import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from "./BlockTitle";
import SkillsItem from "./SkillsItem";
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor'
import reactImg from '../../pic/React.png'
import HtmlCss from '../../pic/HtmlCss.jpg'
import js from '../../pic/js.jpg'
import db from '../../pic/db.jpg'
import git from '../../pic/git.png'
import php from '../../pic/php.jpg'
import native from '../../pic/native.png'



let skills={
    react:{
        title:"React Redux, Redux Thunk, Redux Form, Fetch, Axios, Promises, TypeScript, Flux, HOC, REST APIs, Node.js",
        img:reactImg
    },
    htmlCss:{
        title:'CSS3, HTML5, css-modules, Flex-box, Adaptive',
        img:HtmlCss
    },
    js:{
        title:'Javascript ES6, OOP, MVC',
        img:js
    },
    database:{
        title:'MySQL, PostgreSQL',
        img:db
    },
    git:{
        title:'Git, BitBucket, Git Bash',
        img:git
    },
    php:{
        title:'Php, Laravell',
        img:php
    },
    native:{
        title:'React Native,\n' +
        '    Expo,\n' +
        '    render props,\n' +
        '    flex, hooks,\n' +
        '    ref,\n' +
        '    async func,\n' +
        '    React Navigation,\n' +
        '    hoc,\n' +
        '    Firebase,\n' +
        '    SqLlite,\n' +
        '    Android/iOS',
        img:native
    }



}

const Skills = () => {
    return (
        <div className={styles.skills}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title="Мои навыки "/>
                    <div className={styles.projects}>
                        <SkillsItem imgSrc={skills.native.img} title={skills.native.title}/>
                        <SkillsItem imgSrc={skills.react.img} title={skills.react.title}/>
                        <SkillsItem imgSrc={skills.htmlCss.img} title={skills.htmlCss.title}/>
                        <SkillsItem imgSrc={skills.js.img} title={skills.js.title}/>
                        <SkillsItem imgSrc={skills.database.img} title={skills.database.title}/>
                        <SkillsItem imgSrc={skills.git.img} title={skills.git.title}/>
                        <SkillsItem imgSrc={skills.php.img} title={skills.php.title}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
        ;
}

export default Skills;
