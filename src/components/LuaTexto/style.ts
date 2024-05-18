import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 5.6rem;
    color: var(--branco);
  }

  p {
    color: var(--azul-pastel);
  }

  @media (min-width: 768px) {
    padding: 0 9.6rem;

    h1 {
      font-size: 8rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 2rem;

    h1 {
      margin: 3.7rem 0 1.4rem;
    }

    p {
      text-align: left;
      line-height: 2.5rem;
    }
  }
`;
