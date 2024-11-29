import { MiniCard } from "./MiniCard";
import {useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MiniCardDisplay({data, deleteCart, changeCart, makeVisible}) {

    const cartRef = useRef();

    useEffect(() => {
        const handleOutside = (e) => {
            if (!cartRef.current.contains(e.target) && !e.target.classList.contains("showCartButton") && !e.target.parentNode.classList.contains("showCartButton")) {
                makeVisible();
            }

        }

        document.addEventListener("mousedown", handleOutside);

        return () => {
            document.removeEventListener("mousedown", handleOutside);
        }
    });

    return (
        <MiniCardContainer ref={cartRef} >
            <CartContainer className="cartList">
            { data.shopCart.length > 0 ? data.shopCart.map((val) => {
                return <MiniCard key={val[0]} deleteCart={deleteCart} changeCart={changeCart} id={val[0]} quantity={val[1]} price={Number(val[2])} name={val[3]} />
            }  ) : "No Items"
            }
            </CartContainer>
            <TotalContainer>{data.shopCart.length > 0 && data.shopCart.reduce((lastVal, val) => {
                return lastVal + (val[1] * Number(val[2]));
            }, 0).toFixed(2) + "$" } </TotalContainer>
            <CheckoutContainer><CheckoutButton>Checkout</CheckoutButton></CheckoutContainer>
        </MiniCardContainer>
    )

}

MiniCardDisplay.propTypes = {
    data: PropTypes.object,
    deleteCart: PropTypes.func,
    changeCart: PropTypes.func,
    makeVisible: PropTypes.func,

}

const MiniCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    gap: 10px;
    padding: 10px;
    background-color: #fca5a5;
    border: solid #db2777;

`;

const TotalContainer = styled.div`
    text-align: center;
    font-size: 1.05rem;
`;

const CheckoutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckoutButton= styled.button`
    background-color: #ffe4e6;
`;

const CartContainer = styled.div`
    text-align: center;

`;
export {MiniCardDisplay};