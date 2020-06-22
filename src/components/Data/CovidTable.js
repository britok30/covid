import React from "react";

export default function CovidTable(props) {
    const { header } = props;
    return (
        <div>
            <h1 className>Stats by Country</h1>
            <table className="table table-striped table-dark covidtable">
                <thead>
                    <tr>
                        <th scope="col">{header}</th>
                        <th scope="col">Country</th>
                        <th scope="col">New Confirmed</th>
                        <th scope="col">Total Confirmed</th>
                        <th scope="col">Total Deaths</th>
                        <th scope="col">New Recovered</th>
                        <th scope="col">Total Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
