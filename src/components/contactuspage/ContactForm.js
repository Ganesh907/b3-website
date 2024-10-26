import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validate = () => {
        let tempErrors = {};

        // Validate Full Name
        if (!formValues.fullName.trim()) {
            tempErrors.fullName = 'Full Name is required';
        } else if (/\d/.test(formValues.fullName)) {
            tempErrors.fullName = 'Full Name cannot contain numbers';
        }

        // Validate Email with Strong Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formValues.email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!emailRegex.test(formValues.email)) {
            tempErrors.email = 'Email is invalid';
        }

        // Validate Phone Number
        if (!formValues.phone.trim()) {
            tempErrors.phone = 'Phone Number is required';
        } else if (!/^[6-9]\d{9}$/.test(formValues.phone)) {
            tempErrors.phone = 'Phone Number must be 10 digits and start with 6, 7, 8, or 9';
        }

        // Validate Message
        if (!formValues.message.trim()) {
            tempErrors.message = 'Message is required';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Send form data via EmailJS
            emailjs.send(
                'service_fbnx2d8', // Replace with your EmailJS Service ID
                'template_zf1tcub', // Replace with your EmailJS Template ID
                formValues, // Form data
                'qbvig9SJ9MIEKWZIV' // Replace with your EmailJS User ID
            ).then((response) => {
                alert("Message sent successfully!");
                console.log('SUCCESS!', response.status, response.text);
                setFormValues({
                    fullName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }).catch((err) => {
                console.error('FAILED...', err);
                alert("Failed to send message. Please try again.");
            });
        }
    };

    const linkClass = "group relative inline-flex items-center overflow-hidden px-2 py-2 transition-colors duration-300 ";

    return (
        <div className='flex justify-center p-5  md:py-5 items-center w-auto md:scale-90 text-white rounded-md'
            style={{
                backgroundColor: 'rgb(0,0,0,0.4)'
            }}>
            <form className='text-center text-white' onSubmit={handleSubmit}>
                <h1 className='font-bold text-4xl drop-shadow-lg text-white'>Contact Us</h1>
                <h2 className='font-semibold mt-2 text-base text-white'>
                    Any question or remarks? Just write us a message!
                </h2>

                <div className='grid grid-cols-1 gap-10 mt-6 mb-8'>
                    {/* Full Name Field */}
                    <Box display="flex" alignItems="center">
                        <PersonIcon style={{ color: 'white', marginRight: '10px', marginTop: '14px' }} />
                        <TextField
                            id="fullName"
                            name="fullName"
                            label="Full Name"
                            variant="standard"
                            value={formValues.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                            InputLabelProps={{
                                style: { color: "white" },
                            }}
                            InputProps={{
                                sx: {
                                    color: 'white',
                                    '&:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: 'white',
                                    },
                                    '&:after': {
                                        borderBottomColor: '#0060b5',
                                    },
                                },
                            }}
                            fullWidth
                        />

                    </Box>

                    <Box display="flex" alignItems="center">
                        <PhoneIcon style={{ color: 'white', marginRight: '10px', marginTop: '14px' }} />
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            variant="standard"
                            value={formValues.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            InputLabelProps={{
                                style: { color: "white" },
                            }}
                            InputProps={{
                                sx: {
                                    color: 'white',
                                    '&:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: 'white',
                                    },
                                    '&:after': {
                                        borderBottomColor: '#0060b5',
                                    },
                                },
                                inputProps: {
                                    maxLength: 10,
                                    pattern: "[0-9]*",
                                    inputMode: 'numeric',
                                },
                            }}
                            fullWidth
                        />
                    </Box>

                    <Box display="flex" alignItems="center">
                        <EmailIcon style={{ color: 'white', marginRight: '10px', marginTop: '14px' }} />
                        <TextField
                            id="email"
                            name="email"
                            label="Work Email"
                            variant="standard"
                            value={formValues.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            InputLabelProps={{
                                style: { color: "white" },
                            }}
                            InputProps={{
                                sx: {
                                    color: 'white',
                                    '&:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '&:hover:not(.Mui-disabled):before': {
                                        borderBottomColor: 'white',
                                    },
                                    '&:after': {
                                        borderBottomColor: '#0060b5',
                                    },
                                },
                            }}
                            fullWidth
                        />
                    </Box>
                </div>

                <Box display="flex" alignItems="center">
                    <MessageIcon style={{ color: 'white', marginRight: '10px', marginTop: '0px' }} />
                    <TextField
                        id="message"
                        name="message"
                        label="Write Your Message"
                        multiline
                        rows={2}
                        variant="standard"
                        fullWidth
                        value={formValues.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        sx={{ marginBottom: '20px' }}
                        InputLabelProps={{
                            style: { color: "white" },
                        }}
                        InputProps={{
                            sx: {
                                color: 'white',
                                '&:before': {
                                    borderBottomColor: 'white',
                                },
                                '&:hover:not(.Mui-disabled):before': {
                                    borderBottomColor: 'white',
                                },
                                '&:after': {
                                    borderBottomColor: '#0060b5',
                                },
                            },
                        }}
                    />
                </Box>

                <button
                    className={`group relative border-transparent font-semibold rounded-md bg-white text-[#0060b5] transition-all duration-300 ${linkClass}`}
                >
                    <span className="relative z-10 text-[#0060b5] group-hover:text-white">Send Message</span>
                    <span className="absolute inset-y-0 -left-1 w-full  bg-[#0060b5] translate-x-[-100%] group-hover:translate-x-1 transition-transform duration-500 ease-in-out z-0"></span>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;