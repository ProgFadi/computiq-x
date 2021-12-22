import React from 'react'
import { Box,makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles(()=>({
    flx:{
        color: '#575756',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    box: {
        display: 'flex',
        alignItems:'center'
    },

    img: {
        fontSize: 35,
        marginLeft: 5
    }

}))


export default function BoardItems(props) {
    const classes = useStyles()
    return (
        <>
        <Typography variant="h4" component="div">SCORE BOARD</Typography>
        {
            props.dataP.map((item,i)=>{
                return (
                    <Box className={classes.flx} key={i}>
                        <Box className={classes.box}>
                            <Typography variant="h6" component="div">#{props.data.findIndex((data)=> (data.user__first_name+' '+data.user__last_name)===(item.user__first_name+' '+item.user__last_name) )}</Typography>
                            <Typography variant="h6" component="div" className={classes.img}>{item.user__score_profile__photo}</Typography>
                        </Box>
                        <Typography variant="h6" component="div">{item.user__first_name+' '+item.user__last_name}</Typography>
                        <Typography variant="h6" component="div">{item.total_score} points</Typography>
                    </Box>
                )
            })
        }    
        </>
    )
}
