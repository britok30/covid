import React, { Component } from "react";
import Hero from "./components/Hero/Hero";
import CovidData from "./components/Data/CovidData";
import CovidTable from "./components/Data/CovidTable";
import CovidNews from "./components/News/CovidNews";
import SearchLocal from "./components/LocalFinder/SearchLocal";
import CovidStatesTable from "./components/Data/CovidStatesTable";
import Footer from "./components/Footer";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import axios from "axios";
import { Pie } from "react-chartjs-2";
import "./App.css";

class App extends Component {
    state = {
        chartData: {},
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios.get("//api.covid19api.com/summary").then((res) => {
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
                                "rgba(0, 161, 171, 0.5)",
                                "rgba(255, 82, 0, 0.5)",
                                "rgba(228, 63, 90, 0.5)",
                                "rgba(22, 129, 122, 0.5)",
                                "rgba(255, 226, 188, 0.5)",
                                "rgba(175, 139, 175, 0.5)",
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
                        </div>
                        <div className="col-md-8 col-lg-8 col-sm-8">
                            <div className="chartjs">
                                <Pie
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
                                        maintainAspectRatio: true,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-8 col-sm-8 card-columns">
                            <h2 className="covid-heading">Top Covid News</h2>
                            <CovidNews />
                        </div>
                        <div className="twitter col-md-4 col-lg-4 col-sm-4">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="who"
                                theme="dark"
                                options={{ height: 600 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <SearchLocal />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <CovidTable />
                        </div>
                    </div>
                </div>
                <div className="container-fluid datamap">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <CovidStatesTable />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
