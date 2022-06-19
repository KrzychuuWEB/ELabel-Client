import React from "react";
import DefaultTemplate from "./defaultTemplate";

const AppComponents = ({children}) => {

    return (
        <DefaultTemplate>

            {children}
        </DefaultTemplate>
    );
};

export default AppComponents;