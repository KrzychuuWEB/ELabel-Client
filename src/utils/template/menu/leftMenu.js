import React from "react";
import {Box, Divider, Drawer, List, ListSubheader} from "@mui/material";
import {Add, ViewList} from "@mui/icons-material";
import {routes} from "../../appRoutes";
import LeftMenuItem from "./leftMenuItem";

const menuItemsProductSection = [
    {
        name: "Lista produktów",
        href: routes.home,
        icon: <ViewList/>,
    },
    {
        name: "Dodaj produkt",
        href: routes.product.create,
        icon: <Add/>,
    },
]

const menuItemsLabelSection = [
    {
        name: "Dodaj szablon etykiety",
        href: routes.label.create,
        icon: <Add/>,
    },
]

const menuItemsUserSection = [
    {
        name: "Lista użytkowników",
        href: "/users",
        icon: <ViewList/>,
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
                sx={{width: 300}}
                role="presentation"
            >
                <List>
                    <ListSubheader>Produkty</ListSubheader>
                    <LeftMenuItem
                        items={menuItemsProductSection}
                    />

                    <Divider/>
                    <ListSubheader>Etykiety</ListSubheader>
                    <LeftMenuItem
                        items={menuItemsLabelSection}
                    />

                    <Divider/>
                    <ListSubheader>Użytkownicy</ListSubheader>
                    <LeftMenuItem
                        items={menuItemsUserSection}
                    />
                </List>
            </Box>
        </Drawer>
    );
};

export default LeftMenuDrawer;