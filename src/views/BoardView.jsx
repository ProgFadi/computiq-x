import axios from "axios";
import React, { useEffect } from "react";
import { DashboradService } from "../services/Http/DashoardService";
import Navbar from "../components/Navbar";
import Scoreboard from "../components/Scoreboard";
import Taskboard from "../components/Taskboard";
import theme from "../theme"
import { Grid, ThemeProvider } from "@material-ui/core";

function BoardView(props) {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container>
          <Grid item sm={7}>
            <Taskboard />
          </Grid>
          <Grid item sm={4}>
            <Scoreboard />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default BoardView;
