import { Container } from "./style";

interface TextoTopoProps{
  numberText: string;
  text: string;
}

export const TextoTopo = ({numberText, text}:TextoTopoProps) => {
  return (
    <Container>
      <p className="textTop">
        <span className="numberTop">{numberText}</span>
        {text}
      </p>
    </Container>
  );
};
