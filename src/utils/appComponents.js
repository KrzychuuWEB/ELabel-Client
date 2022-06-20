import React from "react";
import DefaultTemplate from "./template/defaultTemplate";

const AppComponents = ({children}) => {

    return (
        <DefaultTemplate>

            {children}
        </DefaultTemplate>
    );
};

export default AppComponents;