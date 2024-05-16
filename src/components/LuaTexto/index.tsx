import React from "react";
import { Container } from "./style";

interface ProposLuaTexto {
  lua: string;
  textoLua: string;
}

export const LuaTexto: React.FC<ProposLuaTexto> = ({ lua, textoLua }) => {
  return (
    <Container>
      <div className="text">
        <h1>{lua}</h1>
        <p>{textoLua}</p>
      </div>
    </Container>
  );
};