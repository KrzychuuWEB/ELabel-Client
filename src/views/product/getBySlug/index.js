import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {productsInMemory} from "../../../api/productsInMemory";
import {Abc, Edit} from "@mui/icons-material";
import BoxWithIcon from "../../../components/box/withIcon";
import Typography from "@mui/material/Typography";
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Skeleton, Tab, Tabs} from "@mui/material";

const ProductGetBySlugView = () => {
    const {productSlug} = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState(0);

    async function getProductAPI() {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(productsInMemory.find(item => item.slug === productSlug));
            }, 5000);
        });
    }

    useEffect(() => {
        getProductAPI().then(result => {
            setProduct(result);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    const onChangeTab = (event: React.SyntheticEvent, value: number) => {
        setTab(value);
    };


    return (
        <div>
            <BoxWithIcon
                icon={<Edit/>}
            >
                <Typography align="center" variant="h4">
                    {
                        loading
                            ? <Skeleton sx={{margin: "auto"}} width={300} height={60}/>
                            : product.name
                    }
                </Typography>

                <List sx={{marginTop: 2}}>
                    <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Abc/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Slug produktu"
                                    secondary={product.slug}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Abc/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Data utworzenia produktu"
                                    secondary={product.createdAt}
                                />
                            </ListItem>
                        </Grid>
                    </Grid>
                </List>
            </BoxWithIcon>

            <div>
                <Paper sx={{marginTop: 5, width: "100%"}}>
                    <Tabs value={tab} onChange={onChangeTab} centerd>
                        <Tab label="Etykiety małe" />
                        <Tab label="Etykiety duże" />
                        <Tab label="Inna firma" />
                    </Tabs>
                </Paper>

                {tab === 0 && "małe"}
                {tab === 1 && "duże"}
                {tab === 2 && "inna"}
            </div>
        </div>
    );
};

export default ProductGetBySlugView;