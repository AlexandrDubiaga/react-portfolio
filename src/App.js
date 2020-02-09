import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Particles from 'react-particles-js';
const particlesOut={
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        }
    }
}

const App = () => {
    return (
        <div className={styles.App}>
                <Particles className={styles.particles} params={particlesOut}/>
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Slogan />
                <Contacts />
                <Footer />
        </div>
    );
}

export default App;
