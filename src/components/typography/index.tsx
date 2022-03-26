import { Typography, TypographyProps } from "@mui/material";

export function MuiTypography(props: TypographyProps): JSX.Element {
  return (
    <Typography variant={props.TypographyVariant} sx={props.sx}>
      {props.fieldtext}
    </Typography>
  );
}

export default MuiTypography;
