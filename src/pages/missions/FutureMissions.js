import React from "react";
import { connect } from "react-redux";

import NextUpcomingMission from "./NextUpcomingMission";
import { fetchFutureMissions } from "../../actions";
import CountDown from "../../components/countdown";
import Table from "../../components/Table";
import getDate from "../../utils/getDate";
import { FUTURE_LIMIT } from "../../utils/constants";
import getMissionWithFutureDate from "../../utils/getMissionWithFutureDate";

class FutureMissions extends React.Component {
  componentDidMount() {
    this.props.fetchFutureMissions(FUTURE_LIMIT);
  }

  getUpcomingMissionTableRow(futureMissions) {
    return futureMissions.map(
      ({ launch_date_utc, mission_name, flight_number, launch_site }, i) => {
        const tds = [
          flight_number,
          mission_name,
          launch_site.site_name,
          getDate(launch_date_utc),
          <CountDown
            divider={true}
            time={launch_date_utc}
            textFontSize="9px"
          />,
        ];

        return (
          <tr key={i}>
            {tds.map((td, i) => {
              return <td key={i}>{td}</td>;
            })}
          </tr>
        );
      }
    );
  }

  render() {
    const nextMission = this.props.nextMission,
      futureMissionsExceptNext = this.props.futureMissionsExceptNext;
    return (
      <div>
        {nextMission ? <NextUpcomingMission mission={nextMission} /> : null}
        <div className="after-next-launches mt-5">
          <h1 style={{ textAlign: "center" }}>Future Missions</h1>
          <Table
            headers={[
              "Flight",
              "Mission",
              "Launch Site",
              "Planed Launch Time",
              "Launch Count Down",
            ]}
            body={this.getUpcomingMissionTableRow(futureMissionsExceptNext)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const futureMissions = state.futureMissions;
  return {
    nextMission:
      futureMissions.length > 0
        ? getMissionWithFutureDate(futureMissions)
        : null,
    futureMissionsExceptNext:
      futureMissions.length > 0 ? futureMissions.slice(1) : [],
  };
};

export default connect(mapStateToProps, { fetchFutureMissions })(
  FutureMissions
);
