import React, {useEffect, useState} from "react";
import {
    Avatar,
    Divider,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Paper,
    Skeleton
} from "@mui/material";
import {Abc} from "@mui/icons-material";
import {productMock, productsInMemory} from "../../api/productsInMemory";
import {Link} from "react-router-dom";
import {routes} from "../../utils/appRoutes";

const HomeView = () => {
    const [products, setProducts] = useState(productMock);
    const [loading, setLoading] = useState(true);

    async function getProductsAPI() {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 10000);
        });
    }

    useEffect(() => {
        getProductsAPI()
            .then(() => {
                setProducts(productsInMemory);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    const getSingleProductsNameFirstLetterAndSort = (products) => {
        let letters = [];

        products.map(item => {
            if (!letters.includes(item.name.charAt(0).toUpperCase())) {
                letters.push(item.name.charAt(0).toUpperCase());
            }
        })

        return letters.sort();
    }

    const getProductsByNameFirstLetterAndSort = (products, letter) => {
        let filterProducts = [];

        products.filter(item => {
            if (item.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
                filterProducts.push(item);
            }
        });

        return filterProducts.sort();
    }

    return (
        <div>
            {
                getSingleProductsNameFirstLetterAndSort(products).map((letter) => (
                    <Paper elevation={1} sx={{marginBottom: 5}} key={letter}>
                        <List
                            subheader={
                                <ListSubheader component="div" sx={{fontWeight: "bold"}}>
                                    {
                                        loading
                                            ? <Skeleton width={30}/>
                                            : letter
                                    }
                                </ListSubheader>
                            }
                        >
                            {
                                getProductsByNameFirstLetterAndSort(products, letter).map((item, index) => (
                                    <div key={item.name}>
                                        {index > 0 && <Divider/>}

                                        <ListItemButton disabled={loading} component={Link} to={routes.product.getBySlug(item.slug)}>
                                            <ListItemAvatar>
                                                {
                                                    loading
                                                        ? <Skeleton variant="circular"><Avatar/></Skeleton>
                                                        : <Avatar>
                                                            <Abc/>
                                                        </Avatar>
                                                }
                                            </ListItemAvatar>
                                            <ListItemText primary={loading ? <Skeleton width={100}/> : item.name}/>
                                        </ListItemButton>
                                    </div>
                                ))
                            }
                        </List>
                    </Paper>
                ))
            }
        </div>
    );
};

export default HomeView;