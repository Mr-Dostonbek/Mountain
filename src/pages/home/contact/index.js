import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { AccountOutlineIcon, PhoneIcon } from '@icons/material';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './style.scss'


const Contact = ({title}) => {
    return (
        <div className='contact_section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <h1>{title}</h1>
                        <p>Ma'lumotlaringizni qoldiring va biz tez orada siz bilan bog'lanamiz</p>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-12'>
                                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                    <FormControl sx={{
                                        width: 368,
                                        maxWidth: '100%',
                                    }} variant="standard">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Name
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <AccountOutlineIcon />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </div>
                            <div className='col-12'>
                                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                    <FormControl sx={{
                                        width: 368,
                                        maxWidth: '100%',
                                    }} variant="standard">
                                        <InputLabel htmlFor="input-with-icon-adornment">
                                            Phone number
                                        </InputLabel>
                                        <Input
                                        defaultValue="+998 "
                                            id="input-with-icon-adornment"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </div>
                            <div className='col-12'>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Tugmani bosish orqali siz bizning ma'lumotlaringizni ishlatish bo'yicha ofertamizga rozi bo'lgan bo'lasiz." />
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-warning'>Bepul Konsultatsiya</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
