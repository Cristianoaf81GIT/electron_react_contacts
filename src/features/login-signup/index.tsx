import React from "react";
import { Box, Grid } from "@mui/material";
import {
  LoginSchema,
  ValidationSchema,
  formInitialValues,
} from "./form-schema";
import { FORM_ELEMENTS } from "../../global/constants";
import { FormElement } from "../../components/form";
import { TFormSchemaItem } from "../../global/types";
import { useFormik, FormikContextType } from "formik";
import { LoginFormData } from "./types";
import { mainContainerStyle, logoStyle } from "./config/styles";
import { addFormSchemaEvents } from "../../utils/form";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export function FormLogin(): JSX.Element {
  const formik: FormikContextType<LoginFormData> = useFormik<LoginFormData>({
    initialValues: formInitialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values: LoginFormData) => {
      console.log(values);
    },
  });

  return (
    <Box sx={mainContainerStyle}>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Logo style={logoStyle} />
          {LoginSchema.map((schema: TFormSchemaItem) => (
            <React.Fragment>
              {schema.fieldType === FORM_ELEMENTS.TEXT && (
                <Grid item xs={12}>
                  <FormElement
                    key={schema.id}
                    props={addFormSchemaEvents<LoginFormData>(schema, formik)}
                  />
                </Grid>
              )}
              {schema.fieldType === FORM_ELEMENTS.BUTTON && (
                <Grid item xs={2}>
                  <FormElement
                    key={schema.id}
                    props={addFormSchemaEvents<LoginFormData>(schema, formik)}
                  />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </form>
    </Box>
  );
}

export default FormLogin;
