import React from "react";
import CountDownNum from "./CountDownNum";

export default class CountDown extends React.Component {
  state = { counter: 0 };

  componentDidMount() {
    const targetDate = new Date(this.props.time).getTime();
    this.interval = setInterval(() => {
      const today = new Date().getTime();
      this.setState({
        counter: targetDate - today,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const remain = this.state.counter;
    return (
      <div
        className="row justify-content-center"
        style={{ background: "transparent" }}
      >
        <CountDownNum
          num={Math.floor(remain / (24 * 60 * 60 * 1000))}
          text="DAYS"
          textFontSize={this.props.textFontSize}
          numFontSize={this.props.numFontSize}
        />
        {this.props.divider ? ":" : ""}
        <CountDownNum
          num={Math.floor((remain % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}
          text="HOURS"
          textFontSize={this.props.textFontSize}
          numFontSize={this.props.numFontSize}
        />
        {this.props.divider ? ":" : ""}
        <CountDownNum
          num={Math.floor((remain % (60 * 60 * 1000)) / (1000 * 60))}
          text="MINUTES"
          textFontSize={this.props.textFontSize}
          numFontSize={this.props.numFontSize}
        />
        {this.props.divider ? ":" : ""}
        <CountDownNum
          num={Math.floor((remain % (1000 * 60)) / 1000)}
          text="SECONDS"
          textFontSize={this.props.textFontSize}
          numFontSize={this.props.numFontSize}
        />
      </div>
    );
  }
}
