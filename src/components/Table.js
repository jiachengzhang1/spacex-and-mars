import React from "react";

const Table = ({ launches }) => {
    const launchTableRows = launches.map(
        ({
            id,
            flight_number,
            launchpad,
            name,
            rocket,
            success,
            upcomming,
            date_utc,
        }) => {
            const { name: rocketName } = rocket;
            const { full_name } = launchpad;
            return (
                <tr key={id}>
                    <td>{flight_number}</td>
                    <td>{name}</td>
                    <td>{getStatus(upcomming, success)}</td>
                    <td>{rocketName}</td>
                    <td>{full_name}</td>
                    <td>{getDateString(date_utc)}</td>
                </tr>
            );
        }
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>FLIGHT #</th>
                    <th>NAME</th>
                    <th>OUTCOME</th>
                    <th>ROCKET</th>
                    <th>PAD</th>
                    <th>DATE</th>
                </tr>
            </thead>
            <tbody>{launchTableRows}</tbody>
        </table>
    );
};

function getStatus(upcomming, success) {
    if (upcomming) {
        return "Upcomming";
    }
    if (success !== null) {
        return success ? "Success" : "Failed";
    }
    return "Unknown";
}

function getDateString(date) {
    const d = new Date(date).toDateString().split(" ");
    return `${d[1]}. ${d[2]} ${d[3]}`;
}

export default Table;
