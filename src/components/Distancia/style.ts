import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;

  .distance {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .distance:nth-child(1) {
    border: 1px solid red;
    margin-bottom: 3.2rem;
  }

  span {
    color: var(--azul-pastel);
  }

  p {
    color: var(--branco);
  }

  @media (min-width: 768px){
    display: flex;
  }
`;
