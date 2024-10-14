import React, {useState} from 'react'
import './App.css'
import Resume from "./pages/Resume.tsx";
import {contacts, name, title} from "./data/profile.ts";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {
    return (
        <>
            <Header name={name} title={title} contacts={contacts}/>
            <Resume/>
            <Footer/>
        </>
    )
}

export default App
