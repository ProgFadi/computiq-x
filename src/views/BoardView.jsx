import React, {useEffect, useState} from 'react';
import {DashboardService} from '../services/Http/DashboardService';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {Box, Stack} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';

const useStyles = makeStyles(() => ({
    ParentContainer:{
        textAlign:'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
        borderRadius: '.5em',
        height: '80%' ,
        width: '90%' ,
        overflow: 'hidden',
        padding: '1em 1em 1.5em',
        marginBottom: '2em'
    },
    StudentPointsContainer:{
        backgroundColor: 'white',
        height: '100%' ,
        width: '42%' ,
        overflowY: 'auto',
        padding: '1em .8em 1.5em',
        marginRight: '.5em',
        borderRadius: '.5em',
    },
    WeeksContainer:{
        height: '100%' ,
        width: '58%' ,
        overflowY: 'auto',
        padding: '0 1.5em 1.5em 0',
        marginRight: '.5em'
    },

    HeaderBox: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start',
        marginLeft: '5%'
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#9d8ca9',
        margin: '.8em 0',
        borderRadius: '.5em',
    },
    ListItemIcon: {
        fontSize: '24px',
        // color: '#262424',
        color: 'white',
        fontWeight: 'bold'
    },
    TypographyIndex: {
        // color: '#262424',
        color: 'white',
        fontFamily: 'poppins'

    },
    TypographyPoints: {
        fontFamily: 'poppins',
        color: 'white'
    },
    TypographyHead: {
        color: '#262424',
        fontFamily: 'poppins',
        marginBottom: '.5em'
    },
    ListWeekItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: '0 .8em 1em 0',
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
                                    primaryTypographyProps={{ style: {fontFamily: 'poppins',color: 'white'}}}
                                    primary={obj.user__first_name+' '+obj.user__last_name}
                                />

                                <Typography className={classes.TypographyPoints}>
                                    {obj.total_score} <span style={{color: 'white',}}>points</span></Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box className={classes.WeeksContainer}>
                    <List>
                        {weeksInfo.map((obj,index)=> (
                            <ListItem key={index} className={classes.ListWeekItem}>
                                    <ListItemText
                                        primaryTypographyProps={{ style: {fontFamily: 'poppins',}}}
                                        primary={obj.title}
                                    />
                                    <IconButton><ArrowDropDownIcon/></IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>

    );
}

export default BoardView;