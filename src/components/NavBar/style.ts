import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
right: 0;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

export const MenuHamburguer = styled.div`
  ul {
    display: flex;
    gap: 1.5rem;

    li{
        color: aliceblue;
    }
  }
`;
