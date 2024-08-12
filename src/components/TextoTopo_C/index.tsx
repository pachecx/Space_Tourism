import { Container } from "./style";
interface TextoTopoProps{
  numberText: string;
  text: string;
  classType: boolean;
}

export const TextoTopo = ({numberText, text, classType}:TextoTopoProps) => {
  return (
    <Container>
      <p className={`textTop ${classType ? "textTop": "textTop2"}`}>
        <span className="numberTop">{numberText}</span>
        {text}
      </p>
    </Container>
  );
};
