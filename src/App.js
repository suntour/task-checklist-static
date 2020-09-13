import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import { Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid container justify="center" spacing={3}>
        <Grid item xs={5}>
          <Paper className="main-section" elevation={3}>
            <TaskList></TaskList>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
