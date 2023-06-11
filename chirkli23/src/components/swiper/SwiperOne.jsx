import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

const SwiperOne = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section id="swiper-head">
        <div className="container">
      <div className="swiper-content">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,  Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="#">
            <img src="https://demo.templatetrend.com/magento/MAG666/pub/static/version1560839252/frontend/Ortho/euforia/en_US/images/banners/main-banner1.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
            <img src="https://demo.templatetrend.com/magento/MAG666/pub/static/version1560839252/frontend/Ortho/euforia/en_US/images/banners/main-banner2.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
            <img src="https://demo.templatetrend.com/magento/MAG666/pub/static/version1560839252/frontend/Ortho/euforia/en_US/images/banners/main-banner3.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <div style={{display: "none"}} className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
    </section>
  );
};
export default SwiperOne;
