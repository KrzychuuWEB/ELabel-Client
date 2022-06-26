import React from "react";
import BoxWithIcon from "../../../components/box/withIcon";
import {Add} from "@mui/icons-material";
import {useFormik} from "formik";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import * as Yup from 'yup';
import CustomFormTextField from "../../../components/form/textField";

const ActionButtons = styled('div')(({theme}) => ({
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-end"
}));

const ProductCreateView = () => {
    const productSchema = Yup.object().shape({
        name: Yup.string().min(2, "Nazwa jest za krótka!").required("Pole jest wymagane"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: productSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <div>
            <BoxWithIcon
                icon={<Add/>}
                width="380px"
            >
                <Typography
                    align="center"
                    variant="h5"
                    sx={{marginBottom: 5}}
                >
                    Dodaj nowy produkt
                </Typography>

                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <CustomFormTextField
                        name="name"
                        label="Nazwa produktu"
                        formik={formik}
                    />

                    <ActionButtons>
                        <Button
                            variant="contained"
                            type="submit"
                        >
                            Dodaj
                        </Button>
                    </ActionButtons>
                </form>
            </BoxWithIcon>
        </div>
    );
};

export default ProductCreateView;