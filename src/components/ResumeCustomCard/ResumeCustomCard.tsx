import { useState } from "react";
import CardWrapper from "@components/CardWrapper/CardWrapper";
import CustomButton from "@components/CustomButton/CustomButton";
import { COLORS } from "@constants/color";
import { Stack, Typography, Box } from "@mui/material";
import { Circle } from "@mui/icons-material";

const ResumeCustomCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        paddingBottom: { xs: "20px", sm: "30px" },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          position: "absolute",
          left: { xs: "8px", sm: "10px" },
          top: "100%",
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
          top: "100%",
          transform: "translateY(-50%)",
          width: { xs: "12px", sm: "16px" },
          height: { xs: "12px", sm: "16px" },
          zIndex: "22",
          borderRadius: "50%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Circle
          sx={{
            width: { xs: "10px", sm: "14px" },
            height: { xs: "10px", sm: "14px" },
            borderRadius: "50%",
            transition: "0.3s",
            color: isHovered ? COLORS.primary : "white",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: { xs: "8px", sm: "10px" },
          top: "100%",
          width: { xs: "16px", sm: "20px" },
          height: "4px",
          backgroundColor: "#e0e0e0",
          transform: "translateY(-50%)",
          transition: "0.3s",
        }}
      />
      <CardWrapper width={"50%"} height={"auto"}>
        <Stack
          direction={"row"}
          color={COLORS.bodyWhite}
          justifyContent={"space-between"}
        >
          <Stack gap={"8px"}>
            <Typography variant="h4" sx={{ fontSize: "24px", fontWeight: 500 }}>
              Personal Portfolio April Fools
            </Typography>
            <Typography variant="body2">
              University of DVI (1997 - 2001)
            </Typography>
          </Stack>

          <CustomButton title={"4.70/5"} hover={true} />
        </Stack>
        <Typography fontSize={"18px"} color={COLORS.bodyWhite}>
          The education should be very interactual. Ut tincidunt est ac dolor
          aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
          lobortis mauris hendrerit ante.
        </Typography>
      </CardWrapper>
    </Box>
  );
};

export default ResumeCustomCard;
