import React from "react";
import { Box, Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ActionButton = ({ onClick, isEditMode }) => {
  return (
    <Box
      width="28%"
      mt={5}
      sx={{
        position: "absolute",
        bottom: "3px",
        right: "-3px",
        border: "6px solid #d4d4d4",
        borderRight: "none",
        borderBottom: "none",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "13px",
      }}
    >
      <Button
        onClick={onClick} 
        type="submit"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        color="primary"
        sx={{ width: "100%", color: "white", backgroundColor: "#282AAE", letterSpacing:"3px", fontWeight:"bold", borderRadius:"10px" }}
      >
        {isEditMode ? "Save" : "Next"}
      </Button>
    </Box>
  );
};

export default ActionButton;
