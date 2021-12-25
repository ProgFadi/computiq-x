import { Box, Card, CircularProgress, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Week from '../components/week';
import DashboradService from '../services/Http/DashoardService';
import BoardPoints from './BoardPoints'

const useStyles = makeStyles({
    boardTitle: {
        color: '#1a8cf7',
        display: 'block',
        fontSize: '2.5rem',
        fontFamily: "Metropolis-Bold",
        margin: '15px 0px'
    },
    courseTitle: {
        fontSize: '1.5rem',
        color: '#575756'
    }
});

function BoardView(props) {
    const classes = useStyles();

    const [title, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(0);
    const [dataPaginate, setDataPaginate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        (new DashboradService()).loadPoints().then(response => {

            setData(response.data.data);
            setPages(Math.ceil(response.data.data.length / perPage));
            setCurrentPage(1);
            setDataPaginate(response.data.data.slice(0, perPage));
            setTitle(response.data.program.title);

            setTasks(response.data.program.tasks.map(task => {
            return {
                id: task.id,
                title: task.title,
                description: task.description,
            }
            }));
        }).catch(err => {
                console.log(err);
            });
    }, []);
    
        return (
            <div>
        <Container maxWidth="xl" display="flex" flexDirection='row'>
            <Grid container spacing={3} paddingY={5} display="flex" justifyContent="space-around" >
                {data.length > 0 ? (
                    <>
                        <Grid item xs={4}>
                            <Card>
                                <Typography variant="h3" color='' p={3} className={classes.boardTitle}>
                                    Computiq Score Board
                                </Typography>
                                <Typography variant="h6" className='courseTitle' p={3}>
                                    {title}
                                </Typography>

                                    <Week tasks={tasks} />
                            </Card>
                        </Grid>

                        <Grid item display="flex" flexDirection="column"
                            alignItems="center" >

                            <BoardPoints data={dataPaginate} index={currentPage - 1} />

                            <Box display="flex" justifyContent="center" paddingY={5}>
                                <Pagination count={pages} page={currentPage} variant="outlined"
                                color="primary" shape="rounded" size="large" showFirstButton
                                showLastButton hidePrevButton hideNextButton onChange={(e, page) => {
                                    setCurrentPage(page);
                                    setDataPaginate(data.slice((page - 1) * perPage, page * perPage));
                                }} />
                            </Box>

                        </Grid> 
                    </>
                )
                : <Box pt={'40vh'}> <CircularProgress /> <Typography variant="h5" padding={5}> Loading ... 
                    </Typography> </Box>
                }

            </Grid>
        </Container >
            </div>
        );
    }

export default BoardView;