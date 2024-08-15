import { Container, TextDistancia } from "./style";
import { Responsividade } from "../../../components/Responsividade";
import imgMob from "../../../assets/destination/background-destination-mobile.jpg";
import bgImgTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgImgDesk from "../../../assets/destination/background-destination-desktop.jpg";
import europa from "../../../assets/destination/image-europa.png";
import { Main } from "../../../components/Main";
import { Distancia } from "../../../components/Distancia";
import { NavDestinos } from "../../../components/NavDestinos";
import { LuaTexto } from "../../../components/LuaTexto";
import { Linha } from "../../../components/Linha";

export const DestinationC = () => {
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
        imgTela={europa}
        altImagem={"Imagem da lua Europa"}
      />

      <TextDistancia>
        <NavDestinos
          moom={"MOON"}
          mars={"MARS"}
          europa={"EUROPA"}
          titan={"TITAN"}
        />
        <LuaTexto
          lua={"EUROPA"}
          textoLua={`
          The smallest of the four Galilean moons orbiting Jupiter, 
          Europa is a winter lover’s dream. With an icy surface, it’s 
          perfect for a bit of ice skating, curling, hockey, or simple 
          relaxation in your snug wintery cabin.
        `}
        />
        <Linha />

        <Distancia
          distance={"AVG. DISTANCE"}
          km={"628 MIL. km"}
          travelTime={"EST. TRAVEL TIME"}
          days={"3 days"}
        />
      </TextDistancia>
    </Container>
  );
};
