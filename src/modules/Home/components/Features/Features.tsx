import { CardWrapper } from "@components/index";
import { COLORS } from "@constants/color";
import { useGsapAnimation } from "@hooks/UseGsapAnimation";
import {
  AutoStories,
  DesktopWindows,
  LiveTv,
  SmsOutlined,
  SpaOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import {  Container, Grid, Stack, Typography } from "@mui/material";

const Features = () => {
  const { elementsRef, textRef } = useGsapAnimation(); // Use the hook
  return (
    <Container maxWidth={"lg"} disableGutters>
     <Stack sx={{textAlign:{md:'start',xs:'center'}}}>
     <Typography
        variant="body2"
        sx={{
          fontWeight: "500",
          letterSpacing: "2px",
          color: COLORS.subtitle,
          mb: "16px",
        }}
        ref={(el) => {
          textRef.current[0] = el;
        }}
      >
        FEATURES
      </Typography>
      <Typography
        variant="h2"
        sx={{
          marginBottom: "30px",
          fontWeight: "700",
          fontSize: {md:'60px',xs:'34px',sm:'40px'},
          color: COLORS.bodyWhite,
        }}
        ref={(el) => {
          textRef.current[0] = el;
        }}
      >
        What I Do
      </Typography>
     </Stack>
      <Grid container spacing={3}>
        {FeaturesComponentData.map((item, index) => (
          <Grid item md={4} sm={6} xs={12} key={item.title}>
            <Stack direction={"row"} gap={"20px"}>
            <div ref={(el) => { elementsRef.current[index] = el; }}>
              <CardWrapper
              isArrow
                topIcon={item.icon}
                width={"auto"}
                height={"auto"}
                hover
                p={{md:"40px 50px",xs:'20px'}}
              >
                <Typography variant="h4" fontSize={'24px'}>{item.title}</Typography>
                <Typography>{item.description}</Typography>
              </CardWrapper>
              </div>
            </Stack>
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
    title: "Business strategy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    icon: <DesktopWindows sx={iconStyles} />,
  },
  {
    title: "App development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    icon: <AutoStories sx={iconStyles} />,
  },
  {
    title: "Web development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    icon: <LiveTv sx={iconStyles} />,
  },
  {
    title: "Mobile app",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    icon: <SmsOutlined sx={iconStyles} />,
  },
  {
    title: "CEO marketing", // Fixed typo
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    icon: <WifiOutlined sx={iconStyles} />,
  },
  {
    title: "Personal portfolio", // Fixed typo
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    icon: <SpaOutlined sx={iconStyles} />,
    // Alternatively, use the Figma circle here:
    // icon: <Circle sx={{ ...iconStyles, color: "#1976d2" }} />,
  },
];
