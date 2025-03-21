import CardWrapper from "@components/CardWrapper/CardWrapper";
import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import { Circle } from "@mui/icons-material";
import { Typography, Box, Stack, Divider } from "@mui/material";
import { useState } from "react";

const PortfolioCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingLeft:  "30px" ,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          position: "absolute",
          left: { xs: "8px", sm: "10px" },
          top: 0,
          bottom: 0,
          width: "4px",
          backgroundColor: "#e0e0e0",
          transition: "0.3s",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: { xs: "0px", sm: "2px" },
          top: "20%",
          transform: "translateY(-50%)",
          width: { xs: "12px", sm: "16px" },
          height: { xs: "12px", sm: "16px" },
          zIndex: "22",
          borderRadius: "50%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s",
        }}
      >
        <Circle
          sx={{
            color: isHovered ? COLORS.primary : COLORS.white,
            fontSize: "12px",
            border: isHovered ? `1px solid ${COLORS.white}` : "none",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "20px",
          top: "20%",
          width: "15px",
          height: "4px",
          backgroundColor: isHovered ? COLORS.primary : COLORS.lightn,
          transform: "translateY(-50%)",
          transition: "0.3s",
        }}
      />
      <CardWrapper width={"auto"} height={"auto"} hover={true}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          <Stack gap={"8px"}>
            <Typography
              variant="h4"
              sx={{ fontSize: { md: "24px", xs: "21px" }, fontWeight: 500 }}
            >
              Personal Portfolio April Fools
            </Typography>
            <Typography variant="body2">
              University of DVI (1997 - 2001)
            </Typography>
          </Stack>

          <Box
            sx={{
              border: "none",
              boxShadow: isHovered ? "none" : shadows.shadowWhite3,
              background: isHovered ? COLORS.subtitle : COLORS.white,
              borderRadius: "10px",
              transition: "all 0.3s ease",
              textTransform: "none",
              color: isHovered ? COLORS.white : COLORS.primary,
              position: "relative",
              overflow: "hidden",
              padding: "10px",
              width: "75px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            4.30/5
          </Box>
        </Stack>
        <Divider />
        <Typography fontSize={"18px"} sx={{ pb: isHovered ? 0 : "20px" }}>
          The education should be very interactual. Ut tincidunt est ac dolor
          aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
          lobortis mauris hendrerit ante.
        </Typography>
      </CardWrapper>
    </Box>
  );
};

export default PortfolioCard;
