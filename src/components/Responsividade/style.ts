import styled from "styled-components";

export const Container = styled.div`
  .imgFundo {
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    //bottom: 0;
    //height: 100vh;
    width: 100%;
  }

  @media (min-width: 768px) {
    //height: 100vh;
    .imgFundo {
      //height: 100vh;
    }
  }

  @media (min-width: 1024px) {
    .imgFundo {
      height: 100vh;
    }
  }
`;
