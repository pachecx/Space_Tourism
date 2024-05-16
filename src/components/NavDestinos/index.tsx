import React from "react";
import { Container } from "./style";

interface ProposNavDestinos{
    moom: string;
    mars: string;
    europa: string;
    titan: string;
}

export const NavDestinos: React.FC<ProposNavDestinos> = ({moom, mars, europa, titan}) => {
  return (
    <Container>
      <nav className="menu-nav">
        <ol>
          <li>
            <a>{moom}</a>
          </li>
          <li>
            <a>{mars}</a>
          </li>
          <li>
            <a>{europa}</a>
          </li>
          <li>
            <a>{titan}</a>
          </li>
        </ol>
      </nav>
    </Container>
  );
};