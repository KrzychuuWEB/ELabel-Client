import React from "react";
import {TextField} from "@mui/material";

const CustomFormTextField = ({formik, name, label}) => {

    return (
        <TextField
            sx={{marginBottom: 2}}
            fullWidth
            id={name}
            name={name}
            label={label}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && (formik.errors[name])}
        />
    );
};

export default CustomFormTextField;