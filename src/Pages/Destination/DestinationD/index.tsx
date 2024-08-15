import { Container, TextDistancia } from "./style";
import { Responsividade } from "../../../components/Responsividade";
import imgMob from "../../../assets/destination/background-destination-mobile.jpg";
import bgImgTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgImgDesk from "../../../assets/destination/background-destination-desktop.jpg";
import moon from "../../../assets/destination/image-moon.png";
import { Main } from "../../../components/Main";
import { Distancia } from "../../../components/Distancia";
import { NavDestinos } from "../../../components/NavDestinos";
import { LuaTexto } from "../../../components/LuaTexto";
import { Linha } from "../../../components/Linha";

export const DestinationD = () => {
  return (
    <Container>
      <Responsividade
        bgImgM={imgMob}
        bgImgDesk={bgImgDesk}
        bgImgTablet={bgImgTablet}
      />

      <Main
        topTexto={"01"}
        tituloTexto={"Pick your destination"}
        imgTela={moon}
        altImagem={"Imagem da lua"}
      />

      <TextDistancia>
        <NavDestinos
          moom={"MOON"}
          mars={"MARS"}
          europa={"EUROPA"}
          titan={"TITAN"}
        />
        <LuaTexto
          lua={"TITAN"}
          textoLua={`
          The only moon known to have a dense atmosphere other than Earth, 
          Titan is a home away from home (just a few hundred degrees colder!). 
          As a bonus, you get striking views of the Rings of Saturn.
        `}
        />
        <Linha />

        <Distancia
          distance={"AVG. DISTANCE"}
          km={"1.6 BIL. km"}
          travelTime={"EST. TRAVEL TIME"}
          days={"7 days"}
        />
      </TextDistancia>
    </Container>
  );
};