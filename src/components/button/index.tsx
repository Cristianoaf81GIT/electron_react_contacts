import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { colors } from "../../styles/themes/colors";

function MuiThemedButton(props: ButtonProps): JSX.Element {
  const MuiCustomButton = styled(Button)({
    "&:hover": {
      boxShadow: `1px 1px ${colors.blueGrey.light} !important`,
    },
  });
  return <MuiCustomButton {...props} />;
}

export default MuiThemedButton;
export { MuiThemedButton };
