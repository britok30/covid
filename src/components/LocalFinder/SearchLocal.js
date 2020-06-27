import React, { Component } from "react";
import axios from "axios";
import AddressCard from "./AddressCard";

export default class SearchLocal extends Component {
    state = {
        address: "Miami",
        results: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { address } = this.state;
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.covidnow.com/v1/local/finder?address=${address}`
            )
            .then((res) => {
                console.log([res.data]);
                this.setState({ results: [res.data] });
            });
    };

    handleChange = (e) => {
        this.setState({ address: e.target.value });
    };

    render() {
        const { results } = this.state;

        return (
            <div>
                <div className="row space">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <h2 className="covid-heading">Search City/County</h2>
                        <form
                            className="form"
                            onSubmit={this.handleSubmit}
                            autoComplete="off"
                        >
                            <input
                                className="localinput form-control"
                                id="contain_word"
                                name="localfinder"
                                type="text"
                                value={this.state.address}
                                placeholder="Please enter address to obtain COVID results"
                                onChange={this.handleChange}
                            />
                            <button
                                onClick={this.handleSubmit}
                                className="btn btn-light submit-btn"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        {results.map((result, i) => {
                            return (
                                <AddressCard
                                    key={i}
                                    city={result.info.locality}
                                    state={result.info.state}
                                    county={result.info.county}
                                    countyCase={result.cases.county.confirmed}
                                    countyDeath={result.cases.county.deaths}
                                    stateCase={result.cases.state.confirmed}
                                    stateDeath={result.cases.state.deaths}
                                    stateAffectedCounties={
                                        result.cases.state.affectedCounties
                                    }
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
