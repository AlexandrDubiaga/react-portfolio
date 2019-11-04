import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";

const App =() => {
    return (
        <div className={styles.App}>
            <div className="portfolio">
                <Header />
                <Main />
                <Skills />
            </div>
        </div>
    );
}

export default App;
