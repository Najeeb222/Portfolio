"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AnimatedText from "../AnimatedText/AnimatedText";
import { FindWithMe, CardWrapper, CustomButton } from "@components/index";
import { COLORS } from "@constants/color";
import { DURATION, EASE_OUT } from "@constants/motion";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "motion/react";
import Image from "next/image";

// Children reveal one after another once the intro loader is gone
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
};

const photo = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: EASE_OUT, delay: 0.2 },
  },
};

const strong = { color: COLORS.headingWv, fontWeight: 600 };

type Props = {
  ready?: boolean;
};

const Header = ({ ready = true }: Props) => {
  const state = ready ? "visible" : "hidden";

  return (
    <Container
      id="home"
      component="section"
      maxWidth="lg"
      disableGutters
      sx={{ p: { md: 3, xs: "5px" }, mt: { xs: "110px", md: "120px" } }}
    >
      <Grid container spacing={{ xs: 5, md: 4 }} alignItems="center">
        <Grid
          item
          xs={12}
          md={5}
          sx={{ position: "relative", order: { xs: 1, md: 2 } }}
        >
          <motion.div variants={photo} initial="hidden" animate={state}>
            <CardWrapper width="100%" height="70%">
              <Box sx={{ borderRadius: "inherit", overflow: "hidden" }}>
                <Image
                  src="/assets/images/headerImg.png"
                  alt="Najeeb Ullah"
                  width={500}
                  height={500}
                  priority
                  sizes="(max-width: 900px) 100vw, 40vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                />
              </Box>
            </CardWrapper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
          <motion.div variants={stagger} initial="hidden" animate={state}>
            <Stack gap={{ xs: "20px", md: "24px" }}>
              <motion.div variants={item}>
                <Typography
                  sx={{
                    letterSpacing: { md: "3px", xs: "2px" },
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: { xs: "12px", md: "14px" },
                    color: COLORS.body,
                  }}
                >
                  Welcome to my world
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <AnimatedText />
              </motion.div>

              <motion.div variants={item}>
                <Typography
                  pr={{ md: "80px", xs: 0 }}
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: "15px", sm: "16px", md: "18px" },
                  }}
                >
                  I’m a passionate <strong style={strong}>MERN Stack Developer</strong>{" "}
                  specializing in{" "}
                  <strong style={strong}>modern, user-friendly applications</strong>{" "}
                  with clean code and creative solutions.
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Stack direction="row" gap="16px" flexWrap="wrap">
                  <CustomButton
                    variant="primary"
                    title="View My Work"
                    fontsize="15px"
                    height="52px"
                    href="#portfolio"
                    icon={<ArrowForward sx={{ fontSize: "18px" }} />}
                  />
                  <CustomButton
                    title="Contact Me"
                    fontsize="15px"
                    height="52px"
                    width="150px"
                    hover
                    href="#contact"
                  />
                </Stack>
              </motion.div>

              <motion.div variants={item}>
                <Box sx={{ mt: { xs: 1, md: 2 } }}>
                  <FindWithMe />
                </Box>
              </motion.div>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
