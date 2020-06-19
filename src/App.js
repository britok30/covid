import React, { Component } from "react";
import Hero from "./components/Hero/Hero";
import CovidData from "./components/Data/CovidData";
import CovidCountryData from "./components/Data/CovidCountryData";
import "./App.css";

class App extends Component {
    state = {
        covidData: {},
    };

    render() {
        return (
            <div>
                <div className="hero">
                    <Hero />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <CovidData />
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <CovidCountryData />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
