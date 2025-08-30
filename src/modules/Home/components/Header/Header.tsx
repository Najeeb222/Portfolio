import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AnimatedText from "../AnimatedText/AnimatedText";
import { FindWithMe, CardWrapper } from "@components/index";
import { COLORS } from "@constants/color";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Header = () => {
  return (
    <Container
      id="home"
      component="section"
      maxWidth="lg"
      disableGutters
      sx={{ p: { md: 3, xs: "5px" }, mt: "90px" ,}}
    >
      <Grid container spacing={4} alignItems="center">
    
        <Grid
          item
          xs={12}
          md={5}
          sx={{ position: "relative", order: { xs: 1, md: 2 } }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.03, rotate: 1.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <CardWrapper width="100%" height="70%">
         
              <Box sx={{ borderRadius: "inherit", overflow: "hidden" }}>
                <Box
                  component="img"
                  src="assets/images/headerImg.png"
                  alt="Najeeb Ullah"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </CardWrapper>
          </motion.div>
        </Grid>

     
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            order: { xs: 2, md: 1 },
          }}
        >
          <Stack gap="20px">
            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <Typography
                variant="body2"
                sx={{
                  letterSpacing: { md: "3px", sm: "2px", xs: "1px" },
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
              >
                Welcome to my world
              </Typography>
            </motion.div>

            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <AnimatedText />
            </motion.div>

            <motion.div
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Typography
                color={COLORS.bodyWhite}
                variant="body1"
                pr={{ md: "135px", xs: 0 }}
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                }}
              >
                I’m a passionate web developer specializing in{" "}
                <strong style={{ color: COLORS.primary }}>
                  modern, user-friendly applications
                </strong>{" "}
                with clean code and creative solutions.
              </Typography>
            </motion.div>
          </Stack>

      
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <FindWithMe />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
