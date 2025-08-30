import { COLORS } from "@constants/color";
import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Skill {
  title: string;
  value: number;
}

interface SkillSectionProps {
  skills: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ skills }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setProgress(skills.map((skill) => skill.value));
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [inView, skills]);

  return (
    <Box ref={ref} sx={{ mb: "20px" }}>
      <Stack sx={{ gap: "15px", my: "30px", p: 2 }}>
        <Typography
          variant="body2"
          sx={{
            letterSpacing: "2px",
            fontWeight: 500,
            color: COLORS.subtitle,
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
          }}
        >
          Features
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: COLORS.bodyWhite,
            fontWeight: "700",
            fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "40px" },
          }}
        >
          Development Skill
        </Typography>
      </Stack>

      <Grid container spacing={4} p={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6}  key={index}>
            <Box mb={2}>
              <Typography
                variant="body2"
                sx={{
                  mb: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
              >
                {skill.title}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress[index]}
                sx={{
                  ...LinearProgressStyles,
                  transition: "all 1.5s ease-in-out",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillSection;

const LinearProgressStyles = {
  backgroundColor: COLORS.border,
  border: `2px solid ${COLORS.lightn}`,
  height: 13,
  width: "100%",
  borderRadius: "8px",
  "& .MuiLinearProgress-bar": {
    background: `linear-gradient(145deg, ${COLORS.white} 10%, ${COLORS.primary} 100%)`,
    borderRadius: "8px",
  },
};
