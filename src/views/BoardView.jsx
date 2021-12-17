import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { DashboradService } from "../services/Http/DashoardService";
import Student from "../components/Student";
import Tasks from "../components/Task";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { shadows } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { SESSION_KEY } from "../common/Constants";
const user = localStorage.getItem(SESSION_KEY);
let usertoken = JSON.parse(user);
console.log(usertoken.token.access_token);
let yourConfig = {
  headers: {
    Authorization: `Bearer ${usertoken.token.access_token}`,
  },
};
function BoardView(props) {
  // data state/ points
  // loading from
  //

  const [student, setStudent] = useState([]);
  const [task, setTask] = useState([]);
  //for pagination part
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = student.slice(indexOfFirstPost, indexOfLastPost);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    console.log(value);
  };

  //fetch data
  useEffect(async () => {
    await axios
      .get("api/score/data/5", yourConfig)
      .then((res) => {
        setStudent(res.data.data);
        setTask(res.data.program.tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(student);

  return (
    <Container fixed>
      <Typography color="primary" variant="h3" sx={{ p: 1, m: 1, ml: 3 }}>
        Computiq Score Board
      </Typography>
      <Typography variant="h5" sx={{ p: 1, m: 1, ml: 3, color: "#575756" }}>
        Full-Stack Development Bootcamp
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          flexWrap: "wrap",
          gap: 4,
          p: { lg: 4, xs: 0 },

          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: { lg: "60%", xs: "100%" },
          }}
        >
          <Tasks task={task} />
        </Box>
        <Box
          sx={{
            width: { lg: "30%", sm: "100%" },
            margin: "auto",
            boxShadow: "5px 5px #1a8cf7",
            border: "solid 1px #1a8cf7",
            borderRadius: "20px",
            padding: 1,
            mt: 0,
          }}
        >
          <Typography variant="h4">SCORE BOARD</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 1,
            }}
          >
            {currentPosts.map((item, index) => {
              // lazy math equation to fix the index problem
              if (currentPage > 1) {
                index = index + postsPerPage * (currentPage - 1);
              }
              // go to each student to get the details
              return <Student details={item} key={item.id} counter={index} />;
            })}
          </Box>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <Pagination count={6} page={currentPage} onChange={handleChange} color="primary" />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default BoardView;
