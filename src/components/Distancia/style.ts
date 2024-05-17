import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;

  .distance {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .distance:nth-child(1) {
    margin-bottom: 3.2rem;
  }

  span {
    color: var(--azul-pastel);
    font-size: 1.4rem;
  }

  p {
    color: var(--branco);
    font-size: 2.8rem;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }

  @media (min-width: 1024px){
    
  }
`;
