import React from "react";
import spaceX from "../apis/spaceX";
import CountDown from "./CountDown";
import PastMissionList from "./PastMissionList";
import Quote from "./Quote";
import NextUpcomingMission from "./NextUpcomingMission";
import Table from "./Table";

export default class Missions extends React.Component {
  state = { futureLaunches: [] };

  getUpcomingLaunches = async () => {
    const response = await spaceX.get("/launches/upcoming", {
      params: {
        limit: 5,
        sort: "launch_date_utc",
        order: "asc",
      },
    });
    this.setState({ futureLaunches: response.data });
  };

  componentDidMount() {
    this.getUpcomingLaunches();
  }

  getNextUpcomingMission() {
    if (this.state.futureLaunches.length > 0) {
      let i = 0;
      while (
        new Date(this.state.futureLaunches[i].launch_date_utc) < new Date()
      ) {
        i += 1;
      }
      return <NextUpcomingMission mission={this.state.futureLaunches[i]} />;
    }
    return null;
  }

  getUpcomingMissionTable() {
    const countDowns = this.state.futureLaunches.map((launch, i) => {
      if (i > 0) {
        const {
          launch_date_utc,
          mission_name,
          flight_number,
          launch_site,
        } = launch;
        const { site_name } = launch_site;
        return (
          <tr key={i}>
            <td>{flight_number}</td>
            <td>{mission_name}</td>
            <td>{site_name}</td>
            <td>{new Date(launch_date_utc).toString()}</td>
            <td>
              <CountDown
                divider={true}
                time={launch_date_utc}
                textFontSize="9px"
              />
            </td>
          </tr>
        );
      }
      return null;
    });
    return (
      <Table
        headers={[
          "Flight",
          "Mission",
          "Launch Site",
          "Planed Launch Time",
          "Launch Count Down",
        ]}
        body={countDowns}
      />
    );
  }

  render() {
    return (
      <div className="landing-page" style={{ marginTop: "130px" }}>
        <Quote />
        {this.getNextUpcomingMission()}
        <div className="after-next-launches mt-5">
          <h1 style={{ textAlign: "center" }}>Future Missions</h1>
          {this.getUpcomingMissionTable()}
        </div>
        <div className="past-missions mt-5">
          <h1 style={{ textAlign: "center" }}>Past Missions</h1>
          <PastMissionList />
        </div>
      </div>
    );
  }
}
