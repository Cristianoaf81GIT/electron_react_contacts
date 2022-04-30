import React, { useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { SnackBarProviderProps } from "./types";
import { SnackBarContext } from "./snackbar.context";

export function SnackBarProvider({
  children,
}: SnackBarProviderProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const snackBarPosition: SnackbarOrigin = {
    horizontal: "center",
    vertical: "top",
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <SnackBarContext.Provider value={{ open, setOpen, message, setMessage }}>
      <>
        <Snackbar
          anchorOrigin={snackBarPosition}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message={message}
          action={action}
        />
        {children}
      </>
    </SnackBarContext.Provider>
  );
}
