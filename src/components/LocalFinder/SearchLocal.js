import React, { Component } from "react";
import axios from "axios";

export default class SearchLocal extends Component {
    state = {
        address: "",
        results: {},
    };

    handleSubmit = (e) => {
        const { address } = this.state;
        e.preventDefault();

        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.covidnow.com/v1/local/finder?address=${address}`
            )
            .then((res) => {
                console.log(res.data);
                this.setState({ results: res.data });
            });
    };

    handleChange = (e) => {
        this.setState({ address: e.target.value });
    };

    render() {
        return (
            <div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                    <h2 className="covid-heading">Search Address</h2>
                    <form action="">
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
            </div>
        );
    }
}
