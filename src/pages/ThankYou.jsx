// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import DownloadIcon from "@mui/icons-material/Download";
// import { jsPDF } from "jspdf";
// import LoanDetails from "../component/LoanDetails";

// const ThankYou = () => {
//   const loanDetails = [
//     { label: "Loan ID", value: "BLR9922EL" },
//     { label: "Date and Time", value: "23 JUNE 2023 08:05 AM" },
//     { label: "Applicant Name", value: "Bibhuti Bhusan Jena" },
//     { label: "Occupation", value: "Stock Broker" },
//     {
//       label: "Loan Amount in Words",
//       value: "Rupees Thirty Five Thousand Only",
//     },
//     { label: "Student Name", value: "Anupam Jena" },
//     { label: "Course Name", value: "Product Management" },
//     { label: "College Name", value: "KIIT, Bhubaneswar" },
//     { label: "College Address", value: "Patia, East Bhubaneswar" },
//   ];

//   const handleDownload = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(16);
//     doc.text("Loan Details", 10, 10);

//     loanDetails.forEach((item, index) => {
//       doc.setFontSize(12);
//       doc.text(`${item.label}: ${item.value}`, 10, 20 + index * 10);
//     });

//     doc.save("LoanDetails.pdf");
//   };
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//     >
//       <Box
//         sx={{
//           position: "relative",
//           width: "340px",
//           height: "471px",
//           bgcolor: "rgba(255, 255, 255, 0.20)",
//           borderRadius: "15px",
//           textAlign: "center",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           overflow: "hidden",
//           padding: "16px",
//           "&::before, &::after": {
//             content: '""',
//             position: "absolute",
//             width: "100%",
//             height: "16px",
//             backgroundColor: "white",
//           },
//           "&::before": {
//             top: "-8px",
//             left: 0,
//             borderBottomLeftRadius: "50%",
//             borderBottomRightRadius: "50%",
//           },
//           "&::after": {
//             bottom: "-8px",
//             left: 0,
//             borderTopLeftRadius: "50%",
//             borderTopRightRadius: "50%",
//           },
//         }}
//       >
//         {/* Content */}
//         <Typography
//           variant="h6"
//           color="#282AAC"
//           fontWeight="600"
//           font-family="Markazi Text"
//           fontSize="30px"
//           fontStyle="normal"
//           lineHeight="normal"
//           gutterBottom
//         >
//           Thank You
//         </Typography>

//         {/* Loan Details */}
//         <Typography
//           variant="subtitle1"
//           fontWeight="500"
//           color="#282AAE;"
//           fontSize="20px"
//           font-family="Markazi Text"
//           fontStyle="normal"
//           lineHeight="normal"
//           gutterBottom
//         >
//           Loan Details
//         </Typography>

//         {/* box design */}

//         <LoanDetails />

//         {/* Loan Amount */}
//         <Typography variant="h4" color="#282AAC" fontWeight="bold" gutterBottom>
//           ₹35,000
//         </Typography>

//         {/* Download Button */}
//         <Button
//           onClick={handleDownload}
//           variant="contained"
//           endIcon={<DownloadIcon />}
//           sx={{
//             width: "100%",
//             textTransform: "uppercase",
//             fontWeight: "bold",
//             mt: 2,
//             background: "linear-gradient(90deg, #282AAE, #0D0F5E)",
//             color: "white",
//             "&:hover": {
//               background: "linear-gradient(90deg, #0D0F5E, #282AAE)",
//             },
//           }}
//         >
//           Download
//         </Button>

//       </Box>
     
//     </Box>
     
//   );
// };

// export default ThankYou;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { jsPDF } from "jspdf";
import LoanDetails from "../component/LoanDetails";

const ThankYou = () => {
  const loanDetails = [
    { label: "Loan ID", value: "BLR9922EL" },
    { label: "Date and Time", value: "23 JUNE 2023 08:05 AM" },
    { label: "Applicant Name", value: "Bibhuti Bhusan Jena" },
    { label: "Occupation", value: "Stock Broker" },
    { label: "Loan Amount in Words", value: "Rupees Thirty Five Thousand Only" },
    { label: "Student Name", value: "Anupam Jena" },
    { label: "Course Name", value: "Product Management" },
    { label: "College Name", value: "KIIT, Bhubaneswar" },
    { label: "College Address", value: "Patia, East Bhubaneswar" },
  ];

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Loan Details", 10, 10);

    loanDetails.forEach((item, index) => {
      doc.setFontSize(12);
      doc.text(`${item.label}: ${item.value}`, 10, 20 + index * 10);
    });

    doc.save("LoanDetails.pdf");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
  
      flexDirection="column"  
    >
      <Box
        sx={{
          position: "relative",
          width: "310px",
          height: "471px",
          bgcolor: "rgba(169, 169, 169, 0.3)",
          borderRadius: "15px",
          textAlign: "center",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          padding: "16px",
        }}
      >
        {/* Content */}
        <Typography
          variant="h6"
          color="#282AAC"
          fontWeight="600"
          fontFamily="Markazi Text"
          fontSize="30px"
          fontStyle="normal"
          lineHeight="normal"
          gutterBottom
        >
          Thank You
        </Typography>

        {/* Loan Details */}
        <Typography
          variant="subtitle1"
          fontWeight="500"
          color="#282AAE"
          fontSize="20px"
          fontFamily="Markazi Text"
          fontStyle="normal"
          lineHeight="normal"
          gutterBottom
        >
          Loan Details
        </Typography>

        {/* box design */}
        <LoanDetails />

        {/* Loan Amount */}
        <Typography variant="h4" color="#282AAE;" fontWeight="500" fontSize="80px" fontFamily= "Markazi Text" fontStyle="normal" lineHeight="normal"gutterBottom>
          ₹35,000
        </Typography>
      </Box>

      {/* Download Button */}
      <Button
        onClick={handleDownload}
        variant="contained"
        endIcon={<DownloadIcon />}
        sx={{
          width: "340px",
            height:"44px",
          textTransform: "uppercase",
          fontWeight: "bold",
          borderRadius:"8px",
          mt: 2,  
          background: "linear-gradient(90deg, #282AAE, #0D0F5E)",
          color: "white",
          "&:hover": {
            background: "linear-gradient(90deg, #0D0F5E, #282AAE)",
          },
        }}
      >
        Download
      </Button>
    </Box>
  );
};

export default ThankYou;
