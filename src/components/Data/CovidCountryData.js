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

    getKeys = () => {
        return console.log(Object.keys(this.state.data[0]));
    };

    getHeader = () => {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>;
        });
    };

    render() {
        const { data } = this.state;

        return (
            <div>
                <CovidTable header={this.getHeader} />
            </div>
        );
    }
}

export default CovidCountryData;
