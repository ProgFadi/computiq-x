import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import MouseIcon from '@mui/icons-material/Mouse';
import './board.css';
import { SESSION_KEY } from "../common/Constants";


function BoardView(props) {
  const student = localStorage.getItem(SESSION_KEY);
  let token = JSON.parse(student);
  const [data,setData]=useState([])
  useEffect( () => {
      axios({
        headers: {
          Authorization: `Bearer ${token.token.access_token}`,
        },
        method: 'GET',
        withCredentials: true,
        url: 'https://website-backend.computiq.tech/api/score/data/5',
        
        }).then((res) => {
          setData(res.data.data);
          
        })
        .catch((err) => {
          console.log(err);
        });
        }, []);
  console.log(data)
    // 1
    return (
      <Grid container  gridTemplateColumns="repeat(1, 1fr)" gap={6}>
        <Grid  className='grid' >

        <div  className='grid-header' >
          <h1>Computiq Score Board</h1>
          <p>Full-Stack Development Bootcamp</p>
        </div>
        
        <Accordion className='accordion'>
          <AccordionSummary className='accordion-icon'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='accordion-header'>Week 0</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className='accordion'>
          <AccordionSummary className='accordion-icon'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='accordion-header'>Week 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion'>
          <AccordionSummary className='accordion-icon'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='accordion-header'>Week 2</Typography>
          </AccordionSummary>
          <AccordionDetails className='accordion-text'>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion'>
          <AccordionSummary className='accordion-icon'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='accordion-header'>Week 3</Typography>
          </AccordionSummary>
          <AccordionDetails className='accordion-text'>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accordion'>
          <AccordionSummary className='accordion-icon'
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className='accordion-header'>Week 5</Typography>
          </AccordionSummary>
          <AccordionDetails className='accordion-text'>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Grid>
        <Grid gridColumn="span 8">
          <div className='board'>
            <h3>Score Borad</h3>
            {data.map((student,index) =>(
              <div key={index} className='student'>
                <div className='id-icon'>
                  
                   <span># {index}</span>
                   <MouseIcon className='icon' />
                </div>
                <div className='name'>
                   <span>{student.user__first_name}.{student.user__last_name}</span>
                </div>
                <div className='ponits'>
                  <span>{student.total_score}</span>
                  <span>Points</span>
                </div>
            </div>
            ))}
          </div>
        </Grid>
      </Grid>
  );

}

export default BoardView;