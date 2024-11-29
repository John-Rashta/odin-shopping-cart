import { Link } from "react-router-dom";
import styled from 'styled-components';

function HomePage() {

    return (
        <MainContainer>
            <HeaderContainer>Welcome to Something Something Shop</HeaderContainer>
            <EnjoyContainer>Enjoy your Shopping!</EnjoyContainer>
            <LinkContainer>
                <Link style={{fontSize:"1.5rem", color: "#6d28d9"}} to={{pathname:"/shop"}}>Start Shopping</Link>
            </LinkContainer>
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
    color: #404040;
`;

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderContainer = styled.h1`
    color: black;
`;

export {HomePage};