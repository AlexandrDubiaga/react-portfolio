import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className={styles.App}>
            <div className="portfolio">
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Slogan />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;