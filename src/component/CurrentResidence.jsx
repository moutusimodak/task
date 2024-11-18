import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Field } from "formik";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CurrentResidence = ({
  isEditMode,
  values,
  errors,
  touched,
  setFieldValue,
  residenceOption,
  handleChange,
}) => {
  return (
    <Grid container spacing={2}>
    {/* Current House part */}
    <Grid item xs={12} sm={6}>
      <Field
        as={TextField}
        fullWidth
        name="currentFlat"
        label="Flat/House/Building Apartment Number"
        error={touched.currentFlat && Boolean(errors.currentFlat)}
        helperText={touched.currentFlat && errors.currentFlat}
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

    {/* Current Area part */}

    <Grid item xs={12} sm={6}>
      <Field
        as={TextField}
        fullWidth
        name="currentArea"
        label="Area/Street sector/village"
        error={touched.currentArea && Boolean(errors.currentArea)}
        helperText={touched.currentArea && errors.currentArea}
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

    {/* Current Pin Code*/}

    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sm={6}
        container
        spacing={4}
        sx={{ mt: 1 }}
      >
        <Grid item xs={6}>
          <Field
            as={TextField}
            fullWidth
            name="currentPinCode"
            label="Pin Code"
            error={
              touched.currentPinCode &&
              Boolean(errors.currentPinCode)
            }
            helperText={
              touched.currentPinCode && errors.currentPinCode
            }
            disabled={!isEditMode}
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

        {/* Current City */}

        <Grid item xs={6}>
          <Field
            as={TextField}
            fullWidth
            name="currentCity"
            label="City"
            error={
              touched.currentCity && Boolean(errors.currentCity)
            }
            helperText={touched.currentCity && errors.currentCity}
            disabled={!isEditMode}
            InputLabelProps={{
              style: {
                color: "black",
              },
            }}
            sx={{
              width: "180px",
              height: "36px",
              borderRadius: "10px",
              marginLeft:"-4px",
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

      {/* Current Residence Type Part */}

      <Grid
        item
        xs={12}
        sm={6}
        container
        spacing={4}
        sx={{ mt: 1 }}
      >
        <Grid item xs={6}>
          <FormControl fullWidth>
            <Field
              name="residence"
              as={TextField}
              label="Residence Type"
              variant="outlined"
              disabled={!isEditMode}
              InputLabelProps={{
                style: {
                  color: "black",
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
              value={values.residence}
              exclusive
              onChange={(event, newResidence) => {
                if (newResidence !== null) {
                  handleChange({
                    target: {
                      name: "residence",
                      value: newResidence,
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
                <ToggleButton
                  key={residenceOptions}
                  value={residenceOptions}
                >
                  {residenceOptions}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FormControl>
        </Grid>

        {/* Current Year Residence Part */}

        <Grid item xs={6} >
          <Field
            as={TextField}
            fullWidth
            name="currentYearsInResidence"
            label="Years in Residence"
            variant="outlined"
            value={values.currentYearsInResidence}
            error={
              touched.currentYearsInResidence &&
              Boolean(errors.currentYearsInResidence)
            }
            helperText={
              touched.currentYearsInResidence &&
              errors.currentYearsInResidence
            }
            disabled={!isEditMode}
            InputLabelProps={{
              style: {
                color: "black",
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
                "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled":
                  {
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
                        "currentYearsInResidence",
                        Math.max(
                          values.currentYearsInResidence - 1,
                          0
                        )
                      )
                    }
                    disabled={!isEditMode}
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
                        "currentYearsInResidence",
                        values.currentYearsInResidence + 1
                      )
                    }
                    disabled={!isEditMode}
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

export default CurrentResidence;

