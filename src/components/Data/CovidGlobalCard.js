import React, { Fragment } from "react";

const CovidGlobalCard = (props) => {
    const {
        newConfirmed,
        totalConfirmed,
        newDeaths,
        totalDeaths,
        newRecovered,
        totalRecovered,
    } = props;

    return (
        <Fragment>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">Quick Stats</h1>
                    <h4 className="card-subtitle mb-2 text-muted">
                        New Confirmed
                    </h4>
                    <p className="card-text new-confirmed">
                        {Number(newConfirmed).toLocaleString()}
                    </p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        Total Confirmed
                    </h4>
                    <p className="card-text total-confirmed">
                        {Number(totalConfirmed).toLocaleString()}
                    </p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        New Deaths
                    </h4>
                    <p className="card-text new-deaths">
                        {Number(newDeaths).toLocaleString()}
                    </p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        Total Deaths
                    </h4>
                    <p className="card-text total-deaths">
                        {Number(totalDeaths).toLocaleString()}
                    </p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        New Recovered
                    </h4>
                    <p className="card-text new-recovered">
                        {Number(newRecovered).toLocaleString()}
                    </p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        Total Recovered
                    </h4>
                    <p className="card-text total-recovered">
                        {Number(totalRecovered).toLocaleString()}
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default CovidGlobalCard;
