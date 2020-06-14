import React from "react";
import { connect } from "react-redux";

import FutureMission from "./FutureMission";
import { fetchFutureMissions } from "../../redux/actions";
import { FUTURE_LIMIT } from "../../utils/constants";
import getMissionWithFutureDate from "../../utils/getMissionWithFutureDate";

class FutureMissionCards extends React.Component {
  state = { width: 0 };

  componentDidMount() {
    this.props.fetchFutureMissions(FUTURE_LIMIT);
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
    const nextMission = this.props.nextMission,
      futureMissionsExceptNext = this.props.futureMissionsExceptNext;
    const futureMissions = futureMissionsExceptNext.map((mission) => {
      return (
        <div className="future-mission card">
          <FutureMission mission={mission} />
        </div>
      );
    });
    return (
      <div className="future-missions">
        {nextMission ? (
          <div className="future-mission-first">
            <FutureMission mission={this.props.nextMission} showCountdown />
          </div>
        ) : null}
        <div class="card-deck">{futureMissions}</div>
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
  FutureMissionCards
);
