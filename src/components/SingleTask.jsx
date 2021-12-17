import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function SingleTask(props) {
  const [show, setShow] = useState(false);
  const createMarkup = () => {
    return { __html: props.task.description };
  };
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 5,
        borderColor: "#c6c6c6",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: "1.1rem",
          gap: 5,
          p: 2,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            backgroundColor: "#c6c6c6",
            position: "absolute",
            left: -4,
          }}
        ></Box>
        <Box
          sx={{
            width: "80%",
          }}
        >
          {props.task.title}
        </Box>
        <Box>
          <IconButton onClick={() => setShow(!show)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
      </Box>
      {show ? <Box dangerouslySetInnerHTML={createMarkup()} sx={{ pl: 3, pr: 3, mb: 10 }} /> : ""}
    </Box>
  );
}

export default SingleTask;
