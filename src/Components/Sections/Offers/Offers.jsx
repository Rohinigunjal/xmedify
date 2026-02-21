
import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import offer1 from "../../../assets/offer1.jpg";
import offer2 from "../../../assets/offer2.jpg";
import styles from "./Offers.module.css";

function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          className={styles.myswiper}
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          injectStyles={[
          `.swiper-pagination{
              border: 2px solid green;
          } `,
        ]}      
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}         
        >
          <SwiperSlide>
            <Box component={"img"} src={offer1} width={1}/>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} width={1}/>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer1} width={1}/>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} width={1}/>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer1} width={1}/>
          </SwiperSlide>

          <SwiperSlide>
            <Box component={"img"} src={offer2} width={1}/>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}

export default Offers;
