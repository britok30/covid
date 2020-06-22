import React, { Component } from "react";
import Hero from "./components/Hero/Hero";
import CovidData from "./components/Data/CovidData";
import CovidCountryData from "./components/Data/CovidCountryData";
import CovidNews from "./components/News/CovidNews";
import SearchLocal from "./components/LocalFinder/SearchLocal";
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
                <div className="container-fluid">
                    <div className="row space">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <CovidData />
                        </div>

                        <div className="col-md-8 card-columns">
                            <h2 className="covid-heading">Top Covid News</h2>
                            <CovidNews />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <SearchLocal />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <CovidCountryData />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
