import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { COLORS } from "@constants/color";

const AnimatedText = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "34px", sm: "44px", md: "56px" },
        fontWeight: 800,
        lineHeight: 1.15,
        color: COLORS.headingWv,
      }}
    >
      Hi, I’m{" "}
      <Box component="span" sx={{ color: COLORS.primary }}>
        Najeeb Ullah
      </Box>
      {/* Own line with a fixed height + no wrapping, so the text below never jumps while typing */}
      <Box
        component="span"
        sx={{
          display: "block",
          mt: "8px",
          minHeight: "1.3em",
          whiteSpace: "nowrap",
          fontSize: { xs: "21px", sm: "30px", md: "36px" },
          fontWeight: 700,
          color: COLORS.bodyWhite,
          "& .type-cursor::after": { color: COLORS.primary },
        }}
      >
        a{" "}
        <TypeAnimation
          sequence={[
            "MERN Stack Developer.",
            1500,
            "Full-Stack Developer.",
            1500,
            "Next.js Developer.",
            1500,
            "React Developer.",
            1500,
          ]}
          wrapper="span"
          className="type-cursor"
          speed={60}
          deletionSpeed={70}
          repeat={Infinity}
        />
      </Box>
    </Typography>
  );
};

export default AnimatedText;
