import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Slogan from "./Components/Slogan/Slogan";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Particles from "react-particles-js";

const particlesOptions = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

function App() {
    return (
        <div className="App">
                <Particles className="particles"
                           params={particlesOptions}/>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
    );
}

export default App;
