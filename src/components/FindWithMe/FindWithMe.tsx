import CustomButton from "@components/CustomButton/CustomButton";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
const FindWithMe = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Stack gap={"20px"} width={"50%"}>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}
      >
        Find With Me
      </Typography>
      <Stack direction="row" gap="10px">
        {SocailData.map((item, i) => (
          <CustomButton
            key={i}
            icon={item.icon}
            hover
            aria-label={item.label}
            onClick={() => handleClick(item.url)}
          />
        ))}
      </Stack>


    </Stack>


  );
};

export default FindWithMe;


const SocailData = [
  { icon: <Facebook />, url: "https://www.facebook.com/mian.syed.najeeb.ullah", label: "Facebook" },
  { icon: <GitHub />, url: "https://github.com/Najeeb222", label: "GitHub" },
  { icon: <LinkedIn />, url: "https://www.linkedin.com/in/najeeb-ullah-0b771b35a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
];


