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
                    <h6 className="card-subtitle mb-2 text-muted">
                        New Confirmed
                    </h6>
                    <p className="card-text">{totalDeaths}</p>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Total Deaths
                    </h6>
                    <p className="card-text">{totalDeaths}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default CovidGlobalCard;
