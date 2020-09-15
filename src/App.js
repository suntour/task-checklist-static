import React from "react";
import "./App.css";
import TaskList from "./components/tasklist/TaskList";
import Clock from "./components/timer/Clock";
import { Card, Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={5}>
          <Paper className="task-section" elevation={3}>
            <Card className="time-section" elevation={3}>
              <Clock></Clock>
            </Card>
            <TaskList></TaskList>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
