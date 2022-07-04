import React from "react";
import {MenuItem, TextField} from "@mui/material";
import CustomFormTextField from "../../../../components/form/textField";

const ConfigStep = ({productId, handleProductIdFromSelect, formik}) => {

    return (
        <div>
            <TextField
                fullWidth
                select
                label="Wybierz etykietę"
                id="label_id"
                name="label_id"
                value={formik.label_id}
                onChange={formik.handleChange("label_id")}
                defaultValue={1}
            >
                <MenuItem value={1}>Etykieta mała</MenuItem>
                <MenuItem value={2}>Etykieta duża</MenuItem>
                <MenuItem value={3}>Etykieta firma X</MenuItem>
            </TextField>

            <TextField
                sx={{marginTop: 5}}
                fullWidth
                select
                label="Przykładowy produkt"
                id="product_id"
                name="product_id"
                value={productId}
                onChange={handleProductIdFromSelect}
                defaultValue={1}
                helperText="Wybierz przykładowy produkt (tylko w celach wizualizacji etykiety, produkt nie zostanie powiązany z szablonem!)"
            >
                <MenuItem value={1}>Babka jajowata łuska</MenuItem>
                <MenuItem value={2}>Babka płesznik</MenuItem>
                <MenuItem value={3}>Ziarno kakaowca</MenuItem>
            </TextField>

            <CustomFormTextField
                sx={{marginTop: 3}}
                formik={formik}
                label="Nazwa szablonu"
                name="name"
            />
        </div>
    );
};

export default ConfigStep;