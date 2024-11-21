import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";
import PageHeader from "./PageHeader";
import IconBar from "./IconBar";
import Course from "../pages/Course";


const Try = () => {
    const [isEditMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const handleNextButtonClick = (isValid, isTouched) => {
    if (!isEditMode) {
      navigate("/footer-details");
    } else {
      if (isValid && isTouched) {
        setEditMode(false);
      }
    }
  };
  return (
    <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
            marginTop="8%"
            sx={{ maxWidth: 800, mx: "auto", position: "relative"}}
          >
            <IconBar page="course" />

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              minHeight="50vh"
              marginTop="4%"
              border="1px solid #d3d3d3 "
              borderRadius="15px 15px 50px 15px"
              p={4}
              bgcolor="#f7f7ff"
              sx={{
                maxWidth: 800,
                mx: "auto",
                position: "relative",
              }}
            >
              <Box marginBottom={37}>
                <PageHeader
                  title="COURSE DETAILS"
                  isEditMode={isEditMode}
                  setEditMode={setEditMode}
                />
                {/* grid part */}

              {
                
              }
              <Course/>
              


                </Box>
                </Box>

                  <ActionButton
              onClick={handleNextButtonClick}
              isEditMode={isEditMode}
            />
          </Box>
  );
};

export default Try;
