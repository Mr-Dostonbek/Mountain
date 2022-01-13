import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import './style.scss';
import { AccountOutlineIcon, PhoneIcon } from '@icons/material';
import { CloseIcon, CloseCircleOutlineIcon } from '@icons/material';

const Modalka = () => {

    function ModalHide() {
        document.body.style.overflow = 'visible';
        const focus = document.querySelector('.modal-focus');
        focus.classList.remove('display-block-m')
    }

    function ErrorModal() {
        const inputModal1 = document.querySelector('#input1');
        const inputModal2 = document.querySelector('#input2');
        const erorModal = document.querySelector('.error-data');
        const success = document.querySelector('.success');
        if (inputModal1.value == " " || inputModal2.value == " ") {
            erorModal.classList.add('display-block-m')
        } else {
            // success.classList.add('display-block-m')
        }
    }

    return (
        <div class="modal-focus">
            <div className="error-data">
                <div className='data-failed'>
                    <div className='row'>
                        <div className='col-12'>
                            <CloseCircleOutlineIcon className="close-btn" />
                        </div>
                        <div className='col-12'>
                            <h1>Пожалуйста, заполните все поля</h1>
                        </div>
                    </div>
                </div>
                <div className='success-modal'>
                    <h1>Salom dunyo</h1>
                </div>
            </div>
            <div className='focus'>
                <span onClick={ModalHide}>
                    <CloseIcon />
                </span>
                <h1 className='modal-title-f'>Biz bilan bog'laning</h1>
                <div className="row">
                    <div className="col-12">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <FormControl fullWidth variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment input2">
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
                            <FormControl fullWidth variant="standard">
                                <InputLabel htmlFor="input-with-icon-adornment">
                                    Phone Number
                                </InputLabel>
                                <Input
                                    id="input-with-icon-adornment input2"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>
                        <button onClick={ErrorModal} className="btn focus-btn">Bog'lanish</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modalka;
