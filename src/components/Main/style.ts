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

  @media (min-width: 768px){

    p{
      text-align: left;
      font-size: 2rem;
    }

    img{
      width: 30rem;
      height: 30rem;
      margin-top: 6rem;
    }
  }

  @media (min-width: 1024px){
    width: 45rem;
    height: 55.2rem;

    img{
      width: 44.5rem;
      height: 44.5rem;
    }
  }
`;
