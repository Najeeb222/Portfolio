import { COLORS } from "@constants/color";
import { Box, Stack, Typography, } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        gap: "16px",
        pb: "60px",
        pt: "40px",
        borderTop: `1px solid rgba(255,255,255,0.1)`,
        textAlign: "center",
      }}
    >
     
      <Box
        component="img"
        src="assets/images/myImg.png"
        alt="Najeeb Ullah Logo"
        sx={{ width: '70px', height: "70px",borderRadius:'50%',border:`1px solid ${COLORS.danger}`,objectFit:'cover' }}
      />

   
      <Typography
        sx={{
          color: COLORS.bodyWhite,
          fontSize: "15px",
          fontWeight: 400,
          maxWidth: 500,
        }}
      >
        I’m available for freelance opportunities — let’s connect and create
        something impactful together.
      </Typography>

    

 
      <Typography
        sx={{
          color: COLORS.bodyWhite,
          fontSize: "14px",
          opacity: 0.7,
          mt: 1,
        }}
      >
        &copy; {new Date().getFullYear()} Najeeb Ullah. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
