import React, { Component } from "react";
import axios from "axios";
import CovidTable from "./CovidTable";

class CovidCountryData extends Component {
    state = {
        data: [],
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios.get("https://api.covid19api.com/summary").then((res) => {
            console.log(res.data.Countries);
            this.setState({ data: res.data.Countries });
        });
    };

    render() {
        const { data } = this.state;

        return (
            <div>
                {data.map((country) => {
                    return <CovidTable />;
                })}
            </div>
        );
    }
}

export default CovidCountryData;
