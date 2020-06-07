import "./Mars.css";
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import WeatherTable from "./WeatherTable";
import {
  MARS_WEATHER_LOCATION_LINK,
  NASA_INSIGHT_LINK,
} from "../../utils/constants";
import { fetchMarsWeather } from "../../actions";
import ATag from "../../components/ATag";

class Mars extends React.Component {
  componentDidMount() {
    this.props.fetchMarsWeather();
  }

  constructWeatherTableHeader() {
    return (
      <div>
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

  constructWeatherTable(weathers) {
    if (_.isEmpty(weathers)) {
      return null;
    }
    return <WeatherTable weathers={weathers} />;
  }

  constructLatestWeatherCard(weathers) {
    if (_.isEmpty(weathers)) {
      return null;
    }

    const latestKey = Math.max(...weathers.sol_keys);
    const { AT, Season, Last_UTC } = weathers[latestKey];
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
    const marsWeather = this.props.marsWeather;
    return (
      <div className="mars">
        <div className="weather-card">
          <div className="latest-weather">
            <h2>Latest Weather on Mars</h2>
            {this.constructLatestWeatherCard(marsWeather)}
          </div>
        </div>
        <div className="daily-weather-table">
          {this.constructWeatherTableHeader()}
          {this.constructWeatherTable(marsWeather)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { marsWeather: state.marsWeather };
};

export default connect(mapStateToProps, { fetchMarsWeather })(Mars);
