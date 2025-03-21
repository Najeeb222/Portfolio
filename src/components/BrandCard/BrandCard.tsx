import CardWrapper from "@components/CardWrapper/CardWrapper";
import { COLORS } from "@constants/color";
import { Box, Divider, Typography } from "@mui/material";

const BrandCard = () => {
  return (
    <CardWrapper width={'100%'} height={"auto"}>
      <Box component={"img"} src="assets/images/brandLogo.png"  sx={{padding:'0'}}/>
      <Divider />
      <Typography  textAlign={"center"} color={COLORS.bodyWhite}>
        Jhone Dev
      </Typography>
    </CardWrapper>
  );
};

export default BrandCard;
