import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { Divider, Stack, Typography } from "@mui/material";
import { useScroll, useMotionValueEvent } from "framer-motion";

import { COLORS } from "@constants/color";
import { CustomButton, FindWithMe } from "@components/index";
import { Close } from "@mui/icons-material";

const drawerWidth = 320;
const navItems = [
  { title: "HOME", path: "/" },
  { title: "FEATURES", path: "/" },
  { title: "PROTFOLIO", path: "/" },
  { title: "RESUME", path: "/" },
  { title: "CLENTS", path: "/" },
  { title: "PRICING", path: "/" },
  { title: "BLOGS", path: "/" },
  { title: "CONTACT", path: "/" },
];

export default function Navbar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      
  
      padding={"10px"}
      justifyContent={"center"}
      height={"100%"}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" ,background:COLORS.gradients.gradientBoxW,}}
    >
      <List>
        <Stack gap={'25px'}>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
            <Box component={'img'} src="/assets/images/logosCircle.png" alt="logo" width={'70px'} height={'70px'}/>
            <CustomButton width={'auto'} height={'50px'}   icon={<Close/>}/>
          </Stack>
          <Typography color={COLORS.bodyWhite} textAlign={'start'}>
          Inbio is a personal portfolio
          <br /> template. You can customize all.
          </Typography>
          <Divider/>
        </Stack>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding >
            <NavLink
              to={item.path}
              style={{
                textDecoration: "none",
                width: "100%",
                color: COLORS.bodyWhite,
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 0px",
              }}
            >
              <ListItemText primary={item.title} />
              
            </NavLink>
          </ListItem>
        ))}
       <Box mt={'40px'}>
       <FindWithMe/>
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
          transition: " 0.3s ease", 
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
                src="/assets/images/logo.png"
                alt="Logo"
                width={"100%"}
                height={"100%"}
                sx={{ height: "62px", width: "139px", objectFit: "cover" }}
              />

              <Box
                sx={{
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                {navItems.map((item) => (
                  <NavLink
                    to={item.path}
                    key={item.title}
                    style={{ textDecoration: "none" }}
                  >
                    <Stack
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        padding: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "13px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  </NavLink>
                ))}
                <CustomButton
                  title={"BUY NOW"}
                  width={"98px"}
                  height={"55px"}
                  hover={true}
                />
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
            display: { xs: "block",  md: "none" },
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
