import "./WeatherTable.css";
import React from "react";
import Table from "./Table";

const getBodyData = (key, weathers) => {
  return weathers.sol_keys.reverse().map((sol) => {
    if (key === "time") {
      return [new Date(weathers[sol]["Last_UTC"]).toDateString(), sol];
    }
    const { av, mn, mx } = weathers[sol][key];
    return [av, mn, mx];
  });
};

const constructBody = (headers, weathers) => {
  return Object.keys(headers).map((key) => {
    return (
      <td>
        <Table
          headers={headers[key]}
          rows={getBodyData(key, weathers)}
          bootstrap={false}
          className="child-table"
        />
      </td>
    );
  });
};

const WeatherTable = ({ weathers }) => {
  const headers = {
    time: ["Date on Earth", "SOL"],
    AT: ["Average", "Min", "Max"],
    PRE: ["Average", "Min", "Max"],
  };
  return (
    <div className="weather-table">
      <Table
        headers={["Time", "Temperature ( °C )", "Pressure ( Pa )"]}
        body={constructBody(headers, weathers)}
        bootstrap={true}
      />
    </div>
  );
};

export default WeatherTable;
