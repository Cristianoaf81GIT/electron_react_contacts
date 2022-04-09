import { ButtonProps } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { colors } from "../../styles/themes/colors";
import { SPACING } from "../../styles/themes/spacing";

function MuiThemedButton(props: ButtonProps): JSX.Element {
  const { buttonText, buttonVariant } = props;
  const MuiCustomButton = styled(Button)({
    "&:hover": {
      boxShadow:
        buttonVariant && buttonVariant !== "outlined"
          ? `${SPACING[1]}px ${SPACING[1]}px ${colors.blueGrey.light} !important`
          : "none",
    },
  });
  return (
    <MuiCustomButton {...props} variant={buttonVariant || "contained"}>
      {buttonText}
    </MuiCustomButton>
  );
}

export default MuiThemedButton;
export { MuiThemedButton };
