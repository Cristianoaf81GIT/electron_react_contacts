export interface AlertDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dialogTitleText: string;
  dialogTextContent: string;
  confirmButtonText: string;
  confirmButtonAction?: () => void;
  cancelButtonText?: string;
}