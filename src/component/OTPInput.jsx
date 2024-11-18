import { TextField } from "@mui/material";

const OTPInput = ({ index, value, onChange, onKeyDown, id, showOtp }) => (
  <TextField

    id={id}
    value={value}
    onChange={(e) => onChange(index, e.target.value)}
    onKeyDown={(e) => onKeyDown(e, index)}
    inputProps={{ maxLength: 1 }}
    variant="outlined"
    sx={{
      width: "40px",
      height: "40px",
      margin: "0 5px",
      fontSize: "18px",
      textAlign: "center",
    }}
    type={showOtp ? "text" : "password"}  
  />
);

export default OTPInput;
