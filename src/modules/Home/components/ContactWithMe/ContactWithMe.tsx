import { CardWrapper, CustomButton, FindWithMe } from "@components/index";
import { COLORS } from "@constants/color";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ContactWithMe = () => {
  return (
    <Container maxWidth={"lg"} disableGutters>
      <Stack sx={{ textAlign: "center", gap: "20px" }}>
        <Typography
          variant="body2"
          sx={{ letterSpacing: "2px", fontWeight: 500, color: COLORS.subtitle }}
        >
          Contact
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
          Contact With Me
        </Typography>
      </Stack>
      <Grid container spacing={{ md: 6, xs: 2 }} gap={"20px"} mx={"auto"}>
        <Grid item xs={12} sm={5}>
          <CardWrapper
            width={"100%"}
            height={"100%"}
            p={{ md: " 0 30px 30px", xs: "0 15px 15px" }}
          >
            <Box
              sx={{
                height: "auto",
                overflow: "hidden",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Box
                component={"img"}
                src="/assets/images/portfolio_1.jpg"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  ":hover": { transform: "scale(1.1)" },
                  transition: ".4s",
                }}
              />
            </Box>
            <Stack sx={{ gap: { md: "24px", sm: "20px", xs: "16px" } }}>
              <Typography
                variant="h4"
                sx={{
                  color: COLORS.headingWv,
                  fontSize: { md: "29px", sm: "26px", xs: "20px" },
                  fontWeight: 700,
                }}
              >
                Nevine Acotanza
              </Typography>
              <Typography sx={textStyle}>Chief Operating Officer</Typography>
              <Typography sx={textStyle}>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </Typography>
              <Typography sx={textStyle}>
                Phone: <span> +01234567890</span>
              </Typography>
              <Typography sx={textStyle}>
                Email: <span> +01234567890</span>
              </Typography>
              <FindWithMe />
            </Stack>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={6.5}>
          <CardWrapper width="100%" height="auto" p={"20px"}>
            <Stack
              direction={{ md: "row", xs: "column" }}
              sx={{ display: "flex", gap: "20px", mb: 2 }}
            >
              <Box width="100%">
                <InputLabel
                  sx={{
                    mb: {md:3,sm:2,xs:1.5},
                    fontSize: { md: "16px", sm: "14px", xs: "12px" },
                  }}
                >
                  Name
                </InputLabel>
                <TextField type="text" fullWidth sx={TextFieldStyle} />
              </Box>
              <Box width="100%">
                <InputLabel
                  sx={{
                    mb: {md:3,sm:2,xs:1.5},
                    fontSize: { md: "16px", sm: "14px", xs: "12px" },
                  }}
                >
                  Phone Number
                </InputLabel>
                <TextField type="number" fullWidth sx={TextFieldStyle} />
              </Box>
            </Stack>

            <InputLabel
              sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" } }}
            >
              Email
            </InputLabel>
            <TextField type="email" fullWidth sx={TextFieldStyle} />

            <InputLabel
              sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" } }}
            >
              Subject
            </InputLabel>
            <TextField type="text" fullWidth sx={TextFieldStyle} />

            <InputLabel
              sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" } }}
            >
              YOUR MESSAGE
            </InputLabel>
            <TextField
              type="text"
              multiline
              rows={6}
              fullWidth
              sx={TextFieldStyle}
            />

            <CustomButton title="SEND MESSAGE" icon={<ArrowForward />} hover />
          </CardWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactWithMe;

const TextFieldStyle = {
  backgroundColor: COLORS.white,
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid red",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid red",
    },
  },
};

const textStyle = {
  fontSize: "18px",
  color: COLORS.bodyWhite,
};
