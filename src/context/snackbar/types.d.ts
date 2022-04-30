
export interface SnackBarContextValues {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface SnackBarProviderProps {
  children: React.ReactNode | JSX.Element;
}
