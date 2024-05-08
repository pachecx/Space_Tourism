import { useState, useEffect } from "react";
import { Container } from "./style";

interface ResponsividadePops {
  bgImgM: string;
  bgImgDesk: string;
  bgImgTablet: string;
}

export const Responsividade: React.FC<ResponsividadePops> = ({ bgImgM, bgImgTablet, bgImgDesk }) => {
  const [bgImge, setbgImge] = useState<string>();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setbgImge(bgImgM);
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
    </Container>
  );
};
