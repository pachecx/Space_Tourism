import styled from "styled-components";

export const Container = styled.div`
  .menu-nav {
    padding: 0 3rem;
    margin: 2rem 0 2rem;

    ol {
      display: flex;
      justify-content: space-between;
      list-style: none;

      li {
        color: var(--azul-pastel);
        font-size: 1.4rem;
      }
    }

    a:hover{
      cursor: pointer;
      color: var(--branco);
      font-weight: 600;
      transition: .2s;

      //text-decoration: underline 2px;
    }

    a:active{
      text-decoration: underline 2px;
    }
  }

  @media (min-width: 768px) {
    padding: 0 20rem;
  }

  @media (min-width: 1024px) {
    padding: 0;

    .menu-nav {
      padding: 0;
      width: 60%;
    }
  }
`;
