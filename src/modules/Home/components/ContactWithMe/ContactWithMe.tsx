"use client";

import {
  CardWrapper,
  CustomButton,
  FindWithMe,
  Reveal,
  SectionHeading,
} from "@components/index";
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
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";

const ContactWithMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // Replace this with your actual Web3Forms Access Key
    formData.append("access_key", "59dbb9fc-fbaa-40a5-b317-8431da2f6463");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSnackbarMessage("Message sent successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Error", data);
        setSnackbarMessage(data.message || "Something went wrong.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSnackbarMessage("Something went wrong. Please try again later.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      maxWidth={"lg"}
      disableGutters
      component={"section"}
      id="contact"
    >
      <SectionHeading eyebrow="Contact" title="Let's Work Together" />
      <Grid container spacing={{ md: 6, xs: 2 }} gap={"20px"} mx={"auto"}>
        <Grid item xs={12} sm={5}>
          <Reveal style={{ height: "100%" }}>
          <CardWrapper
            width={"100%"}
            height={"100%"}
            p={{ md: " 0 30px 30px", xs: "0 15px 15px" }}
          >
            <Box
              sx={{
                height: "300px",
                position: "relative",
                overflow: "hidden",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Image src="/assets/images/headerImg.png" alt="Najeeb Ullah" fill sizes="(max-width: 600px) 100vw, 40vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
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
                Najeeb Ullah
              </Typography>
              <Typography sx={textStyle}>MERN Stack Developer</Typography>
              <Typography sx={textStyle}>
                Available for freelance opportunities. Let’s connect and build
                something amazing.
              </Typography>
              <Typography sx={textStyle}>
                Phone: <span> +923490302906</span>
              </Typography>
              <Typography sx={textStyle}>
                Email: <span> Najeeb13750@gmail.com</span>
              </Typography>
              <FindWithMe />
            </Stack>
          </CardWrapper>
          </Reveal>
        </Grid>
        <Grid item xs={12} sm={6.5}>
          <Reveal delay={0.15}>
          <CardWrapper width="100%" height="auto" p={"20px"}>
            <form onSubmit={handleSubmit}>
              <Stack
                direction={{ md: "row", xs: "column" }}
                sx={{ display: "flex", gap: "20px", mb: 2 }}
              >
                <Box width="100%">
                  <InputLabel
                    sx={{
                      mb: { md: 3, sm: 2, xs: 1.5 },
                      fontSize: { md: "16px", sm: "14px", xs: "12px" },
                    }}
                  >
                    Name
                  </InputLabel>
                  <TextField
                    type="text"
                    name="name"
                    required
                    fullWidth
                    sx={TextFieldStyle}
                  />
                </Box>
                <Box width="100%">
                  <InputLabel
                    sx={{
                      mb: { md: 3, sm: 2, xs: 1.5 },
                      fontSize: { md: "16px", sm: "14px", xs: "12px" },
                    }}
                  >
                    Phone Number
                  </InputLabel>
                  <TextField
                    type="tel"
                    name="phone"
                    required
                    fullWidth
                    sx={TextFieldStyle}
                  />
                </Box>
              </Stack>

              <InputLabel
                sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" } }}
              >
                Email
              </InputLabel>
              <TextField
                type="email"
                name="email"
                required
                fullWidth
                sx={TextFieldStyle}
              />

              <InputLabel
                sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" }, mt: 2 }}
              >
                Subject
              </InputLabel>
              <TextField
                type="text"
                name="subject"
                required
                fullWidth
                sx={TextFieldStyle}
              />

              <InputLabel
                sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" }, mt: 2 }}
              >
                YOUR MESSAGE
              </InputLabel>
              <TextField
                type="text"
                name="message"
                required
                multiline
                rows={6}
                fullWidth
                sx={{ ...TextFieldStyle, mb: 3 }}
              />

              <CustomButton
                title={isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                icon={<ArrowForward />}
                hover
                type="submit"
              />
            </form>
          </CardWrapper>
          </Reveal>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactWithMe;

const TextFieldStyle = {
  backgroundColor: COLORS.white,
  "& .MuiOutlinedInput-root": {
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${COLORS.primary}`,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${COLORS.primary}`,
    },
  },
};

const textStyle = {
  fontSize: "18px",
  color: COLORS.bodyWhite,
};
