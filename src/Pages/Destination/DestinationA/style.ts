import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2.4rem;

  .Main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      margin: 3.2rem auto 2.6rem;
      width: 17rem;
      height: 17rem;
    }

    p {
      color: var(--branco);
      font-size: 1.6rem;

      span {
        font-weight: bold;
        margin-right: 1.8rem;
      }
    }

    .menu-nav {
      color: var(--azul-pastel);
      font-size: 1.2rem;
      width: 100%;

      ol {
        display: flex;
        justify-content: space-between;
        padding: 0 2.5rem;
      }

      ol li {
        list-style: none;
      }
    }

    //Versão Tablet
    @media(min-width: 768px){
      p{
        font-size: 2rem;
        text-align: left;

        span{
          color: #979797;
        }
      }

      img{
        height: 30rem;
        width: 30rem;
      }
    }
  }

  .text {
    text-align: center;

    h1 {
      color: var(--branco);
      font-size: 5.6rem;
      margin: 2rem auto 0.5rem;
    }
    p {
      color: var(--azul-pastel);
    }
  }

  .line {
    border-bottom: 1px solid #979797;
    margin: 3.2rem auto;
  }

  .distance {
    text-align: center;

    span {
      font-size: 1.4rem;
      color: var(--azul-pastel);
    }

    p {
      color: var(--branco);
      font-size: 2.8rem;
      margin: 1.2rem 3.2rem;
    }
  }

  @media (min-width: 768px){
    padding: 0 9.7rem;
  }
`;
