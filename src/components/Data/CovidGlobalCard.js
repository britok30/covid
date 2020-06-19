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
                    <p className="card-text new-confirmed">{newConfirmed}</p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        Total Confirmed
                    </h4>
                    <p className="card-text total-confirmed">
                        {totalConfirmed}
                    </p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        New Deaths
                    </h4>
                    <p className="card-text new-deaths">{newDeaths}</p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        Total Deaths
                    </h4>
                    <p className="card-text total-deaths">{totalDeaths}</p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        New Recovered
                    </h4>
                    <p className="card-text new-recovered">{newRecovered}</p>

                    <h4 className="card-subtitle mb-2 text-muted">
                        Total Recovered
                    </h4>
                    <p className="card-text total-recovered">
                        {totalRecovered}
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default CovidGlobalCard;
