import "./WeatherTable.css";
import React from "react";
import Table from "../../components/Table";

function getBodyData(key, weathers) {
  return weathers.sol_keys
    .map((sol) => {
      if (key === "time") {
        return [new Date(weathers[sol]["Last_UTC"]).toDateString(), sol];
      }
      const { av, mn, mx } = weathers[sol][key];
      return [av, mn, mx];
    })
    .reverse();
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
              className="child-table"
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
      />
    </div>
  );
}
