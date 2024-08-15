import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

interface ProposNavDestinos {
  moom: string;
  mars: string;
  europa: string;
  titan: string;
}

export const NavDestinos: React.FC<ProposNavDestinos> = ({
  moom,
  mars,
  europa,
  titan,
}) => {
  return (
    <Container>
      <nav className="menu-nav">
        <ol>
          <li>
            <Link to={"/destinationA"}>{moom}</Link>
          </li>
          <li>
            <Link to={"/destinationB"}>{mars}</Link>
          </li>
          <li>
            <Link to={"/destinationC"}>{europa}</Link>
          </li>
          <li>
            <Link to={"/destinationD"}>{titan}</Link>
          </li>
        </ol>
      </nav>
    </Container>
  );
};
