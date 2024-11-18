import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import IconBar from "../component/IconBar";
import PageHeader from "../component/PageHeader";
import ActionButton from "../component/ActionButton";

import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from "@mui/material";

const courseNames = ["Java", "Python", "React JS", "Node JS", "Ruby"];
const courseDurations = ["9 Months", "12 Months", "18 Months", "24 Months"];
const loanAmountPreferences = [
  "Significant Purchase",
  "Business  Investment",
  "Home Investment",
  "Need Costume Amount",
];
const productTypes = ["EMI", "Flexi Loan", "Bullet Payment"];

const validationSchema = Yup.object().shape({
  courseName: Yup.string().required("Required"),
  courseDuration: Yup.string().required("Required"),
  courseFees: Yup.number()
    .typeError("Course Fees must be a number")
    .required("Required")
    .max(200000, "Course Fees cannot be greater than 2 lakh"),
  loanAmountPreference: Yup.string().required("Required"),
  desiredAmount: Yup.string().required("Required"),
  productType: Yup.string().required("Required"),
});

const CourseDetails = () => {
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
    <Formik
      initialValues={{
        courseName: "Java",
        courseDuration: "12 Months",
        courseFees: "200000",
        loanAmountPreference: "Need Costume Amount",
        desiredAmount: "200000",
        productType: "EMI",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
        setEditMode(false);
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
            marginTop="8%"
            sx={{ maxWidth: 800, mx: "auto", position: "relative" }}
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
              sx={{ maxWidth: 800, mx: "auto", position: "relative" }}
            >
              <Box marginBottom={37}>
                <PageHeader
                  title="COURSE DETAILS"
                  isEditMode={isEditMode}
                  setEditMode={setEditMode}
                />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel
                        sx={{
                          color: "black",
                          marginLeft:"-10px"
                        }}
                      >
                        Course Name
                      </InputLabel>
                      <Field
                        as={Select}
                        name="courseName"
                        label="Course Name"
                        disabled={!isEditMode}
                        sx={{
                          width: "368px",
                          height: "36px",
                          borderRadius: "10px",
                          fontWeight: "600 ",
                          fontSize: "14px",
                          lineHeight: "17.6px",
                          marginLeft:"-10px",
                          
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiSelect-select.Mui-disabled": {
                            "-webkit-text-fill-color": "black",
                          },
                        }}
                      >
                        {courseNames.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid container spacing={2.5}>
                    <Grid container spacing={2} sx={{ ml: 4 }}>
                      <Grid container justifyContent="flex-end" spacing={4}>
                        <Grid item xs={6} sm={3}>
                          <FormControl fullWidth>
                            <InputLabel
                              sx={{
                                color: "black",
                               
                              }}
                            >
                              Course Duration
                            </InputLabel>
                            <Field
                              as={Select}
                              name="courseDuration"
                              label="Course Durations"
                              disabled={!isEditMode}
                              sx={{
                                width: "180px",
                                height: "36px",
                                borderRadius: "10px",
                                fontSize: "14px",
                                fontWeight: "600",
                                lineHeight: "17.6px",
                               
                                backgroundColor: isEditMode
                                  ? "white"
                                  : "#DCDCDC",
                                "& .MuiSelect-select.Mui-disabled": {
                                  "-webkit-text-fill-color": "black",
                                },
                              }}
                            >
                              {courseDurations.map((duration) => (
                                <MenuItem key={duration} value={duration}>
                                  {duration}
                                </MenuItem>
                              ))}
                            </Field>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="courseFees"
                            label="Course Fees"
                            type="number"
                            error={
                              touched.courseFees && Boolean(errors.courseFees)
                            }
                            helperText={touched.courseFees && errors.courseFees}
                            disabled={!isEditMode}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  ₹
                                </InputAdornment>
                              ),
                            }}
                            InputLabelProps={{
                              style: {
                                color: "black",
                              },
                            }}
                            sx={{
                              width: "168px",
                              height: "36px",
                              borderRadius: "10px",
                              color: "black",
                              ml: -0.8,
                              "& .MuiInputBase-root": {
                                height: "36px !important",
                                borderRadius: "10px !important",
                                width: "180px",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "17.6px",
                                backgroundColor: isEditMode
                                  ? "white"
                                  : "#DCDCDC",
                                "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                                  {
                                    "-webkit-text-fill-color": "black",
                                  },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel sx={{ color: "black",marginLeft:"-10px" }}>
                        Loan Amount Preference
                      </InputLabel>
                      <Field
                        as={Select}
                        name="loanAmountPreference"
                        label="Loan Amount Preference"
                        error={
                          touched.desiredAmount && Boolean(errors.desiredAmount)
                        }
                        helperText={
                          touched.desiredAmount && errors.desiredAmount
                        }
                        disabled={!isEditMode}
                        sx={{
                          width: "368px",
                          height: "36px",
                          borderRadius: "10px",
                          fontWeight: "600 ",
                          fontSize: "14px",
                          lineHeight: "17.6px",
                          marginLeft:"-10px",
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiSelect-select.Mui-disabled": {
                            "-webkit-text-fill-color": "black",
                          },
                        }}
                      >
                        {loanAmountPreferences.map((preference) => (
                          <MenuItem key={preference} value={preference}>
                            {preference}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="desiredAmount"
                      label="Enter Your Desired Amount"
                      error={
                        touched.desiredAmount && Boolean(errors.desiredAmount)
                      }
                      helperText={touched.desiredAmount && errors.desiredAmount}
                      disabled={!isEditMode}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">₹</InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        style: {
                          color: "black",
                          marginLeft:"9px"
                        },
                      }}
                      sx={{
                        width: "368px",
                        height: "36px",
                        borderRadius: "10px",
                        "& .MuiInputBase-root": {
                          height: "36px !important",
                          borderRadius: "10px !important",
                          width: "368px",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "17.6px",
                          marginLeft:"8px",
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                            {
                              "-webkit-text-fill-color": "black",
                            },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel sx={{ color: "black",marginLeft:"-10px" }}>
                        Product Type
                      </InputLabel>
                      <Field
                        as={Select}
                        name="productType"
                        label="Product Type"
                        disabled={!isEditMode}
                        sx={{
                          width: "368px",
                          height: "36px",
                          borderRadius: "10px",
                          fontWeight: "600 ",
                          fontSize: "14px",
                          lineHeight: "17.6px",
                          marginLeft:"-10px",
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiSelect-select.Mui-disabled": {
                            "-webkit-text-fill-color": "black",
                          },
                        }}
                      >
                        {productTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>

              <Box
                display="flex"
                justifyContent="flex-end"
                width="90%"
                mt={5}
                sx={{ position: "absolute", bottom: "-0px", right: "0px" }}
              >
                <Button
                  onClick={handleNextButtonClick}
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  color="primary"
                  sx={{ width: "30%", color: "white", backgroundColor: "blue" }}
                >
                  {isEditMode ? "Save" : "Next"}
                </Button>
              </Box>
            </Box>

            <ActionButton
              onClick={handleNextButtonClick}
              isEditMode={isEditMode}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CourseDetails;
// import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import { useNavigate } from "react-router-dom";
// import {  Typography } from "@mui/material";
// import * as Yup from "yup";
// import Person2Icon from "@mui/icons-material/Person2";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SchoolIcon from "@mui/icons-material/School";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import BadgeIcon from "@mui/icons-material/Badge";
// import BackupTableIcon from "@mui/icons-material/BackupTable";

// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import InputAdornment from "@mui/material/InputAdornment";
// import EditIcon from "@mui/icons-material/Edit";

// import {
//   Button,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Box,
//   Grid,
//   IconButton,
// } from "@mui/material";

// const courseNames = ["Java", "Python", "React JS", "Node JS", "Ruby"];
// const courseDurations = ["9 Months", "12 Months", "18 Months", "24 Months"];
// const loanAmountPreferences = [
//   "Significant Purchase",
//   "Business  Investment",
//   "Home Investment",
//   "Need Costume Amount",
// ];
// const productTypes = ["EMI", "Flexi Loan", "Bullet Payment"];

// const validationSchema = Yup.object().shape({
//   courseName: Yup.string().required("Required"),
//   courseDuration: Yup.string().required("Required"),
//   courseFees: Yup.number()
//     .typeError("Course Fees must be a number")
//     .required("Required")
//     .max(200000, "Course Fees cannot be greater than 2 lakh"),
//   loanAmountPreference: Yup.string().required("Required"),
//   desiredAmount: Yup.string().required("Required"),
//   productType: Yup.string().required("Required"),
// });

// const CourseDetails = () => {
//   const [isEditMode, setEditMode] = useState(false);
//   const navigate = useNavigate();

//   const handleNextButtonClick = (isValid, isTouched) => {
//     if (!isEditMode) {
//       navigate("/footer-details");
//     } else {
//       if (isValid && isTouched) {
//         setEditMode(false);
//       }
//     }
//   };
//   return (
//     <Formik
//       initialValues={{
//         courseName: "Java",
//         courseDuration: "12 Months",
//         courseFees: "200000",
//         loanAmountPreference: "Need Costume Amount",
//         desiredAmount: "200000",
//         productType: "EMI",
//       }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log("Form values:", values);
//         setEditMode(false);
//       }}
//     >
//       {({ errors, touched, handleSubmit }) => (
//         <Form onSubmit={handleSubmit}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             minHeight="50vh"
//             marginTop="6%"
//             sx={{ maxWidth: 800, mx: "auto", position: "relative" }}
//           >
//             <Box
//               display="flex"
//               justifyContent="space-between"
//               width="100%"
//               mb={-2}
//             >
//               {/* Left Side Icon*/}
//               <Box display="flex" gap={2}>
//                 <IconButton
//                   sx={{
//                     border: "1px solid",
//                     borderRadius: "50%",
//                     color: "white",
//                     backgroundColor: "blue",
//                     "&:hover": {
//                       backgroundColor: "blue", 
                      
//                     },
//                   }}
//                   onClick={() => navigate('/profile-details')}
//                 >
//                   <Person2Icon fontSize="large" />
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     border: "1px solid",
//                     borderRadius: "50%",
//                     color: "white",
//                     backgroundColor: "blue",
//                     "&:hover": {
//                       backgroundColor: "blue", 
//                     },
//                   }}
//                 >
//                   <LocationOnIcon fontSize="large" />
//                 </IconButton>

//                 <IconButton
//                   sx={{
//                     border: "1px solid",
//                     borderRadius: "50%",
//                     color: "gray",
//                     borderColor:"blue"
//                   }}
//                 >
//                   <SchoolIcon fontSize="large" />
//                 </IconButton>
//               </Box>

//               {/* Right Side Icon */}
//               <Box display="flex" gap={2}>
//                 <IconButton
//                   sx={{
//                     border: "1px solid",
//                     borderRadius: "50%",
//                     color: "gray",
//                   }}
//                 >
//                   <AccountBalanceIcon fontSize="large" />
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     border: "1px solid",
//                     borderRadius: "50%",
//                     color: "gray",
//                   }}
//                 >
//                   <BadgeIcon fontSize="large" />
//                 </IconButton>
//                 <IconButton
//                   sx={{
//                     border: "1px solid",
//                     borderRadius: "50%",
//                     color: "gray",
                    
//                   }}
//                 >
//                   <BackupTableIcon fontSize="large" />
//                 </IconButton>
//               </Box>
//             </Box>

//             <Box
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               justifyContent="center"
//               minHeight="50vh"
//               marginTop="4%"
//               border="1px solid #d3d3d3 "
//               borderRadius="15px 15px 50px 15px"
//               p={4}
//               bgcolor="#f7f7ff"
//               sx={{ maxWidth: 800, mx: "auto", position: "relative" }}
//             >
//               <Box marginBottom={30}>
//               <Box width="100%" mb={4}>
//       <Typography
//         variant="h5"
//         fontWeight="bold"
//         textAlign="left"
//         mb={2}
//         sx={{ position: "relative", top: "-32px", left: "-20px" }}
//       >
//         Student
        
//       </Typography>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography
//           variant="h7"
//           fontWeight="bold"
//           mb={-6}
//           sx={{ fontSize: "0.9rem", color: "gray", fontWeight: "800", marginTop:"-130px" , marginLeft:"-20px"}}
//         >
//           COURSE DETAILS
//         </Typography>
//         <Button
//           variant="outlined"
//           color="black"
//           startIcon={<EditIcon />}
//           onClick={() => setEditMode(!isEditMode)}
//           sx={{ height: "23.61px", width: "57px" , marginTop:"-120px"}}
//         >
//           Edit
//         </Button>
//       </Box>
//     </Box>

//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel
//                         sx={{
//                           color: "black",
//                         }}
//                       >
//                         Course Name
//                       </InputLabel>
//                       <Field
//                         as={Select}
//                         name="courseName"
//                         label="Course Name"
//                         disabled={!isEditMode}
//                         sx={{
//                           width: "368px",
//                           height: "36px",
//                           borderRadius: "10px",
//                           fontWeight: "600 ",
//                           fontSize: "14px",
//                           lineHeight: "17.6px",
//                           backgroundColor: isEditMode ? "white" : "#DCDCDC",
//                           "& .MuiSelect-select.Mui-disabled": {
//                             "-webkit-text-fill-color": "black",
//                           },
//                         }}
//                       >
//                         {courseNames.map((option) => (
//                           <MenuItem key={option} value={option}>
//                             {option}
//                           </MenuItem>
//                         ))}
//                       </Field>
//                     </FormControl>
//                   </Grid>
//                   <Grid container spacing={2.5}>
//                     <Grid container spacing={2} sx={{ ml: 4 }}>
//                       <Grid container justifyContent="flex-end" spacing={4}>
//                         <Grid item xs={6} sm={3}>
//                           <FormControl fullWidth>
//                             <InputLabel
//                               sx={{
//                                 color: "black",
//                               }}
//                             >
//                               Course Duration
//                             </InputLabel>
//                             <Field
//                               as={Select}
//                               name="courseDuration"
//                               label="Course Durations"
//                               disabled={!isEditMode}
//                               sx={{
//                                 width: "168px",
//                                 height: "36px",
//                                 borderRadius: "10px",
//                                 fontSize: "14px",
//                                 fontWeight: "600",
//                                 lineHeight: "17.6px",
//                                 backgroundColor: isEditMode
//                                   ? "white"
//                                   : "#DCDCDC",
//                                 "& .MuiSelect-select.Mui-disabled": {
//                                   "-webkit-text-fill-color": "black",
//                                 },
//                               }}
//                             >
//                               {courseDurations.map((duration) => (
//                                 <MenuItem key={duration} value={duration}>
//                                   {duration}
//                                 </MenuItem>
//                               ))}
//                             </Field>
//                           </FormControl>
//                         </Grid>
//                         <Grid item xs={6} sm={3}>
//                           <Field
//                             as={TextField}
//                             fullWidth
//                             name="courseFees"
//                             label="Course Fees"
//                             type="number"
//                             error={
//                               touched.courseFees && Boolean(errors.courseFees)
//                             }
//                             helperText={touched.courseFees && errors.courseFees}
//                             disabled={!isEditMode}
//                             InputProps={{
//                               startAdornment: (
//                                 <InputAdornment position="start">
//                                   ₹
//                                 </InputAdornment>
//                               ),
//                             }}
//                             InputLabelProps={{
//                               style: {
//                                 color: "black",
//                               },
//                             }}
//                             sx={{
//                               width: "168px",
//                               height: "36px",
//                               borderRadius: "10px",
//                               color: "black",
//                               ml: -0.8,
//                               "& .MuiInputBase-root": {
//                                 height: "36px !important",
//                                 borderRadius: "10px !important",
//                                 width: "168px",
//                                 fontWeight: "600",
//                                 fontSize: "14px",
//                                 lineHeight: "17.6px",
//                                 backgroundColor: isEditMode
//                                   ? "white"
//                                   : "#DCDCDC",
//                                 "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
//                                   {
//                                     "-webkit-text-fill-color": "black",
//                                   },
//                               },
//                             }}
//                           />
//                         </Grid>
//                       </Grid>
//                     </Grid>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel sx={{ color: "black" }}>
//                         Loan Amount Preference
//                       </InputLabel>
//                       <Field
//                         as={Select}
//                         name="loanAmountPreference"
//                         label="Loan Amount Preference"
//                         error={
//                           touched.desiredAmount && Boolean(errors.desiredAmount)
//                         }
//                         helperText={
//                           touched.desiredAmount && errors.desiredAmount
//                         }
//                         disabled={!isEditMode}
//                         sx={{
//                           width: "368px",
//                           height: "36px",
//                           borderRadius: "10px",
//                           fontWeight: "600 ",
//                           fontSize: "14px",
//                           lineHeight: "17.6px",
//                           backgroundColor: isEditMode ? "white" : "#DCDCDC",
//                           "& .MuiSelect-select.Mui-disabled": {
//                             "-webkit-text-fill-color": "black",
//                           },
//                         }}
//                       >
//                         {loanAmountPreferences.map((preference) => (
//                           <MenuItem key={preference} value={preference}>
//                             {preference}
//                           </MenuItem>
//                         ))}
//                       </Field>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <Field
//                       as={TextField}
//                       fullWidth
//                       name="desiredAmount"
//                       label="Enter Your Desired Amount"
//                       error={
//                         touched.desiredAmount && Boolean(errors.desiredAmount)
//                       }
//                       helperText={touched.desiredAmount && errors.desiredAmount}
//                       disabled={!isEditMode}
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">₹</InputAdornment>
//                         ),
//                       }}
//                       InputLabelProps={{
//                         style: {
//                           color: "black",
//                         },
//                       }}
//                       sx={{
//                         width: "368px",
//                         height: "36px",
//                         borderRadius: "10px",
//                         "& .MuiInputBase-root": {
//                           height: "36px !important",
//                           borderRadius: "10px !important",
//                           width: "368px",
//                           fontWeight: "600",
//                           fontSize: "14px",
//                           lineHeight: "17.6px",
//                           backgroundColor: isEditMode ? "white" : "#DCDCDC",
//                           "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
//                             {
//                               "-webkit-text-fill-color": "black",
//                             },
//                         },
//                       }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel sx={{ color: "black" }}>
//                         Product Type
//                       </InputLabel>
//                       <Field
//                         as={Select}
//                         name="productType"
//                         label="Product Type"
//                         disabled={!isEditMode}
//                         sx={{
//                           width: "368px",
//                           height: "36px",
//                           borderRadius: "10px",
//                           fontWeight: "600 ",
//                           fontSize: "14px",
//                           lineHeight: "17.6px",
//                           backgroundColor: isEditMode ? "white" : "#DCDCDC",
//                           "& .MuiSelect-select.Mui-disabled": {
//                             "-webkit-text-fill-color": "black",
//                           },
//                         }}
//                       >
//                         {productTypes.map((type) => (
//                           <MenuItem key={type} value={type}>
//                             {type}
//                           </MenuItem>
//                         ))}
//                       </Field>
//                     </FormControl>
//                   </Grid>
//                 </Grid>
//               </Box>

//               <Box
//                 display="flex"
//                 justifyContent="flex-end"
//                 width="90%"
//                 mt={5}
//                 sx={{ position: "absolute", bottom: "-0px", right: "0px" }}
//               >
//                 {/* <Button
//                   onClick={handleNextButtonClick}
//                   type="submit"
//                   variant="contained"
//                   endIcon={<KeyboardArrowRightIcon />}
//                   color="primary"
//                   sx={{ width: "30%", color: "white", backgroundColor: "blue" }}
//                 >
//                   {isEditMode ? "Save" : "Next"}
//                 </Button> */}
//               </Box>
//             </Box>

//             <Box
//       width="28%"
//       mt={5}
//       sx={{
//         position: "absolute",
//         bottom: "3px",
//         right: "-3px",
//         border: "6px solid #d4d4d4",
//         borderRight: "none",
//         borderBottom: "none",
//         borderTopLeftRadius: "16px",
//         borderTopRightRadius: "16px",
//       }}
//     >
//       <Button
//         onClick={handleNextButtonClick} 
//         type="submit"
//         variant="contained"
//         endIcon={<KeyboardArrowRightIcon />}
//         color="primary"
//         sx={{ width: "100%", color: "white", backgroundColor: "#282AAE", letterSpacing:"3px", fontWeight:"bold", borderRadius:"10px"
// }}
//       >
//         {isEditMode ? "Save" : "Next"}
//       </Button>
//     </Box>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default CourseDetails;
