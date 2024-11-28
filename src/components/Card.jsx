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
                <NameContainer>{name}
                <p>{price}$ </p>
                </NameContainer>
            </SubContainer>
            <SubContainer>
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
            </SubContainer>
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

`;

const AmountContainer = styled.div`
    display: flex;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const NameContainer = styled.h3`
    text-align: center;
`;

const InputContainer = styled.input`
    width: 40px;
    text-align: center;
    font-size: 0.8rem;

`;

const QuantityButton = styled.button`
    transform: scale(0.8);
`;

const CartButton = styled.button`

`;

const ImageContainer = styled.img`
    height: 200px;
    width: 200px;
    object-fit: contain;
`;

export {Card};