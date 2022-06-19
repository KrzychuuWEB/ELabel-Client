import React from "react";
import { Route, Routes,} from "react-router-dom";
import HomeView from "./views/home";
import ProductGetAllView from "./views/product/getAll";
import AppComponents from "./utils/appComponents";
import {routes} from "./utils/appRoutes";

const App = () => {

    return (
        <AppComponents>
            <Routes>
                <Route path={routes.home} element={<HomeView/>}/>
                <Route path={routes.product.getAll} element={<ProductGetAllView/>}/>
            </Routes>
        </AppComponents>
    );
};

export default App;
