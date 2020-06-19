import React from "react";
import moment from "moment";
import "../../App.css";

function Hero() {
    return (
        <div>
            <header className="hero-text">
                <div className="moment">{moment().format("MMMM Do, YYYY")}</div>
                <h1 className="hero-lead">Corona</h1>
                <h2 className="hero-sublead">Viruse Disease (COVID-19)</h2>
                <p className="hero-p">
                    Pray for the coronavirus victims. This virus was first
                    reported in Wuhan, Hubai, China on November 17th, 2019 & on
                    March, 11th, 2020, the World Health Organization (WHO)
                    declared the outbreak a pandemic.
                </p>
                <p className="hero-p-2">
                    Data gathered from{" "}
                    <a href="https://covid19api.com/" className="hero-source">
                        COVID API
                    </a>
                    , which is sourced from John Hopkins CSSE.
                </p>
            </header>
        </div>
    );
}

export default Hero;
