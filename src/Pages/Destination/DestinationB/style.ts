import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2.4rem;
  height: 100vh;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 15rem;
  }
`;

export const TextDistancia = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    width: 44rem;
    height: 55.5rem;
    margin-top: 7rem;
    padding-top: 5rem;
  }
`;
