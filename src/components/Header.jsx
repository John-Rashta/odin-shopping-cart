import { Link } from "react-router-dom";
import { useState} from 'react';
import { MiniCardDisplay } from "./MiniCardDisplay";
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import styled from 'styled-components';


function Header({data, deleteCart, changeCart}) {
    const [visible, setVisible] = useState(false);
    

    function handleVisible() {
        setVisible(false);
        
    }
    
    return (
        <MainHeader>
            <LinkDiv>
                <Link style={{color: "#1d4ed8"}} to="/">Home</Link>
                <Link style={{color: "#1d4ed8"}} to={{pathname:"/shop"}}>Shop</Link>
            </LinkDiv>
            <NameDiv>Something Shop</NameDiv>
            <CartContainer>
                <LinkDiv className="showCartButton" onClick={() => {setVisible(!visible)}} >
                    <Icon className="showCartButton" path={mdiCart} size={1} />
                    <div>Cart</div>
                </LinkDiv>
                {visible &&  
                <MiniCardDisplay data={data} deleteCart={deleteCart} changeCart={changeCart} makeVisible={handleVisible} />
                }
            </CartContainer>
        </MainHeader>
    )

}

Header.propTypes = {
    data: PropTypes.object,
    deleteCart: PropTypes.func,
    changeCart: PropTypes.func,
}

const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    align-items: center;

`;

const LinkDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    user-select: none;
    font-size: 1.5rem;
    
`;

const CartContainer = styled.div`
    position: relative;
    color: black;
`;

const NameDiv = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: #831843;
`;

export {Header};