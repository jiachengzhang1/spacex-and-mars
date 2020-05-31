import React from "react";
import spaceX from "../apis/spaceX";
import { Accordion } from "react-bootstrap";
import Mission from "./Mission";

const LIMIT = 5;
export default class PastMissionList extends React.Component {
  state = {
    missions: [],
    activeIndex: 0,
    offset: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getLaunches();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      const offset = this.state.offset;
      this.setState({ offset: offset + LIMIT });
      this.getLaunches();
    }
  };

  getLaunches = async () => {
    const response = await spaceX.get("/launches/past", {
      params: {
        order: "desc",
        limit: LIMIT,
        offset: this.state.offset,
      },
    });

    this.setState({
      missions: [...this.state.missions, ...response.data],
    });
  };

  getMissions() {
    return this.state.missions.map((mission) => (
      <Mission key={mission.flight_number} mission={mission} />
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
