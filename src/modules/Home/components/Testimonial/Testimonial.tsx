import { CardWrapper, CustomButton } from "@components/index";
import { COLORS } from "@constants/color";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useGsapAnimation } from "@hooks/UseGsapAnimation";

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const {elementsRef,textRef}=useGsapAnimation()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 2,
    afterChange: (current: number) => setCurrentSlide(current),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: currentSlide === i ? COLORS.primary : COLORS.border,
          cursor: "pointer",
        }}
      ></div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <Box
        sx={{
          position: "absolute",
          bottom: { md: '-10%', xs: '-5%' },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex", gap: "5px" }}>
          {dots}
        </ul>
      </Box>
    ),
  };

  return (
    <Container disableGutters>
      <Slider ref={sliderRef} {...settings}>
        {[1, 2, 3, 4, 5].map((_item, index) => (
                   <div ref={(el) => { elementsRef.current[index] = el; }}>

                   
          <div key={index}>
            <Stack sx={{ textAlign: "center", gap: "15px" }}>
              <Typography
                variant="body2"
                sx={{
                  letterSpacing: "2px",
                  fontWeight: 500,
                  color: COLORS.subtitle,
                }}
                ref={(el) => {
                  textRef.current[0] = el;
                }}
              >
                What Clients Say
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  marginBottom: "30px",
                  fontWeight: "700",
                  fontSize: { md: "60px", xs: "34px", sm: "40px" },
                  color: COLORS.bodyWhite,
                }}
                ref={(el) => {
                  textRef.current[1] = el;
                }}
              >

                Testimonial
              </Typography>
            </Stack>
            <div ref={(el) => { elementsRef.current[index] = el; }}>
            <Grid container gap={5} sx={{ mx: "auto" }}>
              <Grid item md={4} xs={12}>
                <CardWrapper width={"100%"} height={"auto"}>
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
                        height: "100%",
                        objectFit: "cover",
                        ":hover": { transform: "scale(1.1)" },
                        transition: ".4s",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "11px",
                      color: COLORS.primary,
                    }}
                  >
                    BOUND - TROLOLA
                  </Typography>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "23px",
                        fontWeight: 600,
                        color: COLORS.headingWv,
                      }}
                    >
                      Jone Duone Joe
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px" }}>
                      Operating officer
                    </Typography>
                  </Box>
                </CardWrapper>
              </Grid>

              <Grid
                item
                md={7}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap:'20px'
                }}
              >
                <Stack gap={"20px"} direction={"row"} justifyContent={{md:'end',xs:'space-between'}}>
                  <CustomButton
                    icon={<ArrowBack />}
                    hover={true}
                    onClick={() =>
                      sliderRef.current && sliderRef.current.slickPrev()
                    }
                  />
                  <CustomButton
                    icon={<ArrowForward />}
                    hover={true}
                    onClick={() =>
                      sliderRef.current && sliderRef.current.slickNext()
                    }
                  />
                </Stack>

                <CardWrapper
                  width={"100%"}
                  height={"auto"}
                  p={{ md: "0  50px 40px", xs: "20px" }}
                >
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    justifyContent={"space-between"}
                    alignItems={{md:'center',xs:'start'}}
                    gap={'16px'}
                    mb={{md:0,xs:'16px'}}
                  >
                    <Stack gap={"10px"}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: {md:'26px',sm:'22px',xs:'18px'},
                          fontWeight: "500",
                          color: COLORS.headingWv,
                        }}
                      >
                        Web App Development
                      </Typography>
                      <Typography

                        sx={{ fontWeight: 500, color: COLORS.bodyWhite ,fontSize:{md:'16px',sm:'14px',xs:'12px'}}}
                      >
                        Upwork - Mar 4,2016 -August30,2021
                      </Typography>
                    </Stack>
                    <CustomButton
                    width={'128px'}
                      icon={[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src="/assets/icons/starIcon.png"
                          alt="star"
                          width="13"
                          height="13"
                        />
                      ))}
                      height={"42px"}
                    />
                  </Stack>
                  <Divider />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: COLORS.bodyWhite,
                      mt: "20px",
                    }}
                  >
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit,
                    laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt
                    est ac dolor aliquam sodales phasellus smauris.
                  </Typography>
                </CardWrapper>
              </Grid>
            </Grid>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonial;
