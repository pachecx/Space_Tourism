import astro from "../../assets/crew/image-douglas-hurley.png";
import specialist from "../../assets/crew/image-mark-shuttleworth.png";

import imgM from "../../assets/crew/background-crew-mobile.jpg";
import imgTa from "../../assets/crew/background-crew-tablet.jpg";
import imgDesk from "../../assets/crew/background-crew-desktop.jpg";

import { Container } from "./style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Responsividade } from "../../components/Responsividade";

export const Crew = () => {
  return (
    <Container>
      <Responsividade bgImgM={imgM} bgImgDesk={imgDesk} bgImgTablet={imgTa} />
      {/* <img className="bgIMg" src={imgM} alt="" /> */}

      <p className="textTop">
        <span className="numberTop">02</span>
        Meet your crew
      </p>

      <div className="">
        <main>
          <Swiper
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="swipeContent">
              <img className="imgSwiper" src={astro} alt="" />
              <div className="line" />
              <div className="text">
                <p className="textPosition">commander</p>

                <h2 className="textName">Douglas Hurley</h2>
                <p className="textAbout">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swipeContent">
              <img className="imgSwiper" src={specialist} alt="" />
              <div className="line" />
              <div className="text">
                <p className="textPosition">Mission Specialist </p>

                <h2 className="textName">MARK SHUTTLEWORTH</h2>
                <p className="textAbout">
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>

            <div className="swiper-pagination"></div>
          </Swiper>
        </main>
      </div>
    </Container>
  );
};
