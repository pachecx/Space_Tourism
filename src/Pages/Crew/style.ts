import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #000;
  height: 100vh;

  .bgIMg {
    position: absolute;
    z-index: -1;
    left: 0;
  }

  .swiper-pagination {
    bottom: 190px; /* Ajuste conforme necessário */
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  
  .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: #56585e;
}

  .swiper-pagination-bullet-active {
  color: #fff;
  background: #ffff;
}

  .textTop {
    font-size: 1.6rem;
    color: #56585e;
    font-weight: bold;
    text-align: center;
    margin: 8.8rem auto 1.6rem;
    font-family: 'Barlow Condensed', sans-serif;
  }

  .numberTop {
    font-size: 1.6rem;
    color: #56585e;
    margin-right: 1.6rem;
  }

  main {
    .swipeContent {
      //height: 100vh;

      text-align: center;
    }

    img {
      height: 22.2rem;
      width: 17.7rem;
      margin: 0 auto;
    }

    .text {
      margin-top: 3.2rem;
      padding: 0 2.4rem;

      .textPosition {
        color: #56585e;
        font-size: 2.6rem;
      }

      .textName {
        color: #ffff;
        font-size: 2.4rem;
      }

      .textAbout {
        color: #d0d6f9;
      }
    }
  }
`;
