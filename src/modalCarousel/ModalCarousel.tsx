import AliceCarousel from "react-alice-carousel";
import styles from './ModalCarousel.module.scss'
import s from "../common/components/modal/Modal.module.scss";
import React from "react";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

type Props = {
  handleCloseModal: () => void
  screenshots: string[]
}
export const ModalCarousel = ({handleCloseModal, screenshots}: Props) => {
  return (
      <div className={styles.modalCarouselBlock}>
        <div className={styles.btnClose} onClick={handleCloseModal}>⨉</div>
        <AliceCarousel
          controlsStrategy={"alternate"}
          responsive={responsive}
          mouseTracking={true}
          disableDotsControls={true}
          infinite={true}
          items={screenshots}/>

      </div>
  )
}