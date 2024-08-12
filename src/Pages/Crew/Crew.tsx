//Imagem dos astronautas
import astro from "../../assets/crew/image-douglas-hurley.png";
import specialist from "../../assets/crew/image-mark-shuttleworth.png";
import pilot from "../../assets/crew/image-victor-glover.png";
import enginer from "../../assets/crew/image-anousheh-ansari.png";
//Imagens de fundo
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
import { TextoTopo } from "../../components/TextoTopo_C";
import { SwiperSlideComponent } from "../../components/SwiperSlideComponents";

export const Crew = () => {
  return (
    <Container>
      <Responsividade bgImgM={imgM} bgImgDesk={imgDesk} bgImgTablet={imgTa} />
      <TextoTopo numberText={"02"} text={"Meet your crew"} classType={true}/>
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
            <SwiperSlideComponent
              imgSlide={astro}
              title1={"Commander"}
              title2={"Douglas Hurley"}
              text={`Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.`}
            />
          </SwiperSlide>

          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={specialist}
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

          <SwiperSlide className="swipeContent">
            <SwiperSlideComponent
              imgSlide={enginer}
              title1={"Flight Engineer"}
              title2={"Anousheh Ansari"}
              text={`Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.`}
            />
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </main>
    </Container>
  );
};
