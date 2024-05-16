import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2.4rem;
  height: 100vh;
`;

export const TextDistancia = styled.div`
  text-align: center;

  .menu-nav {
    padding: 0 3rem;
    margin-bottom: 2rem;

    ol {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        color: var(--azul-pastel);
        font-size: 1.4rem;
      }
    }
  }

  h1 {
    font-size: 5.6rem;
    color: var(--branco);
  }

  p {
    color: var(--azul-pastel);
  }
`;