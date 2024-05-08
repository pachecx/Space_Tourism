import { Container } from "./style";
import { Responsividade } from "../../../components/Responsividade";
import imgMob from "../../../assets/destination/background-destination-mobile.jpg";
import bgImgTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgImgDesk from "../../../assets/destination/background-destination-desktop.jpg";
import moon from "../../../assets/destination/image-moon.png";

export const DestinationA = () => {
  return (
    <Container>
      <Responsividade
        bgImgM={imgMob}
        bgImgDesk={bgImgDesk}
        bgImgTablet={bgImgTablet}
      />
      <div className="Main">
        <p>
          <span>01</span>Pick your destination
        </p>
        <img src={moon} alt="Imagem da lua" />
        <nav>
          <ol>
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ol>
        </nav>
      </div>
      <div className="text">
        <h1>MOON</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
      </div>

      <div className="line"></div>
      <div className="distance">
        <span>AVG. DISTANCE</span>
        <p>384,400 km</p>

        <span>Est. travel time</span>
        <p>3 days</p>
      </div>
    </Container>
  );
};