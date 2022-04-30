import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { SPACING } from "../../styles/themes/spacing";

const MuiThemedAppBar = styled(AppBar)(({ theme }) => ({
  "&.MuiAppBar-root": {
    borderRadius: 2,
    backgroundColor: `${theme.palette.common.white}`,
    boxShadow: `${SPACING[4]}px ${SPACING[4]}px ${SPACING[8]}px ${theme.extraColors.blueGrey.light}`,
    marginBottom: theme.spacing(2),
    "&:first-child": {
      color: theme.palette.primary.main,
      fontStyle: "regular",
      fontWeight: 100,
      fontSize: 18,
    },
  },
}));

export function Header(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiThemedAppBar position="static">
        <Toolbar variant="dense">Contatos</Toolbar>
      </MuiThemedAppBar>
    </Box>
  );
}

export default Header;
