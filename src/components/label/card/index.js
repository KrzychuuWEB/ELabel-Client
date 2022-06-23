import React from "react";
import {styled} from "@mui/material/styles";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Height, Image, Pattern, Preview, QrCode} from "@mui/icons-material";

const FlexCardHeader = styled('div')(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const LabelCard = () => {

    return (
        <Card sx={{width: 350}}>
            <CardContent>
                <FlexCardHeader>
                    <Typography variant="h6">
                        Masa netto: 1KG
                    </Typography>

                    <IconButton>
                        <Preview color="primary"/>
                    </IconButton>
                </FlexCardHeader>

                <Divider sx={{marginTop: 2}}/>

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Pattern/>
                        </ListItemIcon>
                        <ListItemText
                            primary="Mała firmowa"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Height/>
                        </ListItemIcon>
                        <ListItemText
                            primary="Dł: 100 x Szer: 150"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <QrCode/>
                        </ListItemIcon>
                        <ListItemText
                            primary="1234567890"
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Image/>
                        </ListItemIcon>
                        <ListItemText
                            primary="Link do zdjęcia"
                        />
                    </ListItem>
                </List>
            </CardContent>

            <CardActions>
                <Button color="primary" variant="contained">Drukuj</Button>
                <Button color="secondary" variant="outlined">Edytuj</Button>
            </CardActions>
        </Card>
    );
};

export default LabelCard;