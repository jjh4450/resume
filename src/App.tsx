import React from 'react'
import './App.css'
import Resume from "./pages/Resume.tsx";
import {contacts, name, title} from "./data/profile.ts";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {
    return (
            <div className="row justify-content-center">
                <div className="col-12 col-md-11 col-lg-11">
                    <Header name={name} title={title} contacts={contacts}/>
                    <Resume/>
                    <Footer/>
                </div>
            </div>
    )
}

export default App