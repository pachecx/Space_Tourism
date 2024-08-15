import styled from "styled-components";

export const Container = styled.div`
  .textTop {
    font-size: 1.6rem;
    color: #ffff;
    text-align: center;
    padding: 8.8rem 0 1.6rem;
    font-family: "Barlow Condensed";
    font-weight: 400;
  }

  .textTop2 {
    //margin: 4.8rem auto 1.6rem;
  }

  .numberTop {
    font-size: 1.6rem;
    color: #56585e;
    margin-right: 1.6rem;
  }

  @media (min-width: 768px) {
    overflow: hidden;

    .textTop {
      text-align: left;
      margin-left: 3.8rem;
    }
  }

  @media (min-width: 1024px) {
    .textTop {
      text-align: left;
      margin-left: 18rem;
      font-size: 2.8rem;
    }

    .numberTop {
      font-size: 2.8rem;
    }
  }
`;
