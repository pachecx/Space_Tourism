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
  }

  @media (min-width: 768px) {
    padding: 0 20rem;
  }

  @media (min-width: 1024px) {
    border: 1px solid red;
    padding: 0;

    .menu-nav {
      padding: 0;
      width: 60%;
    }
  }
`;
