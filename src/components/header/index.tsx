import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import BuildIcon from "@mui/icons-material/Build";
import { SPACING } from "../../styles/themes/spacing";
import { HeaderProps } from "./types";
import { AlertDialogSlide } from "../dialog";
import { AllActions } from "../../store/actions";

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

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "primary.main",
      width: 32,
      height: 32,
    },
    children: `${name.split(" ")[0][0].toUpperCase()}`,
  };
}

export function Header({ userLoginData: userData }: HeaderProps): JSX.Element {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleExitModal = (): void => {
    setOpenModal(!openModal);
    handleCloseUserMenu();
  };

  const doLogout = (): void => {
    toggleExitModal();
    setTimeout(() => {
      dispatch(AllActions.userLoginAction("", "", ""));
    }, 500);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiThemedAppBar position="static">
        <Toolbar variant="dense">
          Contatos
          {userData && userData.userName !== "" && (
            <Box sx={{ flexGrow: 0, position: "absolute", right: 5 }}>
              <Tooltip title="configurações">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar {...stringAvatar(userData.userName)} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "15px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuList>
                  <MenuItem
                    key={`config`}
                    onClick={handleCloseUserMenu}
                    sx={{ "&:hover": { color: "info.main" } }}
                  >
                    <ListItemIcon>
                      <BuildIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography textAlign="center">Configurações</Typography>
                  </MenuItem>

                  <Divider />

                  <MenuItem
                    key={`logout`}
                    onClick={toggleExitModal}
                    sx={{ "&:hover": { color: "info.main" } }}
                  >
                    <ListItemIcon>
                      <MeetingRoomIcon fontSize="small" color="info" />
                    </ListItemIcon>
                    <Typography textAlign="center">Sair</Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </MuiThemedAppBar>

      <AlertDialogSlide
        open={openModal}
        setOpen={setOpenModal}
        dialogTitleText="Confirmar logout"
        confirmButtonText="Sair"
        confirmButtonAction={() => doLogout()}
        cancelButtonText="Cancelar"
        dialogTextContent="Deseja mesmo sair da aplicação?"
      />
    </Box>
  );
}

export default Header;
