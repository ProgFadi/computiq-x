import React, {useEffect, useState} from 'react';
import {DashboardService} from '../services/Http/DashboardService';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {Box, Stack} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const useStyles = makeStyles(() => ({
    ParentContainer:{
        textAlign:'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
        borderRadius: '.5em',
        height: '80%' ,
        width: '80%' ,
        overflow: 'hidden',
        padding: '1em 1em 1.5em',
    },
        StudentPointsContainer:{
        backgroundColor: 'white',
        height: '100%' ,
        width: '40%' ,
        overflowY: 'auto',
        padding: '1em 1em 1.5em',
    },
    WeeksContainer:{
        height: '100%' ,
        width: '60%' ,
        overflowY: 'auto',
        padding: '0 1em 1.5em',
    },

    HeaderBox: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: '9%'
    },
    HeaderTypography: {
        color: '#262424',
        fontFamily: 'poppins',
        marginBottom: '.5em',

    },
    ListStyle: {
        overflowY: 'auto',
        padding: '0 10px 0 10px'
    },
    ListItem: {
        backgroundColor: '#9d8ca9',
        margin: '.8em 0',
        borderRadius: '.5em',
    },
    ListItemIcon: {
        fontSize: '24px',
        color: '#262424',
        fontWeight: 'bold'
    },
    TypographyIndex: {
        color: '#262424',
        fontFamily: 'poppins'
    },
    TypographyPoints: {
        fontFamily: 'poppins'
    },
     TypographyHead: {
        color: '#262424',
        fontFamily: 'poppins',
         marginBottom: '.5em'
    },
    ListWeekItem: {
        backgroundColor: 'white',
        margin: '.8em 0',
        borderRadius: '.5em',
        color: '#262424',
        boxShadow:' rgba(0, 0, 0, 0.16) 0px 1px 4px'
    },
}));
function BoardView() {
    const [studentsPoints, setStudentsPoints] = useState([]);
    const [weeksInfo, setWeeksInfo] = useState([]);
    const classes = useStyles()

    useEffect(() => {
            (new DashboardService).loadPoints().then((res)=>{
                console.log('response is: ',res.data.program.tasks)
                console.log('response is: ',res.data.data)
                setStudentsPoints(res.data.data)
                setWeeksInfo(res.data.program.tasks)
            })
            .catch((err)=>{
                console.log('error is: ',err)
            })
    }, []);

    return(
        <>
            <Box className={classes.HeaderBox}>
                <Typography variant={"h4"} className={classes.HeaderTypography} style={{color: '#6d3885',fontWeight: '600'}}>Computiq Score Board</Typography>
                <Typography variant={"h6"} className={classes.HeaderTypography} style={{color: '#484646',fontWeight: '600'}}>Full-Stack Development Bootcamp</Typography>
            </Box>
            <Box className={classes.ParentContainer}>
                <Box className={classes.StudentPointsContainer}>
                    <List className={classes.ListStyle}>
                        <Typography variant={"h6"} className={classes.TypographyHead} style={{alignSelf: 'center',}}>Score Board</Typography>
                        {studentsPoints.map((obj,index)=> (
                            <ListItem key={index} className={classes.ListItem}>

                                <Stack direction="row" spacing='1em' sx={{alignItems: 'center'}}>
                                    <Typography className={classes.TypographyIndex}>#{index}</Typography>
                                    <ListItemIcon className={classes.ListItemIcon}>
                                        {obj.user__score_profile__photo}
                                    </ListItemIcon>
                                </Stack>

                                <ListItemText
                                    primaryTypographyProps={{ style: {fontFamily: 'poppins',}}}
                                    primary={obj.user__first_name+' '+obj.user__last_name}
                                />

                                <Typography className={classes.TypographyPoints}>{obj.total_score} <span style={{color: '#262424',}}>points</span></Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box className={classes.WeeksContainer}>
                    <List>
                        {weeksInfo.map((obj,index)=> (
                            <ListItem key={index} className={classes.ListWeekItem}>
                                <Stack direction="row" spacing='1em' sx={{alignItems: 'center'}}>
                                    <ListItemText
                                        primaryTypographyProps={{ style: {fontFamily: 'poppins',}}}
                                        primary={obj.title}
                                    />
                                    <ArrowDropDownIcon/>
                                </Stack>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>

    );
}

export default BoardView;

