//import { Container } from "./style";

interface SwiperSlideComponentProps {
  imgSlide: string;
  title1: string;
  title2: string;
  text: string;
}

export const SwiperSlideComponent = ({
  imgSlide,
  title1,
  title2,
  text,
}: SwiperSlideComponentProps) => {
  return (
    <>
      <div className="">
        <img className="imgSwiper" src={imgSlide} alt="" />
        <div className="line" />
      </div>
      <div className="text">
        <p className="textPosition">{title1}</p>
        <h2 className="textName">{title2}</h2>
        <p className="textAbout">{text}</p>
      </div>
    </>
  );
};
