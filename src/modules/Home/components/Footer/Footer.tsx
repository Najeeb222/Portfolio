import { COLORS } from "@constants/color";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack sx={{ alignItems: "center", gap: "20px", pb: "100px" }}>
      <Box component={"img"} src="assets/images/footerLogo.png" />
      <Typography
        sx={{
          color: COLORS.bodyWhite,
          fontSize: "17px",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        &copy; 2022. All rights reserved by Rainbow-Themes.
      </Typography>
    </Stack>
  );
};

export default Footer;
