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
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/310060171060857.64685c4ddf421.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9ed8c5165422013.6407480d24113.jpg" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cfa0a9171228055.646b909672abf.png" alt="" />
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
