
import React, { useState } from 'react';
import { Checkbox, Button, Snackbar, Typography, Link, FormControlLabel, Box } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';



const FooterSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate(); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      setOpenSnackbar(true);
      setTimeout(()=>{
        navigate('/thankyou')
      })
    }
  };

 
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 2,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FormControlLabel
        control={
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} color="primary" />
        }
        label={
          <Typography variant="body2">
            I agree to the{' '}
            <Link href="#" underline="hover">
              terms and conditions
            </Link>
          </Typography>
        }
      />
      

      <Box sx={{ flexGrow: 1 }} /> 

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!isChecked}
        sx={{ marginRight: 5 }}
      >
        Submit
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you you have successfully applied!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default FooterSection;
