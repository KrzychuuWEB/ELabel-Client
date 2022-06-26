import React from "react";
import { Route, Routes,} from "react-router-dom";
import HomeView from "./views/home";
import ProductGetAllView from "./views/product/getAll";
import AppComponents from "./utils/appComponents";
import {routes} from "./utils/appRoutes";
import ProductGetBySlugView from "./views/product/getBySlug";
import ProductCreateView from "./views/product/create";
import LabelTemplateCreateView from "./views/label/create";

const App = () => {

    return (
        <AppComponents>
            <Routes>
                <Route path={routes.home} element={<HomeView/>}/>
                <Route path={routes.product.getAll} element={<ProductGetAllView/>}/>
                <Route path={routes.product.getBySlug(":productSlug")} element={<ProductGetBySlugView/>}/>
                <Route path={routes.product.create} element={<ProductCreateView/>}/>
                <Route path={routes.label.create} element={<LabelTemplateCreateView/>}/>
            </Routes>
        </AppComponents>
    );
};

export default App;
