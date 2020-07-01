import React from "react";
import IconString from "../IconString";

export default class PastMissionSummary extends React.Component {
  state = { width: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const {
      missionName,
      date,
      missionPatch,
      launchSuccess,
      flight_number,
      site_name_long,
      rocketName,
    } = this.props;
    if (this.state.width > 786) {
      return (
        <div className="past-mission-summary row justify-content-center">
          <div className="col col-md-2 ml-auto mt-auto mb-auto">
            <img
              className="mission-patch"
              alt="missionPatch"
              src={missionPatch}
            />
          </div>
          <div className="col col-md-4">
            <h4>{missionName}</h4>
            <p className="past-mission-status">
              This mission was {launchSuccess ? "successful" : "failed"}
            </p>
          </div>
          <div className="col col-md-1"></div>
          <div className="col col-md-5">
            <IconString
              iconClass="th icon"
              string={`Flight # ${flight_number}`}
            />
            <IconString
              iconClass="calendar alternate icon"
              string={date.toString()}
            />
            <IconString
              iconClass="map marker alternate icon"
              string={site_name_long}
            />
            <IconString iconClass="rocket icon" string={rocketName} />
          </div>
        </div>
      );
    }
    return (
      <div className="past-mission-summary">
        <div className="row justify-content-center">
          <div className="col col-md-2 ml-auto mt-auto mb-auto">
            <img
              className="mission-patch"
              alt="missionPatch"
              src={missionPatch}
            />
          </div>
          <div className="col col-md-10">
            <h4>{missionName}</h4>
            <p className="past-mission-status">
              This mission was {launchSuccess ? "successful" : "failed"}
            </p>
          </div>
        </div>
        <hr style={{ border: "1px solid white" }} />
        <div className="mt-3">
          <IconString
            iconClass="th icon"
            string={`Flight # ${flight_number}`}
          />
          <IconString
            iconClass="calendar alternate icon"
            string={date.toString()}
          />
          <IconString
            iconClass="map marker alternate icon"
            string={site_name_long}
          />
          <IconString iconClass="rocket icon" string={rocketName} />
        </div>
      </div>
    );
  }
}
