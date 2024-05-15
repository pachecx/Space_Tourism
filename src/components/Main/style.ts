import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;

  p {
    color: var(--branco);
    text-align: center;

    span {
      color: gray;
      margin-right: 1.8rem;
    }
  }

  img {
    width: 17rem;
    height: 17rem;
    display: flex;
    margin: 3.2rem auto;
  }
`;
