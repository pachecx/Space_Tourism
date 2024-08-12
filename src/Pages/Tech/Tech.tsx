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
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Container>
      <Responsividade bgImgM={imgM} bgImgDesk={imgDesk} bgImgTablet={imgTa} />
      <TextoTopo numberText={"03"} text={"SPACE LAUNCH 101"} classType={false} />
      <main>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={rocket}
              title1={"THE TERMINOLOGY…"}
              title2={"LAUNCH VEHICLE"}
              text={`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`}
            />
          </SwiperSlide>

          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={port}
              title1={"THE TERMINOLOGY…"}
              title2={"SPACEPORT"}
              text={`A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`}
            />
          </SwiperSlide>

          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={pilot}
              title1={"THE TERMINOLOGY…"}
              title2={"SPACE CAPSULE"}
              text={`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`}
            />
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </main>
    </Container>
  );
};
