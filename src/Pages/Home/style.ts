import styled from "styled-components";

export const Container = styled.div`
    .imgFundo{
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        height: 100vh;
    }
`;


export const Main = styled.div`
    text-align: center;
    padding: 11.2rem 2.4rem 0;

    .title{
        color: var(--azul-pastel);
    }

    h1{
        color: var(--branco);
        margin: 1.6rem auto;
    }

    .text{
        font-size: 1.5rem;
        color: var(--azul-pastel);
        margin-bottom: 9.4rem;
    }

    .circulo{
        background: var(--branco);
        border-radius: 50rem;
        height: 15rem;
        width: 15rem;
        margin: 0 auto;

        padding: 6.5rem 3.4rem;

        p{
            font-size: 2rem;
        }
    }
`;