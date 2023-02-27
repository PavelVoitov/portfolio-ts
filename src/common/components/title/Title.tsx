import s from './Title.module.scss'
import {Zoom} from "react-awesome-reveal";

type TitlePropsType = {
    title: string
}

export const Title = ({title}: TitlePropsType) => {
    return (
                <div className={s.title}>
                  <Zoom>
                    <span>{title}</span>
                  </Zoom>
                </div>
    )
}