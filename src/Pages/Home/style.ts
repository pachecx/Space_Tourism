import styled from "styled-components";

export const Container = styled.div`
  //max-width: 42rem;
  margin: 0 auto;
  position: relative;
  height: 100vh;

  .imgFundo {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
  }

  @media (min-width: 1024px) {
  }
`;

export const Main = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 11.2rem 2.4rem 0;

  .title {
    color: var(--azul-pastel);
  }

  h1 {
    color: var(--branco);
    margin: 1.6rem auto;
  }

  .text {
    font-size: 1.5rem;
    color: var(--azul-pastel);
    margin-bottom: 9.4rem;
  }

  .circulo {
    background: var(--branco);
    border-radius: 50rem;
    height: 15rem;
    width: 15rem;
    margin: 0 auto;
    padding: 6.5rem 3.4rem;

    p {
      font-size: 2rem;
    }
  }

  //Versão Tablet
  @media (min-width: 768px) {
    width: 40rem;
  }

  //Versão DeskTop
  @media (min-width: 1024px) {
    width: 90%;
    display: flex;
    gap: 30rem;

    .textGeral,
    .circulo {
      margin-top: 10rem;
    }

    .textGeral {
      width: 45rem;
      height: 35rem;

      .title {
        font-size: 2.8rem;
      }

      h1 {
        font-size: 15rem;
      }

      .text {
        font-size: 1.8rem;
        text-align: left;
      }
    }

    .circulo {
      height: 27.4rem;
      width: 27.4rem;
      padding: 11.5rem 3.4rem;

      p {
        font-size: 3.2rem;
      }
    }
  }
`;
