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
                    <p className="card-text city-text county-case">
                        County Cases:{" "}
                        {countyCase
                            ? Number(countyCase).toLocaleString()
                            : null}
                    </p>
                    <p className="card-text city-text county-death">
                        County Deaths:{" "}
                        {countyDeath
                            ? Number(countyDeath).toLocaleString()
                            : null}
                    </p>
                    <p className="card-text city-text state-case">
                        State Cases:{" "}
                        {stateCase ? Number(stateCase).toLocaleString() : null}
                    </p>
                    <p className="card-text city-text state-death">
                        State Deaths:{" "}
                        {stateDeath
                            ? Number(stateDeath).toLocaleString()
                            : null}
                    </p>
                    <p className="card-text city-text affected-counties">
                        Affected Counties:{" "}
                        {stateAffectedCounties
                            ? Number(stateAffectedCounties).toLocaleString()
                            : null}
                    </p>
                </div>
            </div>
        </div>
    );
}
