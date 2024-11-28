import PropTypes from 'prop-types';
import styled from 'styled-components';
import deleted from "../assets/delete.svg";

function MiniCard({name, price, id, quantity, deleteCart, changeCart}) {

    return (
        <MiniCardStyle>
            <NameDiv>{name}</NameDiv>
            <div>{quantity} </div>
            <p>{(price * quantity).toFixed(2)}$ </p>
            <ButtonDiv>
                <QuantityButton onClick={() => changeCart(id, 1)} >+</QuantityButton>
                <QuantityButton onClick={() => changeCart(id, -1)} >-</QuantityButton>
            </ButtonDiv>
            <DeleteIcon
            src={deleted}
            alt=""
            onClick={ () => {
                deleteCart(id);
                }
            }
            />
        </MiniCardStyle>
    )

};

MiniCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteCart: PropTypes.func,
    changeCart: PropTypes.func,
}

const MiniCardStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

`;

const ButtonDiv = styled.div`
    display: flex;
    padding: 5px;
    
`;

const DeleteIcon = styled.img`
    min-width: 30px;
    max-width: 30px;
`;

const NameDiv = styled.h4`
    font-size: 0.8rem;
    min-width: 8vw;
    
`;

const QuantityButton = styled.button`
    border-radius: 25px;
    transform: scale(0.8);

`;

export {MiniCard};