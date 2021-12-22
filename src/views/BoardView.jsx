import { makeStyles, Typography, Box} from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import { DashboradService } from '../services/Http/DashoardService';
import Pagination from '@mui/material/Pagination';
import BoardItems from '../components/BoardItems';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TaskItems from '../components/TaskItems'
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme)=>({
    bg:{
        backgroundColor: 'white',
        borderRadius: 20,
        boxSizing: 'border-box',
        padding: 20,
        border: '1px #1a8cf7 solid',
        boxShadow: '5px 5px 0 #1a8cf7',
    },


}))
function BoardView(props) {
    const classes = useStyles()
    let perPage = 10
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const [dataPaginate, setDataPaginate] = useState([])
    const [tasks, setTasks] = useState([])

    const handleClick = (event, value)=> {
        let fromRecord = perPage * (value - 1)
        let toRecord = ((fromRecord + perPage) <= data.length) ? (fromRecord + perPage) : (data.length % perPage) + fromRecord
        setPage(value)
        setDataPaginate(data.slice(fromRecord,toRecord))
    }

    
    useEffect(()=>{
    
        (new DashboradService).loadPoints().then((res)=> {
            let dataRes = res.data
            let boardData = dataRes.data
            let tasksData = dataRes.program.tasks
            
            setTasks(tasksData)
            setData([...boardData])
            setPages(Math.ceil(boardData.length/perPage))
            setDataPaginate(boardData.slice(0,10))
        }).catch((err)=> console.log(err))
        
    },[])

    return (
        <Container fixed sx={dataPaginate.length==0 && {position: 'absolute', top: '50%', left: '50%', textAlign: 'center', transform: 'translate(-50%,-50%)'}}>
            {dataPaginate.length==0?   <CircularProgress /> : 
            <Grid container  mt={5} sx={{justifyContent:'space-between'}}>
                <Grid item xs={12} md={7}>
                    <Typography variant='h2' color='primary'>Computiq Score Board</Typography>
                    <Typography variant='h5' >Full-Stack Development Bootcamp</Typography>
                    <TaskItems tasks={tasks} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box className={classes.bg}>
                        <BoardItems dataP={dataPaginate} data={data} />
                        <Pagination color="primary" count={pages} page={page} onChange={handleClick} />
                    </Box>
                </Grid>
            </Grid>}
        </Container>
    );
}

export default BoardView;