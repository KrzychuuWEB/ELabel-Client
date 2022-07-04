import * as yup from "yup";

export const ConfigStepValidationSchema = yup.object({
    label_id: yup
        .number('Pole musi być numeryczne')
        .required('Pole jest wymagane'),
    name: yup
        .string('Pole musi zawierać ciąg znaków')
        .required('Pole jest wymagane'),
});