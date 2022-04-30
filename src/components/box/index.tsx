import { BoxProps, Box } from "@mui/material";

export function MuiBox(props: BoxProps & JSX.IntrinsicAttributes): JSX.Element {
  const { children, fieldtext, sx, onClick } = props;
  const resolveBoxContent = (): JSX.Element | string => {
    if (children) return children;
    return fieldtext || "";
  };

  const handleClick = (evt: any): any => {
    if (onClick !== undefined) {
      onClick(evt);
    }
  };

  return (
    <Box sx={sx} onClick={(evt: any) => handleClick(evt)} {...props}>
      {resolveBoxContent()}
    </Box>
  );
}

export default MuiBox;
