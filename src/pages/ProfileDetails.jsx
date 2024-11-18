import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import * as Yup from "yup";

import IconBar from "../component/IconBar";
import PageHeader from "../component/PageHeader";
import ActionButton from "../component/ActionButton";

import InputAdornment from "@mui/material/InputAdornment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  IconButton,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const genderOptions = ["Male", "Female"];
const maritalOptions = ["Single", "Married"];
const qualifications = ["10th", "12th", "Graduation", "Post Graduation"];

const validationSchema = Yup.object().shape({
  studentName: Yup.string().required("Required"),
  fatherName: Yup.string().required("Required"),
  dateOfBirth: Yup.date()
    .required("Required")
    .test("age", "age must be 21 years old", (value) => {
      if (value) {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (
          month < 0 ||
          (month === 0 && today.getDate() < birthDate.getDate())
        ) {
          return age - 1 >= 21;
        }
        return age >= 21;
      }
      return false;
    }),
  gender: Yup.string().required("Required"),
  maritalStatus: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  qualification: Yup.string().required("Required"),
  monthlyIncome: Yup.string().required("Required"),
  countryCode: Yup.string().required("Required"),
  phoneNumber: Yup.number().typeError("Must be a number").required("Required"),
});

const ProfileDetails = () => {
  const [isEditMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const handleNextButtonClick = (isValid, isTouched) => {
    if (!isEditMode) {
      navigate("/address-details");
    } else {
      setEditMode(false)
    }
  };

  const dynamicDateOfBirth = "1999-12-12";

  return (
    <Formik
      initialValues={{
        studentName: "Bibhuti Bhusan Jena",
        fatherName: "Bibhuti Bhusan Jena",
        dateOfBirth: dynamicDateOfBirth,
        gender: "Male",
        maritalStatus: "Single",
        email: "anupamjenaofficial@gmail.com",
        qualification: "Graduation",
        monthlyIncome: "2,00,000",
        phoneNumber: "9583492839",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form values:", values);
        setEditMode(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
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
            \<IconBar page="profile" />
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
              {/* Title and Edit Button */}
              <Box marginBottom={30}>
                <PageHeader
                  title="PROFILE DETAILS"
                  isEditMode={isEditMode}
                  setEditMode={setEditMode}
                />

                {/* Form Fields */}

                <Grid container spacing={2}>
                  {/* Student Name Field */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="studentName"
                      label="Student's Name"
                      error={touched.studentName && Boolean(errors.studentName)}
                      helperText={touched.studentName && errors.studentName}
                      disabled={!isEditMode}
                      InputLabelProps={{
                        style: {
                          color: "black",
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
                          marginLeft:"-10px",
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                            {
                              "-webkit-text-fill-color": "black",
                            },
                        },
                      }}
                    />
                  </Grid>

                  {/* Father Name Field */}

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="fatherName"
                      label="Father's Name"
                      type="text"
                      error={touched.fatherName && Boolean(errors.fatherName)}
                      helperText={touched.fatherName && errors.fatherName}
                      disabled={!isEditMode}
                      InputLabelProps={{
                        style: {
                          color: "black",
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
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                            {
                              "-webkit-text-fill-color": "black",
                            },
                        },
                      }}
                    />
                  </Grid>

                  {/* Date of Birth Field */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="dateOfBirth"
                      label="Date of Birth"
                      type={isEditMode ? "date" : "text"}
                      error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                      helperText={touched.dateOfBirth && errors.dateOfBirth}
                      disabled={!isEditMode}
                      value={
                        isEditMode
                          ? values.dateOfBirth
                          : values.dateOfBirth
                          ? dayjs(values.dateOfBirth).format("DD MMM YYYY")
                          : ""
                      }
                      onChange={(e) => {
                        const formattedDate = dayjs(e.target.value).format(
                          "YYYY-MM-DD"
                        );
                        setFieldValue("dateOfBirth", formattedDate);
                      }}
                      InputLabelProps={{
                        style: {
                          color: "black",
                        },
                        shrink: "true",
                      }}
                      InputProps={{
                        endAdornment: !isEditMode ? (
                          <InputAdornment position="end">
                            <IconButton disabled={true} sx={{ padding: 0 }}>
                              <CalendarTodayIcon sx={{ fontSize: 13 }} />
                            </IconButton>
                          </InputAdornment>
                        ) : null,
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
                          marginLeft:"-10px",
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                            {
                              "-webkit-text-fill-color": "black",
                            },
                        },
                      }}
                    />
                  </Grid>
                  {/* Email Id Field */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ mt: 2, ml: 2 }}>
                      <Field
                        as={TextField}
                        fullWidth
                        name="email"
                        label="Email ID"
                        type="email"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        disabled={!isEditMode}
                        InputLabelProps={{
                          style: {
                            color: "black",
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
                            marginLeft:"-10px",
                            backgroundColor: isEditMode ? "white" : "#DCDCDC",
                            "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                              {
                                "-webkit-text-fill-color": "black",
                              },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Phone Number  Field */}
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="phoneNumber"
                      label="Phone Number"
                      
                      InputLabelProps={{
                        style: {
                          color: "black",
                        },
                      }}
                      sx={{
                        width: "168px",
                        height: "36px",
                        borderRadius: "10px",
                        "& .MuiInputBase-root": {
                          height: "36px !important",
                          borderRadius: "10px !important",
                          width: "168px",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "17.6px",
                          marginLeft:"-10px",
                          backgroundColor: isEditMode ? "white" : "#DCDCDC",
                          "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                            {
                              "-webkit-text-fill-color": "black",
                            },
                        },
                      }}
                      value={isEditMode ? `+91 - ${values.phoneNumber || ""}` : `+91 - ${values.phoneNumber || ""}`}
                      onChange={(e) => {
                        if (isEditMode) {
                          const inputValue = e.target.value.replace("+91 - ", "");
                          const phoneNumber = inputValue.replace(/[^0-9]/g, "").slice(0,10);
                          handleChange({
                            target: {
                              name: "phoneNumber",
                              value: phoneNumber,
                            },
                          });
                        }
                      }}
                      // inputProps={{
                      //   readOnly: !isEditMode, // Make the field read-only if not in edit mode
                      // }}
                      error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      disabled={!isEditMode}
                    />
                  </Grid>
                  <Grid container spacing={17.5} sx={{ ml: 2 }}>
                    <Grid
                      container
                      justifyContent="flex-end"
                      spacing={2}
                      sx={{ paddingTop: 0, marginBottom: "13%" }}
                    >
                      {/* Gender  Field */}
                      <Grid item xs={6} sm={3}>
                        <FormControl fullWidth>
                          <Field
                            name="gender"
                            as={TextField}
                            label="Gender"
                            variant="outlined"
                            disabled={!isEditMode}
                            InputLabelProps={{
                              style: {
                                color: "black",
                              },
                            }}
                            sx={{
                              width: "168px",
                              height: "36px",
                              "& .MuiInputBase-root": {
                                height: "36px",
                                borderRadius: "10px",
                                width: "180px",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "17.6px",
                                color: "transparent",

                                outline: "none",
                                boxShadow: "none",
                                border: "none",
                                backgroundColor: isEditMode
                                  ? "white"
                                  : "#DCDCDC",
                                "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                                  {
                                    "-webkit-text-fill-color": "black",
                                  },
                              },
                              "&.Mui-disabled": {
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                              },
                              "& .MuiInputLabel-root": {
                                fontSize: "12px",
                                lineHeight: "17.6px",

                                transform: "translate(10px, -8px) scale(1)",
                                outline: "none",
                                boxShadow: "none",
                                padding: "0 4px",
                                backgroundColor: "transparent",
                                border: "none",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "transparent",
                              },
                            }}
                            // InputLabelProps={{ shrink: true }}
                            value=""
                          />
                          <Box
                            sx={{
                              display: "flex",
                              gap: "8px",
                              position: "absolute",
                              top: "10px",
                              width: "130px",
                              height: "15px",
                              left: "16px",
                              padding: "1px",
                              borderRadius: "4px",
                              border: "1px solid #ccc",
                              backgroundColor: "transparent",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          ></Box>
                          <ToggleButtonGroup
                            value={values.gender}
                            exclusive
                            onChange={(event, newGender) => {
                              if (newGender !== null) {
                                handleChange({
                                  target: { name: "gender", value: newGender },
                                });
                              }
                            }}
                            disabled={!isEditMode}
                            sx={{
                              position: "absolute",
                              top: "0px",
                              left: "19px",
                              display: "flex",
                              gap: "8px",
                              outline: "none",
                              boxShadow: "none",
                              backgroundColor: "transparent",
                              "& .MuiToggleButton-root": {
                                border: "none",
                                fontSize: "10px",
                                fontWeight: "600",
                                boxShadow: "none",
                                outline: "none",
                                backgroundColor: "transparent",

                                "&.Mui-selected": {
                                  color: "black",
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  outline: "none",
                                  border: "none",
                                },
                                "&.Mui-disabled": {
                                  border: "none",
                                  boxShadow: "none",
                                  outline: "none",
                                  backgroundColor: "transparent",
                                },
                                "&:hover": {
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  color: "black",
                                  outline: "none",
                                  border: "none",
                                },
                              },
                            }}
                          >
                            {genderOptions.map((genderOption) => (
                              <ToggleButton
                                key={genderOption}
                                value={genderOption}
                              >
                                {genderOption}
                              </ToggleButton>
                            ))}
                          </ToggleButtonGroup>
                        </FormControl>
                      </Grid>

                      {/* Marital Status  Field */}
                      <Grid item xs={6} sm={3}>
                        <FormControl fullWidth>
                          <Field
                            name="maritalStatus"
                            as={TextField}
                            label="Marital Status"
                            variant="outlined"
                            disabled={!isEditMode}
                            InputLabelProps={{
                              style: {
                                color: "black",
                              },
                            }}
                            sx={{
                              width: "168px",
                              height: "36px",
                              marginLeft: "4px",
                              "& .MuiInputBase-root": {
                                height: "36px",
                                borderRadius: "10px",
                                width: "180px",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "17.6px",
                                color: "transparent",
                                boxShadow: "none",
                                outline: "none",
                                backgroundColor: isEditMode
                                  ? "white"
                                  : "#DCDCDC",
                                "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                                  {
                                    "-webkit-text-fill-color": "black",
                                  },
                              },
                              "& .MuiInputLabel-root": {
                                fontSize: "12px",
                                lineHeight: "17.6px",

                                transform: "translate(10px, -8px) scale(1)",

                                padding: "0 4px",
                              },
                              "& .MuiOutlinedInput-notchedOutline": {},
                            }}
                            // InputLabelProps={{ shrink: true }}
                            value=""
                          />
                          <Box
                            sx={{
                              display: "flex",
                              gap: "8px",
                              position: "absolute",
                              top: "10px",
                              width: "130px",
                              height: "15px",
                              left: "16px",
                              padding: "1px",
                              borderRadius: "4px",
                              border: "1px solid #ccc",
                              backgroundColor: "transparent",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          ></Box>
                          <ToggleButtonGroup
                            value={values.maritalStatus}
                            exclusive
                            onChange={(event, newStatus) => {
                              if (newStatus !== null) {
                                handleChange({
                                  target: {
                                    name: "maritalStatus",
                                    value: newStatus,
                                  },
                                });
                              }
                            }}
                            disabled={!isEditMode}
                            sx={{
                              position: "absolute",
                              top: "0px",
                              left: "19px",
                              display: "flex",
                              gap: "8px",
                              "& .MuiToggleButton-root": {
                                border: "none",
                                fontSize: "10px",
                                fontWeight: "600",
                                boxShadow: "none",
                                outline: "none",

                                "&.Mui-selected": {
                                  color: "black",
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                },
                                "&:hover": {
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                  outline: "none",
                                  color: "black",
                                },
                              },
                            }}
                          >
                            {maritalOptions.map((maritalOptions) => (
                              <ToggleButton
                                key={maritalOptions}
                                value={maritalOptions}
                              >
                                {maritalOptions}
                              </ToggleButton>
                            ))}
                          </ToggleButtonGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={11} sx={{ ml: 2 }}>
                    <Grid container justifyContent="flex-end" spacing={2}>
                      {/* Qualification Field */}
                      <Grid item xs={6} sm={3}>
                        <FormControl fullWidth>
                          <InputLabel sx={{ color: "black" }}>
                            Qualification
                          </InputLabel>
                          <Field
                            as={Select}
                            name="qualification"
                            label="qualification"
                            disabled={!isEditMode}
                            sx={{
                              width: "180px",
                              height: "36px",
                              borderRadius: "10px",
                              fontSize: "14px",
                              fontWeight: "600",
                              lineHeight: "17.6px",
                              backgroundColor: isEditMode ? "white" : "#DCDCDC",
                              "& .MuiSelect-select.Mui-disabled": {
                                "-webkit-text-fill-color": "black",
                              },
                            }}
                          >
                            {qualifications.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Field>
                        </FormControl>
                      </Grid>

                      {/* Monthly Income  Field */}
                      <Grid item xs={6} sm={3}>
                        <Field
                          as={TextField}
                          fullWidth
                          name="monthlyIncome"
                          label="Monthly Income"
                          error={
                            touched.monthlyIncome &&
                            Boolean(errors.monthlyIncome)
                          }
                          helperText={
                            touched.monthlyIncome && errors.monthlyIncome
                          }
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
                            marginLeft: "4px",
                            "& .MuiInputBase-root": {
                              height: "36px !important",
                              borderRadius: "10px !important",
                              width: "180px",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "17.6px",
                              backgroundColor: isEditMode ? "white" : "#DCDCDC",
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

export default ProfileDetails;
