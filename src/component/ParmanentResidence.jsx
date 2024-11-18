import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Field } from "formik";

const PermanentResidence = ({
  values,
  errors,
  touched,
  isEditMode,
  sameAsPermanent,
  residenceOption,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Grid container spacing={2}>
      {/* Permanent House part */}

      <Grid item xs={12} sm={6}>
        <Field
          as={TextField}
          fullWidth
          name="permanentFlat"
          label="Flat/House/Building Apartment Number"
          error={touched.permanentFlat && Boolean(errors.permanentFlat)}
          helperText={touched.permanentFlat && errors.permanentFlat}
          disabled={!isEditMode || sameAsPermanent}
          InputLabelProps={{
            style: {
              color: "black",
              marginLeft: "-14px",
              border: "0px solid black",
              padding: "0px 4px",
              borderRadius: "15px",
              backgroundColor: "white",
              marginTop:"-4px"
            },
          }}
          sx={{
            width: "368px",
            height: "36px",
            borderRadius: "10px",
            "& .MuiInputLabel-root": {
              marginLeft: "-12px", 
            },
            "& .MuiInputBase-root": {
              height: "36px !important",
              borderRadius: "10px !important",
              width: "368px",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "17.6px",
              marginLeft:"-10px",
              backgroundColor: isEditMode ? "white" : "#DCDCDC",
              "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "black",
              },
            },
          }}
        />
      </Grid>

      {/* Permanent Area part */}

      <Grid item xs={12} sm={6}>
        <Field
          as={TextField}
          fullWidth
          name="permanentArea"
          label="Area/Street sector/village"
          error={touched.permanentArea && Boolean(errors.permanentArea)}
          helperText={touched.permanentArea && errors.permanentArea}
          disabled={!isEditMode || sameAsPermanent}
          InputLabelProps={{
            style: {
              color: "black",
              marginLeft: "-1px",
              border: "0px solid black",
              padding: "0px 4px",
              borderRadius: "15px",
              backgroundColor: "white",
              marginTop:"-4px"
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
              "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
                "-webkit-text-fill-color": "black",
              },
            },
          }}
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} container spacing={4} sx={{ mt: 1 }}>
          {/* Permanent Pin Code  */}
          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="permanentPinCode"
              label="Pin Code"
              error={
                touched.permanentPinCode && Boolean(errors.permanentPinCode)
              }
              helperText={touched.permanentPinCode && errors.permanentPinCode}
              disabled={!isEditMode || sameAsPermanent}
              InputLabelProps={{
                style: {
                  color: "black",
                  marginLeft: "-1px",
                  border: "0px solid black",
                  padding: "0px 4px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop:"-4px"
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
                  "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
                    "-webkit-text-fill-color": "black",
                  },
                },
              }}
            />
          </Grid>

          {/* Permanent City part */}

          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="permanentCity"
              label="City"
              error={touched.permanentCity && Boolean(errors.permanentCity)}
              helperText={touched.permanentCity && errors.permanentCity}
              disabled={!isEditMode || sameAsPermanent}
              InputLabelProps={{
                style: {
                  color: "black",
                  marginLeft: "-1px",
                  border: "0px solid black",
                  padding: "0px 4px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop:"-4px"
                },
              }}
              sx={{
                width: "168px",
                height: "36px",
                borderRadius: "10px",
                marginLeft: "-4px",
                "& .MuiInputBase-root": {
                  height: "36px !important",
                  borderRadius: "10px !important",
                  width: "180px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "17.6px",
                  backgroundColor: isEditMode ? "white" : "#DCDCDC",
                  "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
                    "-webkit-text-fill-color": "black",
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Permanent Residence Type part */}
        <Grid item xs={12} sm={6} container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <Field
                name="permanentResidenceType"
                as={TextField}
                label="Residence Type"
                variant="outlined"
                disabled={!isEditMode}
                InputLabelProps={{
                  style: {
                    color: "black",
                    marginLeft: "-1px",
                    border: "0px solid black",
                    padding: "0px 4px",
                    borderRadius: "15px",
                    backgroundColor: "white",
                    marginTop:"-4px"
                  },
                  shrink: "true",
                }}
                sx={{
                  width: "168px",
                  height: "36px",
                  marginLeft: "10px",
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
                    backgroundColor: isEditMode ? "white" : "#DCDCDC",
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
                  left: "23px",
                  padding: "1px",
                  borderRadius: "4px",
                  border: "1px solid gray",
                  backgroundColor: "transparent",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              ></Box>
              <ToggleButtonGroup
                value={values.permanentResidenceType}
                exclusive
                onChange={(event, newResidence) => {
                  if (newResidence !== null) {
                    handleChange({
                      target: {
                        name: "permanentResidenceType",
                        value: newResidence,
                      },
                    });
                  }
                }}
                disabled={!isEditMode || sameAsPermanent}
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
                    textTransform: "none",
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
                {residenceOption.map((residenceOptions) => (
                  <ToggleButton key={residenceOptions} value={residenceOptions}>
                    {residenceOptions}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </FormControl>
          </Grid>
          {/* Permanent Year In Residence part */}

          <Grid item xs={6}>
            <Field
              as={TextField}
              fullWidth
              name="permanentYearsInResidence"
              label="Years in Residence"
              variant="outlined"
              value={values.permanentYearsInResidence}
              error={
                touched.permanentYearsInResidence &&
                Boolean(errors.permanentYearsInResidence)
              }
              helperText={
                touched.permanentYearsInResidence &&
                errors.permanentYearsInResidence
              }
              disabled={!isEditMode || sameAsPermanent}
              InputLabelProps={{
                style: {
                  color: "black",
                  marginLeft: "-1px",
                  border: "0px solid black",
                  padding: "0px 4px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  marginTop:"-4px"
                },
                shrink: "true",
              }}
              sx={{
                width: "168px",
                height: "36px",
                borderRadius: "10px",
                "& .MuiInputBase-root": {
                  height: "36px !important",
                  borderRadius: "10px !important",
                  width: "180px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "17.6px",
                  textAlign: "center",
                  backgroundColor: isEditMode ? "white" : "#DCDCDC",
                  "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
                    "-webkit-text-fill-color": "black",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  padding: "0px",
                  textAlign: "center",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      size="small"
                      onClick={() =>
                        setFieldValue(
                          "permanentYearsInResidence",
                          Math.max(
                            parseInt(values.permanentYearsInResidence || 0) - 1,
                            0
                          )
                        )
                      }
                      disabled={!isEditMode || sameAsPermanent}
                      sx={{ color: "#555555" }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() =>
                        setFieldValue(
                          "permanentYearsInResidence",
                          parseInt(values.permanentYearsInResidence || 0) + 1
                        )
                      }
                      disabled={!isEditMode || sameAsPermanent}
                      sx={{ color: "#555555" }}
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PermanentResidence;
