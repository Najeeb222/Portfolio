import { CardWrapper, Reveal, SectionHeading } from "@components/index";
import {
  DesktopWindows,
  WifiOutlined,
  SpaOutlined,
  Storage,
  Layers,
  DesignServices,
} from "@mui/icons-material";
import { Container, Grid, Typography } from "@mui/material";

const Features = () => {
  return (
    <Container
      component={"section"}
      id="features"
      maxWidth={"lg"}
      disableGutters
    >
      <SectionHeading eyebrow="Features" title="What I Do" align="start" />

      <Grid container spacing={3}>
        {FeaturesComponentData.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.title}>
            <Reveal delay={(index % 3) * 0.1} style={{ height: "100%" }}>
              <CardWrapper
                isArrow
                topIcon={item.icon}
                width={"auto"}
                height={"100%"}
                hover
                p={{ md: "40px 40px", xs: "24px" }}
              >
                <Typography
                  variant="h4"
                  className="hoverTitle"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
              </CardWrapper>
            </Reveal>
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
    description:
      "Creating fast, responsive, and scalable websites using React, Next.js, and modern web technologies.",
    icon: <DesktopWindows sx={iconStyles} />,
  },
  {
    title: "MERN Stack",
    description:
      "Building robust full-stack applications with clean architecture and optimized performance",
    icon: <Layers sx={iconStyles} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered interfaces that balance aesthetics with functionality and accessibility.",
    icon: <DesignServices sx={iconStyles} />,
  },
  {
    title: "Backend & Firebase",
    description:
      "Developing secure, reliable backends with Firebase for authentication, databases, and real-time features.",
    icon: <Storage sx={iconStyles} />,
  },
  {
    title: "API Integration",
    description:
      "Seamlessly integrating REST APIs to connect applications with external services and data sources.",
    icon: <WifiOutlined sx={iconStyles} />,
  },
  {
    title: "Personal Portfolio",
    description:
      "Creating professional portfolio websites that highlight skills, achievements, and personal branding.",
    icon: <SpaOutlined sx={iconStyles} />,
  },
];
