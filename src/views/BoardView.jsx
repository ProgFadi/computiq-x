import { Box , makeStyles} from '@material-ui/core';
import React, { useEffect, useState} from 'react';
import { DashboradService } from '../services/Http/DashoardService';
import Pagination from '@mui/material/Pagination';
import BoardItem from '../components/BoardItem';

const useStyles = makeStyles((theme)=>({
    bg:{
        margin: '10px auto',
        borderRadius: 20,
        boxSizing: 'border-box',
        padding: 20,
        border: '1px #1a8cf7 solid',
        boxShadow: '5px 5px 0 #1a8cf7',
        [theme.breakpoints.down('md')]: {
            width: '90%',
          },
        [theme.breakpoints.up('md')]: {
            width: '50%',
          },
    },


}))
function BoardView(props) {
    const classes = useStyles()
    let perPage = 10
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const [dataPaginate, setDataPaginate] = useState([])

    const handleClick = (event, value)=> {
        let fromRecord = perPage * (value - 1)
        let toRecord = ((fromRecord + perPage) <= data.length) ? (fromRecord + perPage) : (data.length % perPage) + fromRecord
        setPage(value)
        setDataPaginate(data.slice(fromRecord,toRecord))
    }

    
    useEffect(()=>{
    
        (new DashboradService).loadPoints().then((res)=> {
            let d = res.data.data
            setData([...d])
            setPages(Math.ceil(d.length/perPage))
            setDataPaginate(d.slice(0,10))
        }).catch((err)=> console.log(err))
        
    },[])

    return (
        <div>
            <Box className={classes.bg}>
                <BoardItem dataP={dataPaginate} data={data} />
                <Pagination color="primary" count={pages} page={page} onChange={handleClick} />
            </Box>
           
        </div>
    );
}

export default BoardView;