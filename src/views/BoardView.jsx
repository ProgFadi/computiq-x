import { Box, Card, CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import { Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Week from '../components/week';
import DashboradService from '../services/Http/DashoardService';
// import DenseTable from './BoardPoints'
import BoardPoints from './BoardPoints'

function BoardView(props) {
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
                    {/* <DenseTable /> */}
        <Container maxWidth="xl" display="flex" flexDirection='row'>
            <Grid container spacing={3} paddingY={5} display="flex" justifyContent="space-around" >
                {data.length > 0 ? (
                    <>
                        <Grid item xs={4}>
                            <Card>
                                <Typography variant="h3" p={3}>
                                    Computiq Score Board
                                </Typography>
                                <Typography variant="h6" p={3}>
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