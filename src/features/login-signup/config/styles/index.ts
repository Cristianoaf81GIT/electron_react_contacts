import { SxProps, Theme } from "@mui/material";
import { colors } from "../../../../styles/themes/colors";
import { SPACING } from "../../../../styles/themes/spacing";

const mainContainerStyle: SxProps<Theme> | undefined = { 
  width: "80%", 
  marginLeft: "auto", 
  marginRight: "auto" 
};

const logoStyle = {
  width: "20%",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
}

const newAccountDetailsContainer = (newAccount: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly', 
  mt: !newAccount ? 5 : 2,
});

const newAccountQuestion: SxProps<Theme> | undefined = {
  fontWeight: SPACING[256] + SPACING[40] + SPACING[4],
  fontSize: SPACING[12],
  fontStyle: 'normal',
  color: 'primary.main',
};

const newAccountLinkButton: SxProps<Theme> | undefined = {
  fontWeight: SPACING[256] + SPACING[40] + SPACING[4],
  fontSize: SPACING[12],
  fontStyle: 'normal',
  color: 'secondary.main',
  cursor: 'pointer',
  height: 'auto',
  minWidth: SPACING[128] + SPACING[4],
  borderRadius: SPACING[8],
  textAlign: 'center',
  padding: '2px',
  '&-webkit-user-select': 'none',  
  '&-moz-user-select': 'none',    
  '&-ms-user-select': 'none',  
  userSelect: 'none',
  '&:hover': {
    color: colors.blueGrey.light,
    bgcolor: 'rgba(0,180,255,0.25)',
  },  
}

const buttonsContainer: SxProps<Theme> | undefined = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  marginTop: SPACING[4],
  padding: SPACING[2],
}

export const SxStyles = {
  mainContainerStyle,
  logoStyle,
  newAccountDetailsContainer,
  newAccountQuestion,
  newAccountLinkButton,
  buttonsContainer
}