import styled from "styled-components";

export const Container = styled.div`
  .menu-nav {
    padding: 0 3rem;
    margin-bottom: 2rem;

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
`;
