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
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        position: "relative",
        overflow: "hidden",

        // Thin red accent line that draws across the top on hover
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: COLORS.primary,
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
          zIndex: 3,
        },

        ...(hover && {
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: shadows.shadowWhiteHover,
          },
          "&:hover::before": { transform: "scaleX(1)" },
          "&:hover .hoverTitle": { color: COLORS.primary },
          "&:hover .icon": { opacity: 1, transform: "translateX(0)" },
          "&:hover .topIcon": { transform: "scale(1.08)" },
        }),

        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <Stack rowGap={{ md: 3, sm: 2, xs: 1.5 }}>
        {topIcon && (
          <Box
            className="topIcon"
            sx={{
              fontSize: 70,
              color: COLORS.primary,
              transition: "transform 0.4s ease",
              transformOrigin: "left center",
            }}
          >
            {topIcon}
          </Box>
        )}

        {children}
        {isArrow && (
          <Box
            className="icon"
            sx={{
              opacity: 0,
              color: COLORS.primary,
              transform: "translateX(-8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <ArrowForward sx={{ fontSize: "32px" }} />
          </Box>
        )}
      </Stack>
    </Card>
  );
};

export default CardWrapper;
