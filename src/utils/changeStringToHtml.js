import {Markup} from "interweave";

const getHtmlStringWithReplacedVariable = (htmlString, object) => {
    return htmlString.replace(`{${getVariableNameInHtmlString(htmlString)}}`, getLabelDetailFromVariable(htmlString, object));
}

const getVariableNameInHtmlString = (htmlString) => {
    return htmlString.split(">{")[1].split("}<")[0];
}

const getLabelDetailFromVariable = (stringVariable, object) => {
    const splitVariable = getVariableNameInHtmlString(stringVariable).split(".");

    if (stringVariable.indexOf("[") > 0) {
        return object[splitVariable[0]][stringVariable.replace(/[^0-9]/g, "")].title;
    }

    return object[splitVariable[0]][splitVariable[1]];
}

export const changeStringToHTML = (htmlString, object, index) => {
    htmlString = getHtmlStringWithReplacedVariable(htmlString, object);
    return (<Markup key={index} content={htmlString}/>)
}
