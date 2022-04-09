import React, { useState, useEffect } from "react";
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
import { SxStyles } from "./config/styles";
import { addFormSchemaEvents } from "../../utils/form";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { CONFIG_LOGIN_SIGNUP } from "./config/constants";

export function FormLogin(): JSX.Element {
  const [createNewAccount, setCreateNewAccount] = useState<boolean>(false);

  const switch2NewAccount = (): void => {
    setCreateNewAccount(!createNewAccount);
  };

  useEffect(() => {
    const btnLogin: HTMLElement = document.getElementsByName(
      CONFIG_LOGIN_SIGNUP.SUBMIT_BTN_NAME
    )[0];

    if (createNewAccount) {
      btnLogin.innerText = CONFIG_LOGIN_SIGNUP.SUBMIT_BTN_SIGNUP_TEXT;
    } else {
      btnLogin.innerText = CONFIG_LOGIN_SIGNUP.SUBMIT_BTN_LOGIN_TEXT;
    }
  }, [createNewAccount]);

  const formik: FormikContextType<LoginFormData> = useFormik<LoginFormData>({
    initialValues: formInitialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values: LoginFormData) => {
      if (createNewAccount) {
        console.log(values, "valores");
        // chamar endpoint para criar conta
      } else {
        // chamar endpoint para logar usuário
      }
      console.log(values);
    },
  });

  return (
    <Box sx={SxStyles.mainContainerStyle}>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Logo style={SxStyles.logoStyle} />
          {LoginSchema.map((schema: TFormSchemaItem) => (
            <React.Fragment>
              {createNewAccount &&
                schema.fieldType === FORM_ELEMENTS.TEXT &&
                schema.id === CONFIG_LOGIN_SIGNUP.FIELD_FULL_NAME_ID && (
                  <Grid item xs={12}>
                    <FormElement
                      key={schema.id}
                      props={addFormSchemaEvents<LoginFormData>(schema, formik)}
                    />
                  </Grid>
                )}

              {schema.fieldType === FORM_ELEMENTS.TEXT &&
                schema.id !== CONFIG_LOGIN_SIGNUP.FIELD_FULL_NAME_ID && (
                  <Grid item xs={12}>
                    <FormElement
                      key={schema.id}
                      props={addFormSchemaEvents<LoginFormData>(schema, formik)}
                    />
                  </Grid>
                )}
              {schema.fieldType === FORM_ELEMENTS.BUTTON && (
                <Box sx={SxStyles.buttonsContainer}>
                  <FormElement
                    key={schema.id}
                    props={addFormSchemaEvents<LoginFormData>(schema, formik)}
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
          <Grid item xs={12}>
            <Box sx={SxStyles.newAccountDetailsContainer(createNewAccount)}>
              {LoginSchema.map((schema: TFormSchemaItem) => (
                <React.Fragment>
                  {schema.fieldType === FORM_ELEMENTS.TYPOGRAPHY && (
                    <FormElement
                      key={schema.id}
                      props={addFormSchemaEvents<LoginFormData>(
                        schema,
                        formik,
                        undefined,
                        SxStyles.newAccountQuestion
                      )}
                    />
                  )}
                  {schema.fieldType === FORM_ELEMENTS.BOX && (
                    <FormElement
                      key={schema.id}
                      props={addFormSchemaEvents<LoginFormData>(
                        schema,
                        formik,
                        switch2NewAccount,
                        SxStyles.newAccountLinkButton
                      )}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default FormLogin;
