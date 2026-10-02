import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import {
  Box,
  Container,
  Tabs,
  Tab,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@components/index";
import { DURATION, EASE_OUT } from "@constants/motion";
import InterviewTab from "../InterviewTab/InterviewTab";
import SkillSection from "../SkillSection/SkillSection";
import { developmentSkill } from "@constants/data";

const MyResume = () => {
  const [value, setValue] = useState("Professional_Skill");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // mobile

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" disableGutters component={"section"} id="resume">
      <SectionHeading eyebrow="1+ Years of Experience" title="My Resume" />

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation={isSmallScreen ? "vertical" : "horizontal"} // responsive orientation
          variant={isSmallScreen ? "scrollable" : "fullWidth"}
          scrollButtons="auto"
          allowScrollButtonsMobile
          sx={{
            boxShadow: shadows.shadowWhite3,
            display: "flex",
            justifyContent: "center",
          }}
          TabIndicatorProps={{ sx: { display: "none" } }}
        >
          <Tab
            sx={tabStyle}
            label="Professional Skill"
            value="Professional_Skill"
          />
          <Tab sx={tabStyle} label="Experience" value="Experience" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 3 }}>
        {/* Fade the panel in whenever the tab changes */}
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.fast, ease: EASE_OUT }}
        >
          {value === "Professional_Skill" && (
            <Container maxWidth="lg">
              <Grid container spacing={4}>
                <SkillSection skills={developmentSkill} />
              </Grid>
            </Container>
          )}

          {value === "Experience" && <InterviewTab />}
        </motion.div>
      </Box>
    </Container>
  );
};

export default MyResume;

const tabStyle = {
  border: "none",
  py: { xs: "15px", sm: "20px", md: "30px" },
  px: { xs: "10px", sm: "20px", md: "30px" },
  fontWeight: "bold",
  background: "transparent",
  whiteSpace: "nowrap",
  borderRadius: "10px",
  transition: "all 0.3s ease",
  position: "relative",
  color: COLORS.bodyWhite,
  fontSize: { xs: "12px", sm: "14px", md: "16px" },
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
