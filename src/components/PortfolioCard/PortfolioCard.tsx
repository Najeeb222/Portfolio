// PortfolioCard.tsx
import CardWrapper from "@components/CardWrapper/CardWrapper";
import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import { Circle } from "@mui/icons-material";
import { Typography, Box, Stack, Divider } from "@mui/material";
import { useState } from "react";

type PortfolioCardProps = {
  title: string;
  subtitle: string; // university, company, or duration
  description: string;
  score?: string; // optional: GPA, rating, etc
};

const PortfolioCard = ({ title, subtitle, description, score }: PortfolioCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingLeft: "30px",
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

     {/* Timeline Dot */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: "0px", sm: "2px" },
          top: "20%",
          transform: "translateY(-50%)",
          width: { xs: "12px", sm: "16px" },
          height: { xs: "12px", sm: "16px" },
          borderRadius: "50%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s",
          zIndex: 2,
        }}
      >
        <Circle
          sx={{
            color: isHovered ? COLORS.primary : COLORS.white,
            fontSize: "12px",
            border: isHovered ? `1px solid ${COLORS.white}` : "none",
            borderRadius: "50%",
            transition: "all 0.3s ease",
          }}
        />
      </Box>

      {/* Connector Line */}
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

   
      <Box height={{ lg: "300px", md: "350px", sm: "400px", xs: "auto" }}>
        <CardWrapper width="100%" height="100%" hover>
          <Stack
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
            gap="20px"
            flexGrow={1}
          >
            {/* Title + Subtitle */}
            <Stack gap="8px">
              <Typography
                variant="h4"
                sx={{ fontSize: { md: "24px", xs: "21px" }, fontWeight: 500 }}
              >
                {title}
              </Typography>
              <Typography variant="body2">{subtitle}</Typography>
            </Stack>

            {/* Score */}
            {score && (
              <Box
                sx={{
                  border: "none",
                  boxShadow: isHovered ? "none" : shadows.shadowWhite3,
                  background: isHovered ? COLORS.subtitle : COLORS.white,
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  color: isHovered ? COLORS.white : COLORS.primary,
                  padding: "10px",
                  width: "75px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {score}
              </Box>
            )}
          </Stack>

          <Divider />

          {/* Description */}
          <Typography
            fontSize="16px"
            sx={{
              pb: isHovered ? 0 : "20px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
           
            
              lineHeight: 1.5,
            
              transition: "0.3s",
            }}
          >
            {description}
          </Typography>
        </CardWrapper>
      </Box>
    </Box>
  );
};

export default PortfolioCard;
