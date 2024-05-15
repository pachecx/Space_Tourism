import { Container } from "./style";

interface PropsMain {
  topTexto: string;
  tituloTexto: string;
  imgTela: string;
  altImagem: string;
}

export const Main: React.FC<PropsMain> = ({
  topTexto,
  tituloTexto,
  imgTela,
  altImagem
}) => {
  return (
    <Container>
      <p>
        <span>{topTexto}</span>
        {tituloTexto}
      </p>
      <img src={imgTela} alt={altImagem} />
    </Container>
  );
};
