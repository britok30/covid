import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

class CovidStatesTable extends Component {
    state = {
        data: [],
    };

    componentDidMount = () => {
        this.fetchData();
    };

    fetchData = () => {
        axios
            .get("//covidtracking.com/api/v1/states/current.json")
            .then((res) => {
                console.log(res.data);
                this.setState({ data: res.data });
            });
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <h2 className="covid-heading">U.S. Covid Stats</h2>
                <div className="moment">
                    As of: {moment().format("MMMM Do, YYYY")}
                </div>
                <div className="table-responsive">
                    <table className="table table-borderless table-dark table-hover covidtable ">
                        <thead>
                            <tr>
                                <th scope="col">State</th>
                                <th scope="col">
                                    Positive (Positive Increase)
                                </th>
                                <th scope="col">
                                    Negative (Negative Increase)
                                </th>
                                <th scope="col">Death (Death Increase)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(function (state, key) {
                                return (
                                    <tr key={key}>
                                        <td>{state.state}</td>
                                        <td className="new-confirmed">
                                            {Number(
                                                state.positive
                                            ).toLocaleString()}
                                            {"  "}({"+"}
                                            {Number(
                                                state.positiveIncrease
                                            ).toLocaleString()}
                                            )
                                        </td>
                                        <td className="total-confirmed">
                                            {Number(
                                                state.negative
                                            ).toLocaleString()}
                                            {"  "}({"+"}
                                            {Number(
                                                state.negativeIncrease
                                            ).toLocaleString()}
                                            )
                                        </td>
                                        <td className="new-deaths">
                                            {Number(
                                                state.death
                                            ).toLocaleString()}
                                            {"  "}({"+"}
                                            {Number(
                                                state.deathIncrease
                                            ).toLocaleString()}
                                            )
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

export default CovidStatesTable;
