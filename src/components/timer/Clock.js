import React from "react";
import { Grid } from "@material-ui/core";
import "./Clock.css";

function FormattedDate(props) {
  var resetHour = Math.floor((props.timeTilReset / (1000 * 60 * 60)) % 24);
  var resetMinutes = Math.floor((props.timeTilReset / 1000 / 60) % 60);
  var resetSeconds = Math.floor((props.timeTilReset / 1000) % 60);
  //var resetSeconds = (props.timeTilReset / 1000);

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} className="main-time-text">
          {props.date.toLocaleTimeString()}
        </Grid>
        <Grid item xs={12}>
          <div className="offset-text">{props.offsetText}</div>
        </Grid>
        <Grid item xs={10} className="reset-section">
          <div className="reset-text">
            Reset in: {resetHour} hours, {resetMinutes} minutes, and{" "}
            {resetSeconds} seconds
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function getTimeTilResetInMillis(currentDate) {
  var resetTime = new Date();
  resetTime =
    resetTime.getHours() < 16
      ? getResetTime(resetTime, 20, false)
      : getResetTime(resetTime, 20, true);

  var timeLeftMillis = resetTime - Date.parse(currentDate);

  return timeLeftMillis;

  function getResetTime(date, hours, nextDay) {
    var newDate = date;

    if (nextDay) {
      newDate.setDate(newDate.getDate() + 1);
    }
    newDate.setHours(hours);
    newDate.setMinutes(0);
    newDate.setSeconds(0);

    return newDate;
  }
}

function getOffsetText(date) {
  const offset = date.getTimezoneOffset();
  const offsetHours = Math.floor(offset / 60);
  var offsetMins = Math.abs(offset % 60);
  if (offsetMins === 0) {
    offsetMins = "00";
  }
  var offsetText = offsetHours + ":" + offsetMins;
  if (offset >= 0) {
    offsetText = "GMT+" + offsetText;
  } else {
    offsetText = "GMT" + offsetText;
  }

  return offsetText;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const currentDate = new Date();
    this.state = {
      date: currentDate,
      offsetText: getOffsetText(currentDate),
      timeTilReset: getTimeTilResetInMillis(currentDate),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      timeTilReset: this.state.timeTilReset - 1000,
    });
  }

  render() {
    return (
      <div className="date-area">
        <FormattedDate
          date={this.state.date}
          offsetText={this.state.offsetText}
          timeTilReset={this.state.timeTilReset}
        />
      </div>
    );
  }
}

export default Clock;
