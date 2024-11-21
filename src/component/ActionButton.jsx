import React from "react";
import { Box, Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ActionButton = ({ onClick, isEditMode }) => {
  return (
    <Box
    width={{ xs: "100%", sm: "100%", md: "28%" }} 
      mt={5}
      sx={{
        position: "absolute",
        bottom: "3px",
        right: { xs: "0", sm: "0", md: "-3px" },
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
        sx={{ width: "100%", color: "white", backgroundColor: "#282AAE", letterSpacing:"3px", fontWeight:"bold", borderRadius:"10px", background: "linear-gradient( #282AAE, #0D0F5E)", "&:hover": {
          background: "linear-gradient(to left, #282AAE, #0D0F5E)", 
        }, }}
      >
        {isEditMode ? "Save" : "Next"}
      </Button>
    </Box>
  );
};

export default ActionButton;
