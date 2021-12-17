import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function Student(props) {
  let student = props.details;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: { xs: "1.2rem", md: "1.1rem" },
        color: "#575756",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Box component="span">#{props.counter}</Box>
        <Box component="span" sx={{ fontSize: "38px" }}>
          {student.user__score_profile__photo}
        </Box>
      </Box>
      <Box>
        <Box component="span">{student.user__first_name + " " + student.user__last_name}</Box>
      </Box>
      <Box>{student.total_score} points</Box>
    </Box>
  );
}

export default Student;
