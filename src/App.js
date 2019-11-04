import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App =() => {
    return (
        <div className={styles.App}>
            <div className="portfolio">
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default App;
