import React from "react";
import {useFormik} from "formik";
import CustomFormTextField from "../../../components/form/textField";
import Typography from "@mui/material/Typography";

const LabelTemplateCreateView = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            width: 0,
            height: 0,

        },
    });

    const labelPositions = [
        {
            attr: "product.name",
            x: 40,
            y: 10,
            fontSize: 24,
        },
        {
            attr: "product.description",
            x: 100,
            y: 50,
        },
        {
            attr: "product_marking.bestBefore",
            x: 50,
            y: 200,
        },
        {
            attr: "product_details.title[0]",
            x: 100,
            y: 250,
        },
    ]

    const labels = {
        product: {
            name: "Babka jajowata łuska",
            description: "sposób użycia: 1/2 łyżki na 100ml wody",
        },
        product_marking: {
            bestBefore: "09/2023",
        },
        product_details: [
            {
                title: "Zawiera C02",
            },
            {
                title: "Może zawierać łupiny",
            },
        ],
    }

    const changeVariableToText = variableToChange => {
        let splitVariable = variableToChange.split(".");

        if (variableToChange.indexOf("[") > 0) {
            return labels[splitVariable[0]][variableToChange.replace(/[^0-9]/g, "")].title;
        }

        return labels[splitVariable[0]][splitVariable[1]];
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <CustomFormTextField
                    name="name"
                    label="Nazwa szablonu"
                    formik={formik}
                />
            </form>


            <div style={{width: 300, height: 300, position: "relative", border: "1px dashed #000"}}>
                {
                    labelPositions.map(item => (
                        <Typography style={{
                            top: item.y,
                            left: item.x,
                            position: "absolute",
                            fontSize: item.fontSize
                        }}>
                            {changeVariableToText(item.attr)}
                        </Typography>
                    ))
                }
            </div>
        </div>
    );
};

export default LabelTemplateCreateView;