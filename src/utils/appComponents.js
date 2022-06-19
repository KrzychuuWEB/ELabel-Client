import React from "react";
import MenuBar from "../components/menu";

const AppComponents = ({children}) => {

    return (
        <div>
            <MenuBar />

            {children}
        </div>
    );
};

export default AppComponents;