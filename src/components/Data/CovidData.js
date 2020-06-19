import React, { Component } from "react";
import axios from "axios";
import CovidGlobalCard from "./CovidGlobalCard";

class CovidData extends Component {
    state = {
        data: [],
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios.get("https://api.covid19api.com/summary").then((res) => {
            console.log(res.data.Global);
            this.setState({ data: res.data.Global });
        });
    };

    render() {
        const { data } = this.state;

        return (
            <div>
                <CovidGlobalCard
                    newConfirmed={data.NewConfirmed}
                    totalConfirmed={data.TotalConfirmed}
                    newDeaths={data.NewDeaths}
                    totalDeaths={data.TotalDeaths}
                    newRecovered={data.NewRecovered}
                    totalRecovered={data.TotalRecovered}
                />
            </div>
        );
    }
}

export default CovidData;
