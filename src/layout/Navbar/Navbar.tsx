import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Divider, Stack, Typography } from "@mui/material";
import { useScroll, useMotionValueEvent } from "framer-motion";

import { COLORS } from "@constants/color";
import { CustomButton, FindWithMe } from "@components/index";
import { Close } from "@mui/icons-material";
import { navItems } from "@constants/data";

const drawerWidth = 320;



export default function Navbar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [active, setActive] = React.useState("#home");

  const { scrollY } = useScroll();


  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolled(scrollY.get() > 100);

    const scrollPos = window?.scrollY || document.documentElement.scrollTop;

    navItems.forEach((item) => {
      const section = document.querySelector(item.path) as HTMLElement;
      if (section) {
        const offsetTop = section.offsetTop - 120; 
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
          setActive(item.path); 
        }
      }
    });
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavClick = (path: string) => {
    setActive(path);
  };

  const drawer = (
    <Box
      padding={"10px"}
      justifyContent={"center"}
      height={"100%"}
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: COLORS.gradients.gradientBoxW,
      }}
    >
      <List>
        <Stack gap={"25px"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box
              component={"img"}
              src="/assets/images/myImg.png"
              alt="logo"
              width={"100px"}
              height={"100px"}
              sx={{ borderRadius: "50%", objectFit: "cover", border: `1px solid ${COLORS.danger}` }}
            />
            <CustomButton width={"auto"} height={"50px"} hover={true} icon={<Close />} />
          </Stack>
          <Typography color={COLORS.bodyWhite} textAlign={"start"}>
            Available for freelance — let's create something impactful together.          </Typography>
          <Divider />
        </Stack>

      
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <a
              href={item.path}
              onClick={() => handleNavClick(item.path)}
              style={{
                textDecoration: "none",
                width: "100%",
                padding: "10px 0px",
                display: "block",
              }}
            >
              <Typography
                sx={{
                  color: COLORS.bodyWhite,
                  fontSize: "14px",
                  fontWeight: 600,
                  textAlign: "start",
                  position: "relative",
                  paddingBottom: "5px",
                  fontFamily: "Montserrat, sans-serif",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "0",
                    width: active === item.path ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: COLORS.primary,
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.title}
              </Typography>
            </a>
          </ListItem>
        ))}


        
        <Box mt={"30px"}>
          <CustomButton
            title="Download Resume"
            fontsize="14px"
            height={"50px"}
            width="100%"
            hover
            downloadLink="/assets/files/NajeebResume.pdf"
            fileName="Najeeb_Ullah_Resume.pdf"
          />
        </Box>

        <Box mt={"40px"}>
          <FindWithMe />
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        
        sx={{
          backgroundColor: isScrolled ? "#ecf0f3" : "transparent",
          paddingY: 2,
          boxShadow: isScrolled
            ? "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
            : "none",
          transition: "0.3s ease",
        }}
      >
        <Box>
          <Toolbar sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                component={"img"}
                src="/assets/images/myImg.png"
                alt="Logo"
                width={"100%"}
                height={"100%"}
                sx={{ height: "70px", width: "70px", objectFit: "cover", borderRadius: '50%', border: `1px solid ${COLORS.danger}` }}
              />

              {/* 🔹 Desktop Nav */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                {navItems.map((item) => (
                  <a
                    href={item.path}
                    key={item.title}
                    onClick={() => handleNavClick(item.path)}
                    style={{
                      textDecoration: "none",
                      padding: "10px",
                      position: "relative",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "13px",
                        fontWeight: 600,
                        position: "relative",
                        paddingBottom: "5px",
                        fontFamily: "Montserrat, sans-serif",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: active === item.path ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: COLORS.primary,
                          transition: "width 0.3s ease-in-out",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </a>
                ))}
                <Box ml={"20px"}>
                  <CustomButton
                    title="Download Resume"
                    fontsize="16px"
                    height={'55px'}
                    width="200px"
                    hover
                    downloadLink="/assets/files/NajeebResume.pdf"
                    fileName="Najeeb_Ullah_Resume.pdf"
                  />

                </Box>
              </Box>
            </Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon sx={{ color: COLORS.primary }} />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

    
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="left"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            bgcolor: "transparent",
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
