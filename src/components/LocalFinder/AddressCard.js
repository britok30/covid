import React from "react";

export default function AddressCard(props) {
    const {
        city,
        state,
        county,
        countyCase,
        countyDeath,
        stateCase,
        stateDeath,
        stateAffectedCounties,
    } = props;

    return (
        <div>
            <div className="card city-card">
                <div className="card-body">
                    <h5 className="card-title city-title">
                        {city ? city : county}
                    </h5>
                    <p className="card-text city-text">State: {state}</p>
                    <p className="card-text city-text">
                        County Cases: {countyCase ? countyCase : null}
                    </p>
                    <p className="card-text city-text">
                        County Deaths: {countyDeath ? countyDeath : null}
                    </p>
                    <p className="card-text city-text">
                        State Cases: {stateCase ? stateCase : null}
                    </p>
                    <p className="card-text city-text">
                        State Deaths: {stateDeath ? stateDeath : null}
                    </p>
                    <p className="card-text city-text">
                        Affected Counties:{" "}
                        {stateAffectedCounties ? stateAffectedCounties : null}
                    </p>
                </div>
            </div>
        </div>
    );
}
