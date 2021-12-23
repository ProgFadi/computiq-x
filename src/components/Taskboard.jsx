import {
  Typography,
  Container,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";

const baseURL = "https://website-backend.computiq.tech/api/score/data/5";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}));

const Taskboard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTasks(response.program.tasks);
      console.log(response.program.tasks);
    });
  }, []);


  return (
    <Container className={classes.container}>
      {tasks.map((accordion) => {
        const { id, title, description } = accordion;
        return (
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.title}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default Taskboard;
