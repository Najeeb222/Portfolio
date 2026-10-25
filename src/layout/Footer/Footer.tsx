import { COLORS } from "@constants/color";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

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
     
      <Image src="/assets/images/headerImg.png" alt="Najeeb Ullah" width={70} height={70} style={{ borderRadius: "50%", objectFit: "cover", border: `1px solid ${COLORS.danger}` }} />

   
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
