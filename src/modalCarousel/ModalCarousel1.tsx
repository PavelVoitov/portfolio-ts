// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import s from './ModalCarousel1.module.scss';

// import required modules
import { Navigation } from 'swiper/modules';
import styles from "./ModalCarousel.module.scss";
import React from "react";


type Props = {
  handleCloseModal: () => void
  screenshots: string[]
}
export const ModalCarousel1 = ({handleCloseModal, screenshots}: Props) => {
  return (
    <>

      <Swiper navigation={true} modules={[Navigation]} className={s.swiper}>
        <div className={styles.btnClose} onClick={handleCloseModal}>⨉</div>
        {screenshots.map((screen, i) => <SwiperSlide
            className={s.swiperSlide}
            // className="b-refs-navs"
            key={i}>
            <img
              src={screen}
              alt={"project image"}
              // className={styles.modalImage}
            />
          </SwiperSlide>
        )}
      </Swiper>
      {/*<Swiper navigation={true} modules={[Navigation]} className={s.swiper}>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 1</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 2</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 3</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 4</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 5</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 6</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 7</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 8</SwiperSlide>*/}
      {/*  <SwiperSlide className={s.swiperSlide}>Slide 9</SwiperSlide>*/}
      {/*</Swiper>*/}
    </>
  );
}
