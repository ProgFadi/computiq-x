import React from 'react'
import parse from 'html-react-parser';

import { Box , makeStyles} from '@material-ui/core';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles(()=>({
    flx:{
        color: '#575756',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    box: {
        backgroundColor: 'white',
        padding: 20, 
        borderRadius: 20, 
        border: '1px solid #c6c6c6', 
        color: '#575756', 
        marginBottom: 20, 
        cursor: 'pointer'
    },

}))

export default function TaskItem(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    return (
        <Box onClick={()=> setOpen(!open)} className={classes.box}>
            <Box className={classes.flx}>
                {props.title} {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <Collapse in={open} timeout="auto" unmountOnExit>
                { parse(props.desc) }
            </Collapse>
        </Box>
    )
}
