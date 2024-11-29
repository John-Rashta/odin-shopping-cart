import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Card({name, price, image, id, addCart}) {
    const [amount, setAmount] = useState(0);

    function increaseAmount() {
        if (isNaN(amount)) {
            setAmount(1);
        } else {
            setAmount(Number(amount) + 1);
        }
    }

    function decreaseAmount() {
        if (isNaN(amount)) {
            setAmount(0);
        } else {
            if (amount === 0) {
                return;
            }
            setAmount(Number(amount) - 1);
        }
    }
    return (
        <CardContainer>
            <SubContainer>
                <ImageContainer src={image} alt={name}/>
                <NameContainer>
                    <div>
                        {name}
                    </div>
                    <PriceContainer>
                        {price}$ 
                    </PriceContainer>
                </NameContainer>
            </SubContainer>
            <BottomContainer>
                <AmountContainer>
                    <QuantityButton onClick={increaseAmount} >&#x25B2;</QuantityButton>
                    <InputContainer
                    type="text"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                    />
                    <QuantityButton onClick={decreaseAmount} >&#x25BC;</QuantityButton>
                </AmountContainer>
                <CartButton
                onClick={ () => {
                    if (isNaN(amount)) {
                        setAmount(0);
                        return;
                    }
                    addCart(amount, id, price, name);
                    setAmount(0);
                    }
                }
                >Add to Cart</CartButton>
            </BottomContainer>
        </CardContainer>
    )

};

Card.propTypes = {
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    addCart: PropTypes.func,
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: solid #a21caf;
    border-radius: 10px;
    padding-bottom: 10px;
    background-color: #fecdd3;
    

`;

const AmountContainer = styled.div`
    display: flex;
    
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    background-color: white;
    padding-top: 10px;
    flex-grow: 1;
`;

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    background-color: #fecdd3;
    padding-top: 10px;

`;

const NameContainer = styled.h3`
    text-align: center;
    border-top: solid black;
    border-bottom: solid black;
    width: 100%;
    background-color: #fdf2f8;
    margin: 0;
    flex-grow: 1;
`;

const InputContainer = styled.input`
    width: 40px;
    text-align: center;
    font-size: 1rem;
    background-color: #fdf4ff;
    border-radius: 5px;
    border-color: #e11d48;
    box-shadow: none;
    &:focus {
        outline: none;
    }

`;

const QuantityButton = styled.button`
    transform: scale(0.8);
    background-color: #ec4899;
    &:focus {
        outline: none;
    }
`;

const CartButton = styled.button`
    background-color: #fb7185;
    &:focus {
        outline: none;
    }

`;

const ImageContainer = styled.img`
    height: 200px;
    width: 200px;
    object-fit: contain;
    background-color: transparent;
`;

const PriceContainer = styled.p`
    font-size: 1.1rem;
    font-weight: 500;

`;

export {Card};