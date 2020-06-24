import React, { Component } from "react";
import axios from "axios";
import CovidNewsCard from "./CovidNewsCard";

export default class CovidNews extends Component {
    state = {
        news: {},
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios
            .get(
                "https://cors-anywhere.herokuapp.com/https://api.covidnow.com/v1/news/usa"
            )
            .then((res) => {
                this.setState({ news: res.data });
            });
    };

    render() {
        const { news } = this.state;

        return (
            <div>
                {Object.keys(news)
                    .slice(0, 9)
                    .map((keyName, i) => {
                        return (
                            <CovidNewsCard
                                key={i}
                                link={news[keyName].link}
                                title={news[keyName].title}
                                pubDate={news[keyName].pubDate}
                                source={news[keyName].source}
                            />
                        );
                    })}
            </div>
        );
    }
}
