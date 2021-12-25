import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Week = (props) => {

    return (
        <div>
            {props.tasks.map(task => {
                return (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content" id="panel1a-header">
                            <Typography p={2}>{task.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography p={2} variant="body1">
                                <div dangerouslySetInnerHTML={{ __html: task.description }} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default Week