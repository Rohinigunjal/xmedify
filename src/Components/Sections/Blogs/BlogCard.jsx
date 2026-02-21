import { Box, Stack, Typography } from "@mui/material";
import featured from "../../../assets/blog.jpg";
import person from "../../../assets/person.jpg";

function BlogCard() {
  return (
    <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2}>
      <Box component="img" src={featured} width={260} ></Box>

      <Box >
        <Typography
          color="#77829D"
          fontWeight={500}
          mb={1}
          fontSize={{ xs: 12, md: 16 }}
        >
          Medical | March 31, 2022
        </Typography>
        <Typography
          component="h3"
          color="#1B3C74"
          fontSize={{ xs: 14, md: 18 }}
          fontWeight={500}
          lineHeight={1.2}
          mb={2}
          width={260}
        >
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Box component="img" src={person} height={32} width={32} />
          <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
            Rebecca Lee
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default BlogCard;