import { Box, Card, Stack } from "@mui/material";
import { shadows } from "@constants/shadow";
import { COLORS } from "@constants/color";
import { ArrowForward } from "@mui/icons-material";

type Props = {
  children?: React.ReactNode;
  width: string | number | { md: string; sm: string; xs: string };
  height: string | number | { md: string; sm: string; xs: string };
  p?: string | number | { md: string; xs: string };
  hover?: boolean;
  topIcon?: React.ReactNode;
  isArrow?: boolean;
};

const CardWrapper = ({
  children,
  height,
  width,
  p,
  hover,
  topIcon,
  isArrow,
}: Props) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: height,
        width: width,
        p: p ? p : "1em",
        border: "none",
        background: COLORS.gradients.gradientBoxW,
        boxShadow: shadows.shadowWhite3,
        borderRadius: "10px",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          color: hover ? COLORS.white : "inherit",
        },

        "&:hover .hoverBox": {
          transform: "translateY(0px)",
        },
        "&:hover .icon": {
          opacity: 1,
        },
        "&:hover .topIcon": {
          color: COLORS.white,
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: COLORS.gradients.gradientRedHover,
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        },
        "&:hover::before": {
          opacity: hover ? 1 : 0,
        },

        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <Stack
        className="hoverBox"
        sx={{
          transition: "transform 0.3s ease",
          transform: hover ? "translateY(20px)" : "none",
        }}
        rowGap={{ md: 3, sm: 2, xs: 1.5 }}
      >
        <Box
          className="topIcon"
          sx={{
            fontSize: 70,
            color: COLORS.primary,
            transition: "transform 0.3s ease",
          }}
        >
          {topIcon}
        </Box>

        {children}
        {isArrow && (
          <Box
            className="icon"
            sx={{ opacity: 0, transition: "transform 0.3s ease" }}
          >
            <ArrowForward sx={{ fontSize: "40px" }} />
          </Box>
        )}
      </Stack>
    </Card>
  );
};

export default CardWrapper;
