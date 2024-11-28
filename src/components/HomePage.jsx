import { Link } from "react-router-dom";
import styled from 'styled-components';

function HomePage() {

    return (
        <MainContainer>
            <h1>Welcome to Something Something Shop</h1>
            <EnjoyContainer>Enjoy your Shopping!</EnjoyContainer>
            <Link style={{fontSize:"1.5rem"}} to={{pathname:"/shop"}}>Start Shopping</Link>
        </MainContainer>

        
    )

};

const MainContainer = styled.main`
    text-align: center;
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const EnjoyContainer = styled.h2`
    font-size: 2rem;
`;

export {HomePage};