import React, { Component } from "react";
import Hero from "./components/Hero/Hero";
import CovidData from "./components/Data/CovidData";
import CovidCountryData from "./components/Data/CovidCountryData";
import CovidNews from "./components/News/CovidNews";
import SearchLocal from "./components/LocalFinder/SearchLocal";
import CovidImg "./components"
import { TwitterTimelineEmbed } from "react-twitter-embed";

import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import "./App.css";

class App extends Component {
    state = {
        chartData: {},
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios.get("https://api.covid19api.com/summary").then((res) => {
            this.setState({
                chartData: {
                    labels: [
                        "New Confirmed",
                        "Total Confirmed",
                        "New Deaths",
                        "Total Deaths",
                        "New Recovered",
                        "Total Recovered",
                    ],
                    datasets: [
                        {
                            label: "COVID Data",
                            data: [
                                res.data.Global.NewConfirmed,
                                res.data.Global.TotalConfirmed,
                                res.data.Global.NewDeaths,
                                res.data.Global.TotalDeaths,
                                res.data.Global.NewRecovered,
                                res.data.Global.TotalRecovered,
                            ],
                            backgroundColor: [
                                "rgb(0, 161, 171)",
                                "rgb(255, 82, 0)",
                                "rgb(228, 63, 90)",
                                "rgb(22, 129, 122)",
                                "rgb(255, 226, 188)",
                                "rgb(175, 139, 175)",
                            ],
                        },
                    ],
                },
            });
        });
    };

    render() {
        const { chartData } = this.state;
        return (
            <div>
                <div className="hero">
                    <Hero />
                </div>
                <div className="container-fluid">
                    <div className="row space">
                        <div className="col-md-4 col-lg-4 col-sm-4">
                            <CovidData />
                            <CovidImg />
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-8">
                            <div className="chartjs">
                                <HorizontalBar
                                    data={chartData}
                                    id="chart"
                                    width={100}
                                    height={80}
                                    options={{
                                        title: {
                                            display: true,
                                            text: "Quick Facts",
                                            fontSize: 24,
                                        },
                                        responsive: true,
                                        scales: {
                                            yAxes: [
                                                {
                                                    ticks: {
                                                        fontSize: 15,
                                                    },
                                                },
                                            ],
                                            xAxes: [
                                                {
                                                    ticks: {
                                                        fontSize: 15,
                                                    },
                                                },
                                            ],
                                        },
                                    }}
                                />
                            </div>

                            <div className="twitter">
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="who"
                                    theme="dark"
                                    options={{ height: 600 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 card-columns">
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
