import React from "react";
import {styled} from "@mui/material/styles";
import {Avatar, Paper} from "@mui/material";

const IconPosition = styled('div')(({theme}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -70,
    marginBottom: 30,
    "svg": {
        fontSize: 70,
        color: theme.palette.primary.main,
    }
}));

const BoxWithIcon = ({children, icon}) => {

    return (
        <Paper sx={{padding: 2, marginTop: 10}} elevation={2}>
            <IconPosition>
                <Avatar sx={{backgroundColor: "#f1f1f1", width: "100px", height: "100px"}}>
                    {icon}
                </Avatar>
            </IconPosition>

            {children}
        </Paper>
    );
};

export default BoxWithIcon;