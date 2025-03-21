import { COLORS } from "@constants/color";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const AnimatedText = () => {
  return (
    <>
      <h1>
        <Typography sx={{ fontSize: {xs:'25px',sm:'40px',md:'50px'}, fontWeight: 700 }}>
          Hi I’m <span style={{ color: COLORS.primary }}> Najeeb Ullah</span>
          <br />
          <span style={{ color: COLORS.primary }}>a </span>
          <span>
            <TypeAnimation
              sequence={[
                "  Developer.",
                1000,
                " Professional coder.",
                1000,
                "Next js Developer.",
                1000,
              ]}
              wrapper="span"
              speed={70}
              deletionSpeed={80}
              repeat={Infinity}
              style={{
                display: "inline-block",
              }}
            >
              <span style={{ color: "#ff0000" }}>Shah Faisal</span>
            </TypeAnimation>
          </span>
        </Typography>
      </h1>
    </>
  );
};

export default AnimatedText;
