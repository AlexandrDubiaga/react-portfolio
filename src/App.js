import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Siogan from "./components/Siogan/Siogan";

const App =() => {
    return (
        <div className={styles.App}>
            <div className="portfolio">
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Siogan />
            </div>
        </div>
    );
}

export default App;
