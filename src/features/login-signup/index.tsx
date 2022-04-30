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
import { loginSignupService } from "./service/login-signup.service";
import { useSnackBar } from "../../context/snackbar/snackbar.hook";

export function FormLogin(): JSX.Element {
  const [createNewAccount, setCreateNewAccount] = useState<boolean>(false);
  const snackBarControls = useSnackBar();

  const switch2NewAccount = (): void => {
    setCreateNewAccount(!createNewAccount);
  };

  const formik: FormikContextType<LoginFormData> = useFormik<LoginFormData>({
    initialValues: formInitialValues,
    validationSchema: ValidationSchema,
    onSubmit: async (values: LoginFormData) => {
      console.log(values, "valores");
      if (createNewAccount) {
        const result = await loginSignupService.createNewAccount(values);
        snackBarControls.setMessage("Successo, usuário criado com sucesso!");
        snackBarControls.setOpen(result);
        // TODO
        // 1 - toda vez que o usuário criar conta
        //  1.1 - trocar campo full name
        //  1.2 - trocar texto do botão cadastrar
        //  1.3 - trocar o texto do link
      } else {
        // chamar endpoint para logar usuário
      }
    },
  });

  useEffect(() => {
    const btnLogin: HTMLElement = document.getElementsByName(
      CONFIG_LOGIN_SIGNUP.SUBMIT_BTN_NAME
    )[0];

    const newAccountLink: HTMLElement = document.getElementsByName(
      CONFIG_LOGIN_SIGNUP.FIELD_NEW_ACCOUNT_NAME
    )[0];

    const loginAccountQuestion: HTMLElement = document.getElementsByName(
      CONFIG_LOGIN_SIGNUP.FIELD_LOGIN_ACCOUNT_QUESTION
    )[0];

    if (createNewAccount) {
      console.log(createNewAccount, "teste if");
      btnLogin.innerText = CONFIG_LOGIN_SIGNUP.SUBMIT_BTN_SIGNUP_TEXT;
      newAccountLink.innerText = CONFIG_LOGIN_SIGNUP.LOGIN_LINK_TEXT;
      loginAccountQuestion.innerText = CONFIG_LOGIN_SIGNUP.LGN_QST_HAS_ACC;
    } else {
      console.log(createNewAccount, "teste else");
      btnLogin.innerText = CONFIG_LOGIN_SIGNUP.SUBMIT_BTN_LOGIN_TEXT;
      newAccountLink.innerText = CONFIG_LOGIN_SIGNUP.LGN_LNK_TEXT_CREATE_ACCNT;
      loginAccountQuestion.innerText = CONFIG_LOGIN_SIGNUP.LGN_QST_NOT_HAS_ACC;
    }
  }, [createNewAccount, formik]);

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
                <Box sx={SxStyles.buttonsContainer(createNewAccount)}>
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
