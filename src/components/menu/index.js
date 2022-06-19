import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useTheme} from "@mui/material";
import {APP_NAME} from "../../utils/constants";
import {Login} from "@mui/icons-material";
import LeftMenuDrawer from "./leftMenu";
import {Link} from "react-router-dom";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    transition: "0.2s",
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: "100%",
    '& .MuiInputBase-input': {
        color: theme.palette.primary.main,
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

const Root = styled("div")(() => ({
    marginBottom: 80,
}));

export default function MenuBar() {
    const theme = useTheme();
    const [isOpenLeftMenu, setIsOpenLeftMenu] = React.useState(false);

    const toggleLeftMenu = () => {
        setIsOpenLeftMenu(!isOpenLeftMenu);
    }

    return (
        <Root>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed" color="inherit">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="open drawer"
                            sx={{mr: 2}}
                            onClick={toggleLeftMenu}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to="/"
                            color="primary"
                            sx={{
                                flexGrow: 1,
                                display: {xs: 'none', sm: 'block'},
                                textDecoration: "none",
                                color: theme.palette.primary.main,
                            }}
                        >
                            {APP_NAME}
                        </Typography>

                        <div style={{width: "600px"}}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon color="primary"/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Szukaj produktu…"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Search>
                        </div>

                        <div style={{flexGrow: 1}}/>

                        <div>
                            <IconButton>
                                <Login/>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>

            <LeftMenuDrawer
                isOpenLeftMenu={isOpenLeftMenu}
                toggleLeftMenu={toggleLeftMenu}
            />
        </Root>
    );
}