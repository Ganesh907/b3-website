// src/AdminLogin.js

import React, { useState } from 'react';
import { TextField, Button, Typography, Snackbar } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import { Slide } from '@mui/material';
import leftImage from '../../assets/images/blogs/blog2.jpg';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage('Login successful!');
      setErrors({});
      setOpenSnackbar(true);
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      setSuccessMessage('');
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/20">
      <div className="flex w-full max-w-5xl p-4 rounded-lg  overflow-hidden bg-black shadow-md shadow-white border-2 border-white  text-white  ">
        <div className="hidden md:flex md:w-1/2">
          <img src={leftImage} alt="Login Visual" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <form
            className=" w-full max-w-md "
            onSubmit={handleSubmit}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Admin Login
            </Typography>

            {successMessage && (
              <Snackbar
                open={openSnackbar}
                onClose={handleSnackbarClose}
                TransitionComponent={Slide}
                message={successMessage}
                autoHideDuration={3000}
              />
            )}

            <div className="mb-4">
              <TextField
                label={<span className="text-white">Email</span>} // White text for label
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: <Email className="mr-2 text-white" />, // White icon color
                }}
                error={Boolean(errors.email)}
                helperText={errors.email}
                required
                InputLabelProps={{
                  style: { color: 'white' }, // White text for label
                }}
                sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "white" } }}
              />
            </div>

            <div className="mb-6">
              <TextField
                label={<span className="text-white">Password</span>} // White text for label
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: <Lock className="mr-2 text-white" />, // White icon color
                }}
                error={Boolean(errors.password)}
                helperText={errors.password}
                required
                InputLabelProps={{
                  style: { color: 'white' }, // White text for label
                }}
                sx={{ "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "white" } }}
              />
            </div>

            <div className="flex items-center justify-between">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="hover:bg-blue-700 transition duration-300"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
