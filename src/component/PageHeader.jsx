import React from "react";
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const PageHeader = ({ title, isEditMode, setEditMode }) => {
  return (
    <Box width="100%" mb={4}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="left"
        mb={2}
        sx={{ position: "relative", top: "-20px", left: "-20px" }}
      >
        Student
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h7"
          fontWeight="bold"
          mb={-6}
          sx={{ fontSize: "0.9rem", color: "gray", fontWeight: "800" , marginTop:"-120px" , marginLeft:"-20px", fontFamily:"Source Sans Pro"}}
        >
          {title} 
        </Typography>
        <Button
          variant="outlined"
          color="black"
          startIcon={<EditIcon />}
          onClick={() => setEditMode(!isEditMode)}
          sx={{ height: "28px", width: "67px", marginTop:"-100px" , marginRight:"-1px", textTransform:"none", fontWeight:"bold"}}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default PageHeader;
