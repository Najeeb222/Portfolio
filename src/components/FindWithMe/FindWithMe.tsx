import CustomButton from "@components/CustomButton/CustomButton";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

const FindWithMe = () => {
  return (
    <Stack gap={"20px"} width={"50%"}>
      <Typography
        variant="body2"
        sx={{ fontWeight: "500", letterSpacing: "2px" }}
      >
        FIND WITH ME
      </Typography>
      <Stack direction={"row"} gap={"10px"}>
        <CustomButton icon={<Facebook />} hover={true} />
        <CustomButton icon={<Instagram />} hover={true} />
        <CustomButton icon={<LinkedIn />} hover={true} />
      </Stack>
    </Stack>
  );
};

export default FindWithMe;
