import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './ModalCarousel.module.scss';
import { Navigation } from 'swiper/modules';



type Props = {
  handleCloseModal: () => void
  screenshots: string[]
}
export const ModalCarousel = ({handleCloseModal, screenshots}: Props) => {
  return (
    <>

      <Swiper navigation={true} modules={[Navigation]} className={s.swiper}>
        {screenshots.map((screen, i) => <SwiperSlide
            className={s.swiperSlide}
            key={i}>
            <div className={s.imgContainer}>
              <div className={s.btnClose} onClick={handleCloseModal}>⨉</div>
              <img
                src={screen}
                alt={"project screenshot"}
                className={s.image}
              />
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
