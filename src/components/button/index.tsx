import { ButtonProps } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { colors } from "../../styles/themes/colors";
import { SPACING } from "../../styles/themes/spacing";

function MuiThemedButton(props: ButtonProps): JSX.Element {
  const { buttonText } = props;
  const MuiCustomButton = styled(Button)({
    "&:hover": {
      boxShadow: `${SPACING[1]}px ${SPACING[1]}px ${colors.blueGrey.light} !important`,
    },
  });
  return <MuiCustomButton {...props}>{buttonText}</MuiCustomButton>;
}

export default MuiThemedButton;
export { MuiThemedButton };
