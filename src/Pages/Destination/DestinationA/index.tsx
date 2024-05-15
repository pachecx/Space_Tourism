import { Container, TextDistancia } from "./style";
import { Responsividade } from "../../../components/Responsividade";
import imgMob from "../../../assets/destination/background-destination-mobile.jpg";
import bgImgTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgImgDesk from "../../../assets/destination/background-destination-desktop.jpg";
import moon from "../../../assets/destination/image-moon.png";
import { Main } from "../../../components/Main";
import { Distancia } from "../../../components/Distancia";

export const DestinationA = () => {
  return (
    <Container>
      <Responsividade
        bgImgM={imgMob}
        bgImgDesk={bgImgDesk}
        bgImgTablet={bgImgTablet}
      />
      {/* <Main className="Main">
        <p>
          <span>01</span>Pick your destination
        </p>
        <img src={moon} alt="Imagem da lua" />
      </Main> */}

      <Main topTexto={"01"} tituloTexto={"Pick your destination"} imgTela={moon} altImagem={"Imagem da lua"} />
      
      <TextDistancia>
      <div className="text">
        <nav className="menu-nav">
          <ol>
            <li>
              <a>MOON</a>
            </li>
            <li>
              <a>MARS</a>
            </li>
            <li>
              <a>EUROPA</a>
            </li>
            <li>
              <a>TITAN</a>
            </li>
          </ol>
        </nav>
        <h1>MOON</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>

      <div className="line"></div>
      
      <Distancia distance={"AVG. DISTANCE"} km={"384,400 km"} travelTime={"Est. travel time"} days={"3 days"}/>
      </TextDistancia>
    </Container>
  );
};
