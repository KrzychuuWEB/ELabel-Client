import React from "react";
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const LeftMenuItem = ({items}) => {

    return (
        <div>
            {items.map(item => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton href={item.href}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </div>
    );
};

export default LeftMenuItem;