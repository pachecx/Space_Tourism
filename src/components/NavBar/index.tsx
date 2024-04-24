import { Container, MenuHamburguer } from "./style";
import logoNavBar from '../../assets/Group 2.svg';

export const NavBar = () => {
  return (
    <Container>
      <img 
        src={logoNavBar}
        alt="logo no topo da tela"
      />
        teste navbar
        <MenuHamburguer>
          <nav>
            
          </nav>
        </MenuHamburguer>
    </Container>
  )
}
