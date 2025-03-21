import { BrandCard } from "@components/index";
import { COLORS } from "@constants/color";
import { shadows } from "@constants/shadow";
import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Client = () => {
  const [value, setValue] = useState("JavaScript");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const containerRef = useRef<HTMLDivElement | null>(null); // Ref for Container
  const tabsRef = useRef<HTMLDivElement | null>(null); // Ref for Sidebar Tabs
  const cardsRef = useRef<HTMLDivElement | null>(null); // Ref for Cards

  // Sidebar Sticky Effect
  useEffect(() => {
    if (!tabsRef.current || !containerRef.current) return;

    // Calculate the end position dynamically
    const calculateEnd = () => {
      const containerHeight = containerRef.current?.getBoundingClientRect().height ?? 0;
      const tabsHeight = tabsRef.current?.getBoundingClientRect().height ?? 0;
      return containerHeight - tabsHeight;
    };

    // Pin Sidebar until the bottom of the grid container is reached
    ScrollTrigger.create({
      trigger: tabsRef.current, // The element to pin
      start: "top 0%", // Start pinning when the top of the sidebar hits the top of the viewport
      end: () => `bottom-=${calculateEnd()}`, // End pinning when the sidebar reaches the bottom of the container
      pin: true, // Enable pinning
      pinSpacing: true, // Add spacing to prevent overlap
    });
  }, []);

  // Cards Animation
  useEffect(() => {
    if (!cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <Container maxWidth={"lg"} ref={containerRef}>
      <Stack>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "500",
            letterSpacing: "2px",
            color: COLORS.subtitle,
            mb: "16px",
          }}
        >
          Popular Clients
        </Typography>
        <Typography
          variant="h2"
          sx={{
            marginBottom: "30px",
            fontWeight: "700",
            fontSize: "40px",
            color: COLORS.bodyWhite,
          }}
        >
          Awesome Clients
        </Typography>
      </Stack>

      <Grid container spacing={4}>
        {/* Sidebar Navigation (Sticky & Animated) */}
        <Grid item sm={4} width={"100%"} sx={{ position: "relative" }}>
          <div
            ref={tabsRef}
            style={{
              // position: "sticky",
              // top: "0", // Initial position before pinning starts
              // transition: "all 0.3s ease",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              orientation="vertical"
              sx={{
                boxShadow: shadows.shadowWhite3,
                width: "auto",
              }}
              TabIndicatorProps={{ sx: { display: "none" } }}
            >
              <Tab sx={tabStyle} label="JavaScript" value="JavaScript" />
              <Tab sx={tabStyle} label="Product Design" value="Product Design" />
              <Tab sx={tabStyle} label="Wordpress" value="Wordpress" />
              <Tab sx={tabStyle} label="HTML to React" value="Html to react" />
              <Tab sx={tabStyle} label="React to Laravel" value="React to laravel" />
              <Tab sx={tabStyle} label="Python" value="Python" />
            </Tabs>
          </div>
        </Grid>

        {/* Content Section */}
        <Grid item md={8} sm={8}>
          {value === "JavaScript" && (
            <Grid container spacing={4} ref={cardsRef}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <Grid item md={4} sm={6} xs={12} key={item}>
                  <BrandCard />
                </Grid>
              ))}
            </Grid>
          )}
          {value === "Product Design" && <Typography>Product Design content...</Typography>}
          {value === "Wordpress" && <Typography>Wordpress content...</Typography>}
          {value === "Html to react" && <Typography>HTML to React content...</Typography>}
          {value === "React to laravel" && <Typography>React to Laravel content...</Typography>}
          {value === "Python" && <Typography>Python content...</Typography>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Client;

// Tab Style (unchanged)
const tabStyle = {
  textAlign: "center",
  height: "90px",
  paddingY: "15px",
  width: "100%",
  mx: "auto",
  textWrap: "nowrap",
  fontWeight: "bold",
  background: "transparent",
  borderRadius: "10px",
  transition: "all 0.3s ease",
  color: COLORS.bodyWhite,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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