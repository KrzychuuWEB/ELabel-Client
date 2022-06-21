import React from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from "@mui/material";
import {Person, ViewList} from "@mui/icons-material";

const menuItemsSectionOne = [
    {
        name: "Lista produktów",
        href: "/products",
        icon: <ViewList/>,
    },
]

const menuItemsSectionTwo = [
    {
        name: "Lista użytkowników",
        href: "/users",
        icon: <Person/>,
    },
]

const LeftMenuDrawer = ({isOpenLeftMenu, toggleLeftMenu}) => {

    return (
        <Drawer
            anchor="left"
            open={isOpenLeftMenu}
            onClose={() => toggleLeftMenu()}
        >
            <Box
                sx={{width: 250}}
                role="presentation"
            >
                <List>
                    <ListSubheader>Produkty</ListSubheader>
                    {menuItemsSectionOne.map(item => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton href={item.href}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <Divider/>

                    <ListSubheader>Użytkownicy</ListSubheader>
                    {menuItemsSectionTwo.map(item => (
                        <ListItem key={item.name} disablePadding>
                            <ListItemButton href={item.href}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default LeftMenuDrawer;