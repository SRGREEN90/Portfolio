import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import Remote from "./remoteWork/Remotes";
import Contacts from "./contacts/Cntacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
