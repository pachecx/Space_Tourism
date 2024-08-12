import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  //height: 100vh;
  //overflow: hidden;
  min-height: 600px;


  /* .bgIMg {
    position: absolute;
    z-index: -1;
    left: 0;
  } */

  .imgSwiper {
    width: 100%;
    position: relative;
  }

  .swiper-pagination {
    top: 23.5rem; /* Ajuste conforme necessário */
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  .swiper-pagination-bullet {
    width: 4rem;
    height: 4rem;
    border: 1px solid #fff;
    text-align: center;
    font-size: 16px;
    color: #FFFFFF;
    opacity: 1;
    padding-top: 8px;
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #ffff;
    color: #000;
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
     display: none;
    }

    .text {
      margin-top: 7rem;
      padding: 0 2.4rem;

      .textPosition {
        color: #D0D6F9;
        font-size: 1.4rem;
      }

      .textName {
        color: #ffff;
        font-size: 2.4rem;
      }

      .textAbout {
        color: #d0d6f9;
        margin-bottom: 1rem;
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
      padding-left: 30rem;

      .imgSwiper {
        margin: 0;
        height: 51.5rem;
        width: 52.7rem;
      }

      .text {
        text-align: left;
        width: 68.8rem;

        .textPosition {
          font-size: 1.6rem ;
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
      top: 15.5rem;
      left: 15%;
      width: 6%;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }

    .swiper-pagination-bullet {
      height: 8rem;
      width: 8rem;
      font-size: 3.2rem;
      padding: 1.5rem;
    }
  }
`;
