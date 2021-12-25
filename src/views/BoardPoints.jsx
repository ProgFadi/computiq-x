import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  cardBorder: {
    border: 'solid 1px #1a8cf7',
    backgroundColor: '#fff',
    paddingTop: '18px',
    borderRadius: '20px',
    margin:'20px',
    boxShadow: '5px 5px #1a8cf7',
    top: '10px',
    minWidth:'400px'
  },
});

export default function BoardPoints(props) {  

  const classes = useStyles();
  let data = props.data

  return (
      <Card className={classes.cardBorder}>

        <Grid container padding={3} >
            <Typography variant="h3">
                  Score Board
              </Typography>
        </Grid>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>


                  <Grid item>
                    {
                      data.map((row, idx) => (
                        <TableRow
                        key={"#"+idx}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                          {"#"+(idx+props.index*10)}
                        </TableCell>
                        <TableCell align="right">{row.user__score_profile__photo}</TableCell>
                        <TableCell align="right">{row.user__first_name+row.user__last_name}</TableCell>
                        <TableCell align="right">{row.total_score+" points"}</TableCell>
                      </TableRow>
                    ))}
                  </Grid>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    );
}
