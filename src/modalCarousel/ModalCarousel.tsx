import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import s from "./ModalCarousel.module.scss";
import { Navigation } from "swiper/modules";

type Props = {
  handleCloseModal: () => void;
  screenshots: string[];
};

export const ModalCarousel = ({ handleCloseModal, screenshots }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.btnClose} onClick={handleCloseModal}>
        ⨉
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={s.swiper}
        centeredSlides
        slidesPerView={1}
      >
        {screenshots.map((screen, i) => (
          <SwiperSlide className={s.swiperSlide} key={i}>
              <img
                src={screen}
                alt="project screenshot"
                className={s.image}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
