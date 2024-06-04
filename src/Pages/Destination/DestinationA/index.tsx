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

export const DestinationA = () => {
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
          lua={"MOON"}
          textoLua={`
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        `}
        />
        <Linha />

        <Distancia
          distance={"AVG. DISTANCE"}
          km={"384,400 km"}
          travelTime={"EST. TRAVEL TIME"}
          days={"3 days"}
        />
      </TextDistancia>
    </Container>
  );
};