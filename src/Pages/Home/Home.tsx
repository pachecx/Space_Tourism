import { Container, Main } from "./style";
import bgImgMobile from "../../assets/home/background-home-mobile.jpg";
import bgImgTablet from "../../assets/home/background-home-tablet.jpg";
import bgImgDesk from "../../assets/home/background-home-desktop.jpg";
import { Responsividade } from "../../components/Responsividade";
export const Home = () => {
  return (
    <Container>
      <Responsividade
        bgImgM={bgImgMobile}
        bgImgDesk={bgImgDesk}
        bgImgTablet={bgImgTablet}
      />
      <Main>
        <div className="textGeral">
          <p className="title">SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p className="text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="circulo">
          <p>EXPLORE</p>
        </div>
      </Main>
    </Container>
  );
};
