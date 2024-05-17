import styled from "styled-components";

export const Container = styled.div`
  .line {
    border-bottom: 1px solid #979797;
    width: 100%;
    margin-top: 3.2rem;
  }

  @media (min-width: 768px) {
    padding: 0 9.7rem;
  }

  @media (min-width: 1024px){
    padding: 0;
    
    .linha{
      margin-top: 5.4rem;
    }
  }
`;
