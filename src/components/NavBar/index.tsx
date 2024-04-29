import { Container, MenuHamburguer } from "./style";
import logoNavBar from '../../assets/Group 2.svg';

export const NavBar = () => {
  return (
    <Container>
      <img 
        src={logoNavBar}
        alt="logo no topo da tela"
      />
        <MenuHamburguer>
          <nav>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>teste</li>
            </ul>
          </nav>
        </MenuHamburguer>
    </Container>
  )
}
