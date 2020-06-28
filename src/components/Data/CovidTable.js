import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

export default class CovidTable extends Component {
    state = {
        data: [],
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios.get("https://api.covid19api.com/summary").then((res) => {
            this.setState({ data: res.data.Countries });
        });
    };

    render() {
        const { data } = this.state;

        return (
            <div>
                <h2 className="covid-heading">World COVID-19 Stats</h2>
                <div className="moment">
                    As of: {moment().format("MMMM Do, YYYY")}
                </div>
                <div className="table-responsive">
                    <table className="table table-borderless table-dark table-hover covidtable ">
                        <thead>
                            <tr>
                                <th scope="col">Country</th>
                                <th scope="col">New Confirmed</th>
                                <th scope="col">Total Confirmed</th>
                                <th scope="col">New Deaths</th>
                                <th scope="col">Total Deaths</th>
                                <th scope="col">New Recovered</th>
                                <th scope="col">Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(function (country, key) {
                                return (
                                    <tr key={key}>
                                        <td>{country.Country}</td>
                                        <td className="new-confirmed">
                                            {Number(
                                                country.NewConfirmed
                                            ).toLocaleString()}
                                        </td>
                                        <td className="total-confirmed">
                                            {Number(
                                                country.TotalConfirmed
                                            ).toLocaleString()}
                                        </td>
                                        <td className="new-deaths">
                                            {Number(
                                                country.NewDeaths
                                            ).toLocaleString()}
                                        </td>
                                        <td className="total-deaths">
                                            {Number(
                                                country.TotalDeaths
                                            ).toLocaleString()}
                                        </td>
                                        <td className="new-recovered">
                                            {Number(
                                                country.NewRecovered
                                            ).toLocaleString()}
                                        </td>
                                        <td className="total-recovered">
                                            {Number(
                                                country.TotalRecovered
                                            ).toLocaleString()}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
