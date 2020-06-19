import React, { Component } from "react";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="hero">
                <header className="hero-text">
                    <h1 className="hero-lead">Corona</h1>
                    <h2 className="hero-sublead">Viruse Disease (COVID-19)</h2>
                    <p className="hero-p">
                        Pray for the coronavirus victims. This virus was first
                        reported in Wuhan, Hubai, China on November 17th, 2019 &
                        on March, 11th, 2020, the World Health Organization
                        (WHO) declared the outbreak a pandemic.
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
