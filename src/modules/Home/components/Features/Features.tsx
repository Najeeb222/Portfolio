import { CardWrapper } from "@components/index";
import { COLORS } from "@constants/color";
import { DesktopWindows, WifiOutlined, SpaOutlined, Storage, Layers, DesignServices } from "@mui/icons-material";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 200 } },
};

const Features = () => {
  return (
    <Container component={"section"} id="features" maxWidth={"lg"} disableGutters>
      <Stack sx={{ textAlign: { md: "start", xs: "center" } }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "500",
            letterSpacing: "2px",
            color: COLORS.subtitle,
            mb: "16px",
          }}
        >
          FEATURES
        </Typography>
        <Typography
          variant="h2"
          sx={{
            marginBottom: "30px",
            fontWeight: "700",
            fontSize: { md: "60px", xs: "34px", sm: "40px" },
            color: COLORS.bodyWhite,
          }}
        >
          What I Do
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {FeaturesComponentData.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.title}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariant}
              whileHover="hover"
            >
              <CardWrapper
                isArrow
                topIcon={item.icon}
                width={"auto"}
                height={"auto"}
                hover
                p={{ md: "40px 50px", xs: "20px" }}
              >
                <Typography variant="h4" fontSize={"24px"} sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography>{item.description}</Typography>
              </CardWrapper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;

const iconStyles = {
  fontSize: 70,
  transition: "transform 0.3s ease",
};

const FeaturesComponentData = [
  {
    title: "Web Development",
    description: "Creating fast, responsive, and scalable websites using React, Next.js, and modern web technologies.",
    icon: <DesktopWindows sx={iconStyles} />,
  },
  {
    title: "Full-Stack Development",
    description: "Building robust full-stack applications with clean architecture and optimized performance across the stack.",
    icon: <Layers sx={iconStyles} />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive, user-centered interfaces that balance aesthetics with functionality and accessibility.",
    icon: <DesignServices sx={iconStyles} />,
  },
  {
    title: "Backend & Firebase",
    description: "Developing secure, reliable backends with Firebase for authentication, databases, and real-time features.",
    icon: <Storage sx={iconStyles} />,
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating REST APIs to connect applications with external services and data sources.",
    icon: <WifiOutlined sx={iconStyles} />,
  },
  {
    title: "Personal Branding & Portfolio",
    description: "Creating professional portfolio websites that highlight skills, achievements, and personal branding.",
    icon: <SpaOutlined sx={iconStyles} />,
  },
];
