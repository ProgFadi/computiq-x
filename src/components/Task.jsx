import React from "react";
import Box from "@mui/material/Box";
import SingleTask from "./SingleTask";
function Task(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {props.task.map((item, index) => {
        return <SingleTask key={item.id} task={item} />;
      })}
    </Box>
  );
}

export default Task;
