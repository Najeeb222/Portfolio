import { CardWrapper } from "@components/index";
import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import {
  Box,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import StaticTab from "../StaticTab/StaticTab";

const Pricing = () => {
  const [value, setValue] = useState("Static");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container disableGutters maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      <Grid container spacing={2} sx={{ minHeight: { md: "100vh" } }}>
        {/* Left Section: Pricing Header */}
        <Grid item xs={12} md={5}>
          <Stack
            sx={{
              gap: "15px",
              position: { md: "sticky" }, 
              top: { md: 0 }, 
              py: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                letterSpacing: "2px",
                fontWeight: 500,
                color: COLORS.subtitle,
                textAlign: { xs: "center", md: "left" }, 
              }}
            >
              PRICING
            </Typography>
            <Typography
              variant="h2"
              sx={{
                marginBottom: "30px",
                fontWeight: "700",
                fontSize: { xs: "34px", sm: "40px", md: "60px" }, 
                color: COLORS.bodyWhite,
                textAlign: { xs: "center", md: "left" }, 
              }}
            >
              My Pricing
            </Typography>
          </Stack>
        </Grid>

      
        <Grid item xs={12} md={7}>
          <CardWrapper
            width="100%"
            height="auto"
            p={{ xs: "10px", md: "0px" }} 
          >
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                  boxShadow: shadows.shadowWhite3,
                  width: "100%",
            
                }}
                TabIndicatorProps={{ sx: { display: "none" } }}
              >
                <Tab sx={tabStyle} label="Static" value="Static" />
                <Tab sx={tabStyle} label="Standard" value="Standard" />
                <Tab sx={tabStyle} label="Premium" value="Premium" />
              </Tabs>
            </Box>
            {value === "Static" && <StaticTab />}
            {value === "Standard" && <StaticTab />}
            {value === "Premium" && <StaticTab />}
          </CardWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;

const tabStyle = {
  border: "none",
  paddingY: '30px' , 
  width: { xs: "100%", sm: "33%" }, 
  fontWeight: "bold",
  background: "transparent",
  borderRadius: "10px",
  transition: "all 0.3s ease",
  position: "relative",
  color: COLORS.bodyWhite,
  textAlign: "center", 
  ":hover": {
    background: COLORS.gradients.gradientBoxW,
    color: COLORS.primary,
    boxShadow: shadows.shadowWhite3,
  },
  "&.Mui-selected": {
    boxShadow: shadows.shadowWhite3,
    background: COLORS.gradients.gradientBoxW,
    color: COLORS.primary,
  },
};