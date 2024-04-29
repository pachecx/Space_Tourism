import { Container } from "./style";
import bgImg from '../../assets/home/background-home-mobile.jpg';

export const Home = () => {
  return (
    <Container>
     <img className="imgFundo" src={bgImg} alt="Imagem de fundo" />

    </Container>
  )
}
