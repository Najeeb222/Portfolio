import CustomButton from "@components/CustomButton/CustomButton";
import { COLORS } from "@constants/color";
import type { Project } from "@constants/data";
import { DURATION, EASE_OUT } from "@constants/motion";
import { shadows } from "@constants/shadow";
import { CheckCircle, Close, NorthEast } from "@mui/icons-material";
import {
  Box,
  Chip,
  Dialog,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "motion/react";

type Props = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  onExited: () => void;
};

// Content blocks slide up one after another when the dialog opens
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

const hostOf = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

const ProjectDialog = ({ project, open, onClose, onExited }: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="lg"
      fullWidth
      scroll="body"
      TransitionProps={{ onExited }}
      aria-labelledby="project-dialog-title"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(13, 16, 19, 0.6)",
            backdropFilter: "blur(4px)",
          },
        },
      }}
      PaperProps={{
        sx: {
          background: "#f3f6f8",
          borderRadius: fullScreen ? 0 : "16px",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.35)",
          overflow: "hidden",
          m: fullScreen ? 0 : 2,
        },
      }}
    >
      {project && (
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={onClose}
            aria-label="Close project details"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              background: COLORS.white,
              boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
              "&:hover": { background: COLORS.white, color: COLORS.primary },
            }}
          >
            <Close />
          </IconButton>

          {/* Two columns on desktop: screenshot left, details right (stacks on mobile) */}
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              {/* Screenshot framed as a browser window */}
              <Box
                sx={{ p: { xs: "16px 16px 0", sm: "24px 24px 0", md: "32px" } }}
              >
                <Box
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: shadows.shadowWhite3,
                    background: COLORS.white,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    gap="6px"
                    sx={{ px: "14px", py: "10px", background: "#e9edf1" }}
                  >
                    {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                      <Box
                        key={c}
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: c,
                        }}
                      />
                    ))}
                    <Typography
                      sx={{
                        ml: "10px",
                        px: "12px",
                        py: "2px",
                        borderRadius: "6px",
                        background: COLORS.white,
                        fontSize: "12px",
                        color: COLORS.body,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: { xs: "200px", sm: "360px" },
                      }}
                    >
                      {hostOf(project.link)}
                    </Typography>
                  </Stack>
                  <motion.img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    initial={{ scale: 1.04, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: DURATION.slow, ease: EASE_OUT }}
                    style={{
                      display: "block",
                      width: "100%",
                      aspectRatio: "16 / 10",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={stagger} initial="hidden" animate="visible">
                <Box
                  sx={{
                    p: {
                      xs: "24px 20px 32px",
                      sm: "32px",
                      md: "40px 64px 36px 8px",
                    },
                  }}
                >
                  <motion.div variants={item}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap="10px"
                      flexWrap="wrap"
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 600,
                          letterSpacing: "1.5px",
                          color: COLORS.primary,
                        }}
                      >
                        {project.category}
                      </Typography>
                      {project.status && (
                        <Chip
                          label={project.status}
                          size="small"
                          sx={{
                            height: 22,
                            fontSize: "11px",
                            fontWeight: 600,
                            color: "#9a5b00",
                            background: "#fff1d6",
                          }}
                        />
                      )}
                    </Stack>
                    <Typography
                      id="project-dialog-title"
                      variant="h3"
                      sx={{
                        mt: "8px",
                        fontSize: { xs: "26px", md: "32px" },
                        fontWeight: 800,
                        color: COLORS.headingWv,
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                  </motion.div>

                  <motion.div variants={item}>
                    <Typography
                      sx={{ mt: "16px", fontSize: "16px", lineHeight: 1.8 }}
                    >
                      {project.description}
                    </Typography>
                  </motion.div>

                  <Grid container spacing={3} sx={{ mt: "4px" }}>
                    <Grid item xs={12}>
                      <motion.div variants={item}>
                        <Typography sx={sectionLabel}>Key features</Typography>
                        <Stack
                          component="ul"
                          gap="10px"
                          sx={{ listStyle: "none" }}
                        >
                          {project.features.map((f) => (
                            <Stack
                              component="li"
                              key={f}
                              direction="row"
                              gap="10px"
                            >
                              <CheckCircle
                                sx={{
                                  fontSize: 18,
                                  color: COLORS.primary,
                                  mt: "3px",
                                }}
                              />
                              <Typography
                                sx={{ fontSize: "15px", lineHeight: 1.6 }}
                              >
                                {f}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div variants={item}>
                        <Typography sx={sectionLabel}>Built with</Typography>
                        <Stack direction="row" gap="8px" flexWrap="wrap">
                          {project.tech.map((t) => (
                            <Chip key={t} label={t} sx={techChip} />
                          ))}
                        </Stack>
                      </motion.div>
                    </Grid>
                  </Grid>

                  <motion.div variants={item}>
                    <Stack
                      direction="row"
                      gap="12px"
                      flexWrap="wrap"
                      sx={{ mt: "32px" }}
                    >
                      <CustomButton
                        variant="primary"
                        title={project.linkLabel ?? "Visit Live Site"}
                        fontsize="15px"
                        height="50px"
                        href={project.link}
                        icon={<NorthEast sx={{ fontSize: "17px" }} />}
                      />
                      <CustomButton
                        title="Close"
                        fontsize="15px"
                        height="50px"
                        width="110px"
                        onClick={onClose}
                      />
                    </Stack>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      )}
    </Dialog>
  );
};

export default ProjectDialog;

const sectionLabel = {
  mb: "14px",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: COLORS.headingWv,
};

const techChip = {
  height: 30,
  fontSize: "13px",
  fontWeight: 500,
  color: COLORS.headingWv,
  background: COLORS.white,
  boxShadow: shadows.shadowWhite3,
};
