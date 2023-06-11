import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const SwiperTwo = () => {
  return (
    <section id="swipersecond">
      <div className="container">
        <Swiper className="mySwiper">
          <SwiperSlide>
            <Link href="#">
                <img src="https://totemstore.az/wp-content/uploads/2022/02/yeezybanner.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
                <img src="https://totemstore.az/wp-content/uploads/2022/02/merc.png" alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default SwiperTwo;
