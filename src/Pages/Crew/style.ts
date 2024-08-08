import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #000;
  height: 100vh;
  overflow: hidden;

  .bgIMg {
    position: absolute;
    z-index: -1;
    left: 0;
  }

  .imgSwiper {
    position: relative;
  }

  .swiper-pagination {
    top: 23.5rem; /* Ajuste conforme necessário */
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
    color: #ffff;
    font-weight: bold;
    text-align: center;
    margin: 8.8rem auto 1.6rem;
    font-family: "Barlow Condensed", sans-serif;
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

    .line {
      border: 1.5px solid #383b4b;
      width: 90%;
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

  @media (min-width: 768px) {
    overflow: hidden;

    .textTop {
      text-align: left;
      margin-left: 3.8rem;
    }

    .line {
      display: none;
    }

    .swipeContent {
      display: flex;
      flex-direction: column-reverse;
      padding: 0 15.5rem;

      .text {
        .textPosition {
          font-size: 2.4rem;
        }
        .textName {
          font-size: 4rem;
        }
      }

      .imgSwiper {
        width: 45.6rem;
        height: 57.2rem;
        margin-top: 14rem;
      }
    }
  }

  @media (min-width: 1024px) {
    // overflow: hidden;

    .textTop {
      text-align: left;
      margin-left: 18rem;
      font-size: 2.8rem;
    }

    .numberTop {
      font-size: 2.8rem;
    }

    .swipeContent {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;

      .imgSwiper {
        margin: 0;
      }

      .text {
        text-align: left;
        width: 68.8rem;

        .textPosition {
          font-size: 3.2rem;
          color: #818387;
        }
        .textName {
          font-size: 5.6rem;
          width: 100%;
        }
        .textAbout {
          font-size: 1.8rem;
          width: 48.8rem;
        }
      }
    }

    .swiper-pagination {
      top: 45.5rem;
      left: 14%;
    }
  }
`;
