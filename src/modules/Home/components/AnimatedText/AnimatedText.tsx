import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { COLORS } from "@constants/color";

const AnimatedText = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "24px", sm: "32px", md: "50px" },
        fontWeight: 700,
        lineHeight: 1.2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      Hi, I’m{" "}
      <Typography
        component="span"
        sx={{
          color: COLORS.primary,
          fontSize: { xs: "24px", sm: "32px", md: "50px" },
          fontWeight: 700,
        }}
      >
        Najeeb Ullah
      </Typography>
      <br />
      <Typography
        component="span"
        sx={{
          color: COLORS.primary,
          fontSize: { xs: "24px", sm: "32px", md: "50px" },
          fontWeight: 700,
        }}
      >
        a{" "}
      </Typography>
      <TypeAnimation
        sequence={[
          "Developer.",
          1500,
          "Professional Coder.",
          1500,
          "Next.js Developer.",
          1500,
        ]}
        wrapper="span"
        speed={60}
        deletionSpeed={70}
        repeat={Infinity}
        style={{
          display: "inline-block",
          fontSize: "inherit",
          fontWeight: 700,
          color: COLORS.primary,
        }}
      />
    </Typography>
  );
};

export default AnimatedText;
