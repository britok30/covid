import React, { Component } from "react";
import axios from "axios";
import Hero from "./components/Hero/Hero";
import "./App.css";

class App extends Component {
    state = {
      data: {}
    };

    componentDidMount() {
        //Sffgfgsg
    }

    axios.get('https://api.covid19api.com/')

    render() {
        return (
            <div>
                <div className="hero">
                    <Hero />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <h1>HI</h1>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <h1>HI</h1>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <h1>HI</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
