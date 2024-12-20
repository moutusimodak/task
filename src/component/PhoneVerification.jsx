import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextField,
  Snackbar,
  Alert,
  Box,
  Typography,
  IconButton,
  Link,
  InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import OTPInput from "./OTPInput";

const initialState = {
  
  phoneNumber: "",
  otp: "",
  generatedOtp: "",
  otpInputs: ["", "", "", "", "", ""],
  isOtpSent: false,
  isPhoneNumberValid: false,
  isOtpValid: false,
  showOtpError: false,
  isVerifyButtonClicked: false,
  showOtp: false,
};

function reducer(state, action) {

  let phoneNumber;
  let generatedOtp;
  let otpInputs;
  let otp;

  switch (action.type) {
    case "SET_PHONE_NUMBER":
      phoneNumber = action.payload;
      return {
        ...state,
        phoneNumber,
        isPhoneNumberValid: phoneNumber.length === 10,
      };

    case "GENERATE_OTP":
      generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
      console.log(generatedOtp);
      return {
        ...state,
        generatedOtp,
        isOtpSent: true,
        otpInputs: ["", "", "", "", "", ""],
        otp: "",
        isOtpValid: false,
        showOtpError: false,
        isVerifyButtonClicked: false,
      };

    case "SET_OTP_INPUT":
      otpInputs = [...state.otpInputs];
      otpInputs[action.payload.index] = action.payload.value;
      otp = otpInputs.join("");
      return {
        ...state,
        otpInputs,
        otp,
        showOtpError:
          state.isVerifyButtonClicked &&
          otp.length === 6 &&
          otp !== state.generatedOtp,
      };

    case "TOGGLE_OTP_VISIBILITY":
      return {
        ...state,
        showOtp: !state.showOtp,
      };

    case "VERIFY_OTP":
      return {
        ...state,
        isVerifyButtonClicked: true,
        isOtpValid: state.otp === state.generatedOtp,
        showOtpError: state.otp !== state.generatedOtp,
      };

    default:
      return state;
  }
}

const PhoneVerification = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      dispatch({ type: "SET_PHONE_NUMBER", payload: value });
    }
  };

  const handleGenerateOtp = () => {
    if (state.isPhoneNumberValid) {
      dispatch({ type: "GENERATE_OTP" });
    }
  };

  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      dispatch({ type: "SET_OTP_INPUT", payload: { index, value } });
      if (value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && state.otpInputs[index] === "") {
      if (index > 0) document.getElementById(`otp-${index - 1}`).focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    if (state.isOtpSent) {
      document.getElementById("otp-0").focus();
    }
  }, [state.isOtpSent]);

  useEffect(() => {
    if (state.isOtpValid) {
      setSnackbar({
        open: true,
        message: "OTP is correct!",
        severity: "success",
      });
      setTimeout(() => navigate("/profile-details"), 1000);
    } else if (state.showOtpError && state.isVerifyButtonClicked) {
      setSnackbar({
        open: true,
        message: "Incorrect OTP. Please try again.",
        severity: "error",
      });
    }
  }, [
    state.isOtpValid,
    state.showOtpError,
    state.isVerifyButtonClicked,
    navigate,
  ]);

  return (

    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        boxSizing:"border-box",
        width: "100%",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{fontSize:{xs:"1.5rem", md:"2rem"}}}>Verify Your Phone Number</Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          boxShadow: 3,
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          

            <TextField

          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIphoneIcon sx={{ marginRight: "8px", color: "grey.600",fontSize:"1.2rem" }} />
              Phone Number
            </Box>
          }
          value={state.phoneNumber}
          onChange={handlePhoneNumberChange}
          id="outlined-start-adornment"
           sx={{
              width: "100%",
              maxWidth:"400px",
              marginBottom: "10px",
            }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">  +91</InputAdornment>,
            },
          }}
          inputProps={{ maxLength: 10 }}
        />
          <Link
            component="button"
            onClick={handleGenerateOtp}
            sx={{
              textDecoration: "none",
              color: state.isPhoneNumberValid ? "primary.main" : "grey.500",
              fontSize: "14px",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            disabled={!state.isPhoneNumberValid}
          >
            Get OTP
          </Link>
        </Box>

        {state.isOtpSent && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            
              marginTop: "24px",
              gap:"8px",
              width: "100%",
              flexWrap:"wrap",
            
            }}
          >
            {state.otpInputs.map((value, index) => (
              <OTPInput
                key={index}
                index={index}
                value={value}
                onChange={handleOtpChange}
                onKeyDown={handleOtpKeyDown}
                id={`otp-${index}`}
                showOtp={state.showOtp}
              />
            ))}
            <IconButton
              onClick={() => dispatch({ type: "TOGGLE_OTP_VISIBILITY" })}
              sx={{ display:"flex", justifyContent:"center", alignItems:"center",borderRadius:"4px"}}
            >
              {state.showOtp ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
        )}

        {state.isOtpSent && (
          <Box sx={{ marginTop: "30px", width: "100%" }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => dispatch({ type: "VERIFY_OTP" })}
              disabled={state.otpInputs.some((input)=>input=== "")}
              sx={{
                backgroundColor: state.otpInputs.some((input) => input === "")?
                "grey.400" :"primary.main",
                "&:hover": {
                  backgroundColor: state.otpInputs.some((input) => input === "")
                  ? "grey.400" 
                  : "primary.dark",
                },
              }}
            >
              Verify OTP
            </Button>
          </Box>
        )}
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  
  );
};

export default PhoneVerification;
