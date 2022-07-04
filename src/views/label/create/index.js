import React from "react";
import {Box, Button, Paper, Step, StepLabel, Stepper} from "@mui/material";
import ConfigStep from "./steps/configStep";
import {styled} from "@mui/material/styles";
import CreateTemplateStep from "./steps/createTemplate";
import {useFormik} from "formik";
import {ConfigStepValidationSchema} from "./steps/forms/validationsSchema";

const steps = [
    "Konfiguracja szablonu",
    "Tworzenie szablonu",
    "Podsumowanie",
];

const RootContentStep = styled('div')(({theme}) => ({
    marginTop: 40,
    marginBottom: 20,
}));

const RootContentAndButtons = styled('div')(({theme}) => ({
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
}));

const LabelTemplateCreateView = () => {
    const [activeStep, setActiveStep] = React.useState(1);
    const [productId, setProductId] = React.useState(1);

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const handleNextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleProductIdFromSelect = e => {
        setProductId(e.target.value);
    }

    const formik = useFormik({
        initialValues: {
            label_id: 1,
            name: "",
        },
        validationSchema: ConfigStepValidationSchema,
        onSubmit: (values, helpers) => {
            if (!isLastStep()) {
                helpers.setSubmitting(false);
                handleNextStep();
                return;
            }

            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <Paper sx={{width: '100%', padding: 2, boxSizing: "border-box"}}>
                <Stepper sx={{marginTop: 2}} activeStep={activeStep} alternativeLabel>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <RootContentAndButtons>
                    {
                        activeStep === steps.length - 1 ? (
                            <div>
                                <Box sx={{display: 'flex', justifyContent: "flex-end", pt: 2}}>
                                    <Button type="submit">
                                        Zapisz
                                    </Button>
                                </Box>
                            </div>
                        ) : (
                            <div>
                                <RootContentStep>
                                    {activeStep === 0 && <ConfigStep formik={formik}
                                                                     handleProductIdFromSelect={handleProductIdFromSelect}
                                                                     productId={productId}
                                    />}
                                    {activeStep === 1 && <CreateTemplateStep />}
                                </RootContentStep>

                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBackStep}
                                        sx={{mr: 1}}
                                    >
                                        Wstecz
                                    </Button>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    <Button type="submit">
                                        {isLastStep() ? "Zapisz" : "Dalej"}
                                    </Button>
                                </Box>
                            </div>
                        )
                    }
                </RootContentAndButtons>
            </Paper>
        </form>
    );
};

export default LabelTemplateCreateView;