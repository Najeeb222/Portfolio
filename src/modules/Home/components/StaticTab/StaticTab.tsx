import { CustomButton } from "@components/index";
import { COLORS } from "@constants/color";
import {
  AccessTime,
  ArrowForward,
  Done,
  ElectricBoltOutlined,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const StaticTab = () => {
  return (
    <Stack p={{md:"0 50px 40px",xs:'0px'}} mt={"30px"} gap={"40px"}>
      <Stack
        direction={{md:"row",xs:"column"}}
        justifyContent={"space-between"}
        alignItems={{md:"center",xs:"start"}}
        gap={'16px'}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { md: "27px", sm: "24px", xs: "22px" },
              color: COLORS.headingWv,
              fontWeight: 700,
              mb: "9px",
            }}
          >
            Make Your Single Page
          </Typography>
          <Typography sx={{ color: COLORS.bodyWhite }}>Elementor</Typography>
        </Box>
        <CustomButton
          title={"$30.0"}
          hover={true}
          height={"50px"}
          width={"120px"}
          fontsize={"25px"}
        />
      </Stack>
      <Typography sx={{ fontSize: "18px", color: COLORS.bodyWhite ,width:'70%', }}>
        All the Lorem Ipsum generators on the Internet tend to
         repeat predefined chunks as necessary
      </Typography>
      <Stack direction={{sm:'row',xs:'column'}} justifyContent={"space-between"}>
        <List>
          {staticListOne.map((item) => (
            <ListItem>
              <Done sx={{ color: COLORS.primary, mr: 1 }} />
              <ListItemText
                primary={item}
                sx={{ fontSize: "18px", color: COLORS.bodyWhite }}
              />
            </ListItem>
          ))}
        </List>
        <List>
          {staticListTwo.map((item) => (
            <ListItem>
              <Done sx={{ color: COLORS.primary, mr: 1 }} />
              <ListItemText
                primary={item}
                sx={{ fontSize: "18px", color: COLORS.bodyWhite }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Box sx={{ width: "100%" }}>
        <CustomButton
          title={"ORDER NOW"}
          hover={true}
          icon={<ArrowForward />}
          width={"100%"}
          fontsize={"16px"}
        />
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={"5px"}
          mt={"25px"}
          color={COLORS.bodyWhite}
        >
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <AccessTime sx={{ fontSize: "12px" }} />
            <Typography sx={{ fontSize: "12px" }}>2 Days Delivery</Typography>
          </Stack>

          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <ElectricBoltOutlined sx={{ fontSize: "12px" }} />
            <Typography sx={{ fontSize: "12px" }}>
              Unlimited Revission
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default StaticTab;
const staticListOne = [
  " Page with Elementor",

  "Design Customization",

  "Responsive Design",
  "Content Upload",

  "Design Customization",

  " Plugins/Extensions",
];
const staticListTwo = [
  " multipage Elementor",

  "Design Figma",

  "MAintaine Design",
  "Content Upload",

  "Design With XD",

  " 8 Plugins/Extensions",
];
