import "./WeatherTable.css";
import React from "react";
import Table from "../Table";

function getBodyData(key, weathers) {
  return weathers.map((weather) => {
    if (key === "time") {
      return [new Date(weather["Last_UTC"]).toDateString(), weather.sol];
    }
    const { av, mn, mx } = weather[key];
    return [av, mn, mx];
  });
}

function constructBody(headers, weathers) {
  return (
    <tr>
      {Object.keys(headers).map((key, i) => {
        return (
          <td key={i}>
            <Table
              headers={headers[key]}
              rows={getBodyData(key, weathers)}
              bootstrap={false}
              className={`child-table ${key.toLowerCase()}-table`}
            />
          </td>
        );
      })}
    </tr>
  );
}

export default function WeatherTable({ weathers }) {
  const headers = {
    time: ["Date on Earth", "SOL"],
    AT: ["Average", "Min", "Max"],
    PRE: ["Average", "Min", "Max"],
  };
  return (
    <div className="weather-table table-responsive">
      <Table
        headers={["Time", "Temperature ( °C )", "Pressure ( Pa )"]}
        body={constructBody(headers, weathers)}
        bootstrap={true}
        className="parent-table"
      />
    </div>
  );
}
