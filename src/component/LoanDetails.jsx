import React from "react";
import { Box, Typography } from "@mui/material";


const LoanDetails = () => {


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        marginLeft: "6px",
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          margin: "16px",
          fontFamily: "Source Sans Pro",

          fontWeight: "600",
        }}
      >
        {[
          { label: "Loan ID", value: "BLR9922EL" },
          { label: "Date and Time", value: "23 JUNE 2023 08:05 AM" },
          { label: "Applicant Name", value: "Bibhuti Bhusan Jena" },
          { label: "Occupation", value: "Stock Broker" },
          {
            label: "Loan Amount in Words",
            value: "Rupees Thirty Five Thousand Only",
          },
          { label: "Student Name", value: "Anupam Jena" },
          { label: "Course Name", value: "Product Management" },
          { label: "College Name", value: "KIIT, Bhubaneswar" },
          { label: "College Address", value: "Patia, East Bhubaneswar" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",

              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: "10px",
                fontFamily: "Source Sans Pro",
              }}
            >
              {item.label}
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "10px", fontFamily: "Source Sans Pro" }}
            >
              {item.value}{" "}
            </Typography>
          </Box>
        ))}
 
      </Box>
    </Box>
  );
};

export default LoanDetails;
