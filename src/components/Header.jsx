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
                <Link to="/">Home</Link>
                <Link to={{pathname:"/shop"}}>Shop</Link>
            </LinkDiv>
            <div>Something Shop</div>
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
`;

const CartContainer = styled.div`
    position: relative;
`;

export {Header};