import "./Mars.css";
import _ from "lodash";
import React from "react";
import nasa from "../apis/nasa";
import WeatherTable from "./WeatherTable";

export default class Mars extends React.Component {
  state = { weathers: {} };
  componentDidMount() {
    this.getResponse();
  }
  getResponse = async () => {
    const response = await nasa.get("/insight_weather/", {
      params: {
        ver: "1.0",
        feedtype: "json",
        api_key: process.env.REACT_APP_NASA_API_KEY,
      },
    });
    this.setState({ weathers: response.data });
  };

  getWeatherTable() {
    if (_.isEmpty(this.state.weathers)) {
      return null;
    }
    return <WeatherTable weathers={this.state.weathers} />;
  }

  getLatestWeather() {
    if (_.isEmpty(this.state.weathers)) {
      return null;
    }
    const { sol_keys } = this.state.weathers;
    const latestKey = Math.max(...sol_keys);
    const { AT, Season, Last_UTC } = this.state.weathers[latestKey];
    const { mn, mx } = AT;
    return (
      <div className="latest-weather-content">
        <h3>{`SOL ${latestKey}`}</h3>
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

  render() {
    return (
      <div className="mars">
        <div className="mars-temp">
          {/* <div className="col col-md-12"> */}
          <div className="weather-card">
            <div className="latest-weather">
              <h2>Latest Weather on Mars</h2>
              {this.getLatestWeather()}
            </div>
          </div>

          <div className="daily-weather-table">
            <h2>
              Daily Weather at{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.nasa.gov/image-feature/jpl/pia22232/insight-s-landing-site-elysium-planitia"
              >
                Elysium Planitia
              </a>
            </h2>
            <h6>
              See NASA official reports:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://mars.nasa.gov/insight/weather/"
              >
                NASA InSight
              </a>
            </h6>
            {this.getWeatherTable()}
          </div>
          <div className="elysium-planitia"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
