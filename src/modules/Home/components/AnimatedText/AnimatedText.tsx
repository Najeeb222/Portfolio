import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { COLORS } from "@constants/color";

const AnimatedText = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "28px", sm: "40px", md: "50px" },
        fontWeight: 700,
        lineHeight: 1.2,
      }}
    >
      Hi, I’m <span style={{ color: COLORS.primary }}>Najeeb Ullah</span>
      <br />
      <span style={{ color: COLORS.primary }}>a </span>
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
        style={{ display: "inline-block" }}
      />
    </Typography>
  );
};

export default AnimatedText;
