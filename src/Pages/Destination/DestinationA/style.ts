import styled from "styled-components";

export const Container = styled.div`

    .Main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
        
        img{
            margin: 3.2rem auto 2.6rem;
        }
        
        p{
            color: var(--branco);
            font-size: 1.6rem;
            
            span{
                font-weight: bold;
                margin-right: 1.8rem;    
            }
        }
    }
`;