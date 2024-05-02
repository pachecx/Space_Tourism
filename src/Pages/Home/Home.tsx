import { Container, Main } from "./style";
import bgImg from "../../assets/home/background-home-mobile.jpg";

export const Home = () => {
  return (
    <Container>
      <img className="imgFundo" src={bgImg} alt="Imagem de fundo" />
      <Main>
        <p className="title">SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p className="text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <div className="circulo">
          <p>EXPLORE</p>
        </div>
      </Main>
    </Container>
  );
};
