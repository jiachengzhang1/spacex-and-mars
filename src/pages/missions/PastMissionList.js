import React from "react";
import { connect } from "react-redux";
import { Accordion } from "react-bootstrap";

import PastMission from "./PastMission";
import { fetchPastMissions } from "../../actions";
import isWindowBottom from "../../utils/isWindowBottom";
import { PAST_LIMIT } from "../../utils/constants";

class PastMissionList extends React.Component {
  state = { offset: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.props.fetchPastMissions(PAST_LIMIT, this.state.offset);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (isWindowBottom()) {
      const offset = this.state.offset;
      this.setState({ offset: offset + PAST_LIMIT });
      this.props.fetchPastMissions(PAST_LIMIT, this.state.offset);
    }
  };

  getMissions() {
    return this.props.pastMissions.map((mission) => (
      <PastMission key={mission.flight_number} mission={mission} />
    ));
  }

  render() {
    return (
      <div className="past-mission-list" style={{ marginBottom: "90px" }}>
        <Accordion>{this.getMissions()}</Accordion>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pastMissions: state.pastMissions };
};

export default connect(mapStateToProps, { fetchPastMissions })(PastMissionList);
