//Imagem dos astronautas
import rocket from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import port from "../../assets/technology/image-spaceport-portrait.jpg";
import pilot from "../../assets/technology/image-space-capsule-landscape.jpg";

//Imagens de fundo
import imgM from "../../assets/technology/background-technology-mobile.jpg";
import imgTa from "../../assets/technology/background-technology-tablet.jpg";
import imgDesk from "../../assets/technology/background-technology-desktop.jpg";

import { Container } from "./style";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { Responsividade } from "../../components/Responsividade";
import { TextoTopo } from "../../components/TextoTopo_C";
import { SwiperSlideComponent } from "../../components/SwiperSlideComponents";

export const Technology = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  
  return (
    <Container>
      <Responsividade bgImgM={imgM} bgImgDesk={imgDesk} bgImgTablet={imgTa} />
      <TextoTopo numberText={"02"} text={"Meet your crew"} />
      <main>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={rocket}
              title1={"Commander"}
              title2={"Douglas Hurley"}
              text={`Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.`}
            />
          </SwiperSlide>

          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={port}
              title1={"Mission Specialist"}
              title2={"MARK SHUTTLEWORTH"}
              text={`Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.`}
            />
          </SwiperSlide>

          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={pilot}
              title1={"Pilot"}
              title2={"Victor Glover"}
              text={`Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.`}
            />
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </main>
    </Container>
  );
};
