import { Container, Main } from "./style";
import bgImgMobile from "../../assets/home/background-home-mobile.jpg";
import bgImgTablet from "../../assets/home/background-home-tablet.jpg";
import bgImgDesk from "../../assets/home/background-home-desktop.jpg";
import { useState, useEffect } from "react";

export const Home = () => {
  const [bgImge, setbgImge] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Lógica para escolher a imagem de acordo com o tamanho da tela
      if (screenWidth < 768) {
        setbgImge(bgImgMobile);
      } else if (screenWidth < 1024) {
        setbgImge(bgImgTablet);
      } else {
        setbgImge(bgImgDesk);
      }
    };

    // Chamando a função handleResize quando a tela for redimensionada
    window.addEventListener("resize", handleResize);

    // Chamando a função handleResize uma vez para definir a imagem de fundo inicial
    handleResize();

    // Removendo o event listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <img className="imgFundo" src={bgImge} alt="Imagem de fundo" />
      <Main>
        <div className="textGeral">
        <p className="title">SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p className="text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        </div>
        <div className="circulo">
          <p>EXPLORE</p>
        </div>
      </Main>
    </Container>
  );
};
