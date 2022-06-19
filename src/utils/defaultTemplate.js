import React from 'react';
import {styled} from '@mui/material/styles';
import MenuBar from "../components/menu";

const Main = styled('main')(({theme}) => ({
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(1.5),

    [theme.breakpoints.down('xs')]: {
        width: '98%',
    },
    [theme.breakpoints.only('sm')]: {
        width: 750,
    },
    [theme.breakpoints.only('md')]: {
        width: 1000,
    },
    [theme.breakpoints.only('lg')]: {
        width: 1200,
    },
    [theme.breakpoints.only('xl')]: {
        width: 1500,
    },
}));

const DefaultTemplate = ({children}) => {
    return (
        <div>
            <header>
                <MenuBar/>
            </header>

            <Main>
                {children}
            </Main>
        </div>
    );
}

export default DefaultTemplate;