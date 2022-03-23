import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { colors } from "../../styles/themes/colors";

const MuiThemedAppBar = styled(AppBar)(({ theme }) => ({
  "&.MuiAppBar-root": {
    borderRadius: 2,
    boxShadow: `2px 2px ${colors.blueGrey.light}`,
    marginBottom: theme.spacing(2),
  },
  "&.MuiAppBar-root:hover": {
    boxShadow: `1px 1px 1px ${colors.blueGrey.light}`,
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
