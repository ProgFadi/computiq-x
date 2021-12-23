import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import { grey } from "@material-ui/core/colors";

const baseURL = "https://jsonplaceholder.typicode.com/users";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "max-content",
  },
  container: {
    paddingTop: theme.spacing(5),
  },
  tableContainer: {
    border: "solid 1px #1a8cf7",
    borderRadius: "20px",
    boxShadow: "0px 10px 0px 10px #1a8cf7",
    boxSizing: "border-box",
  },
  table: {
    backgroundColor: grey[200],
    width: "100%",
    boxSizing: "border-box",
    padding: "30px",
  },
  tableTile: {
    padding: "10px",
  },
}));

const Scoreboard = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTasks(response.data);
    });
  }, []);
  return (
    <Container className={classes.container}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <Typography className={classes.tableTile}>SCORE BOARD</Typography>
          </TableHead>
          <TableBody>
            {tasks.map((table) => (
              <TableRow
                key={table.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{table.id}</TableCell>
                <TableCell align="center">{table.name}</TableCell>
                <TableCell align="right">20 points</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Scoreboard;
