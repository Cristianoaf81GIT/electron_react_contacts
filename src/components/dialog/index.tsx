import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { AlertDialogProps } from "./types";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
): JSX.Element {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AlertDialogSlide({
  open,
  setOpen,
  confirmButtonText,
  confirmButtonAction,
  cancelButtonText,
  dialogTextContent,
  dialogTitleText,
}: AlertDialogProps): JSX.Element {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogTitleText}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogTextContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={confirmButtonAction ? confirmButtonAction : handleClose}
          >
            {confirmButtonText}
          </Button>
          {cancelButtonText && cancelButtonText.length > 0 && (
            <Button color="info" onClick={handleClose}>
              {cancelButtonText}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
