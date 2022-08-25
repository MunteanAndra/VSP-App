import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeSnackbar, snackBarSelector} from "../store/Snackbar";

const CustomSnackbar = () => {

    const dispatch = useDispatch();

    const {open, text} = useSelector(state => snackBarSelector(state));

    const handleCloseSnackbar = () => {
        dispatch(closeSnackbar());
    }

    return(
        <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity='success'> {text} </Alert>
        </Snackbar>
        );

}

export default CustomSnackbar;