import imgMob from "../../../assets/destination/background-destination-mobile.jpg";
import bgImgTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgImgDesk from "../../../assets/destination/background-destination-desktop.jpg";
import mars from "../../../assets/destination/image-mars.png";
import { Main } from "../../../components/Main";
import { Distancia } from "../../../components/Distancia";
import { Linha } from "../../../components/Linha";
import { LuaTexto } from "../../../components/LuaTexto";
import { NavDestinos } from "../../../components/NavDestinos";
import { Responsividade } from "../../../components/Responsividade";
import { TextDistancia } from "../DestinationA/style";
import { Container } from "./style";

export const DestinationB = () => {
  return (
    <Container>
      <Responsividade
        bgImgM={imgMob}
        bgImgDesk={bgImgDesk}
        bgImgTablet={bgImgTablet}
      />

      <Main
        topTexto={"02"}
        tituloTexto={"Pick your destination"}
        imgTela={mars}
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
          lua={"MARS"}
          textoLua={`
         Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest
          planetary mountain in our solar system. It’s two and a half times the size of Everest!
        `}
        />
        <Linha />

        <Distancia
          distance={"AVG. DISTANCE"}
          km={"225 MIL. km"}
          travelTime={"EST. TRAVEL TIME"}
          days={"9 months"}
        />
      </TextDistancia>
    </Container>
  );
};
