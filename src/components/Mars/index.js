import "./Mars.css";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import WeatherTable from "./WeatherTable";
import {
  MARS_WEATHER_LOCATION_LINK,
  NASA_INSIGHT_LINK,
} from "../../utils/constants";
import ATag from "../ATag";
import InvalidData from "../InvalidData";

function constructWeatherTableHeader() {
  return (
    <div className="weather-table-header">
      <h2>
        Daily Weather at{" "}
        <ATag href={MARS_WEATHER_LOCATION_LINK} text="Elysium Planitia" />
      </h2>
      <h6>
        See NASA official reports:{" "}
        <ATag href={NASA_INSIGHT_LINK} text="NASA InSight" />
      </h6>
    </div>
  );
}

function constructLatestWeatherCard(weather) {
  const { sol, AT, Season, Last_UTC } = weather;
  const { mn, mx } = AT;

  return (
    <div className="latest-weather-content">
      <h3>{`SOL ${sol}`}</h3>
      <h4>{new Date(Last_UTC).toDateString()}</h4>

      <p>{Season}</p>
      <hr />

      <div className="temp">
        <p>{`Low: ${mn} °C`}</p>
        <p>{`High: ${mx} °C`}</p>
      </div>
    </div>
  );
}

const Mars = () => {
  const { nasaData } = useStaticQuery(graphql`
    query {
      nasaData {
        weathers {
          sol
          Season
          Last_UTC
          AT {
            av
            mn
            mx
          }
          PRE {
            av
            mn
            mx
          }
        }
      }
    }
  `);

  if (!isValidData(nasaData)) {
    return <InvalidData source={"NASA"} link={"https://mars.nasa.gov/insight/weather/"}/>
    // return <div>{nasaData.weathers[0].sol}</div>;
  }

  console.log(nasaData);

  const weathers = nasaData.weathers.sort(function (a, b) {
    return b.sol - a.sol;
  });

  return (
    <div className="mars">
      <div className="latest-weather shadow">
        <h4>Latest Weather on Mars</h4>
        {constructLatestWeatherCard(weathers[0])}
      </div>
      <div className="daily-weather-table shadow">
        {constructWeatherTableHeader()}
        <WeatherTable weathers={weathers} />
      </div>
    </div>
  );
};

function isValidData(nasaData) {
  if (nasaData.weathers.length === 1) {
    const data = nasaData.weathers[0];
    const {sol, Season, Last_UTC, AT, PRE} = data;
    
    if (sol === 404 && Season === 404 && Last_UTC === 404 && 
        AT.av === 404 && AT.mn === 404 && AT.mx === 404 &&
        PRE.av === 404 && PRE.mn === 404 && PRE.mx === 404) {
          return false;
        }
  }
  return true;
}

export default Mars;
